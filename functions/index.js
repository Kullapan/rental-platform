const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { google } = require("googleapis");

// Restrict API access to ONLY your specific domains for security
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://rental-platform-3d52f.web.app',
  'https://rental-platform-3d52f.firebaseapp.com'
];

const cors = require("cors")({
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests) 
    // OR if the origin is exactly your website
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
});

exports.saveBooking = onRequest({ 
  maxInstances: 2, 
  timeoutSeconds: 15 
}, (request, response) => {
  cors(request, response, async () => {
    try {
      // 1. Validate request method
      if (request.method !== 'POST') {
        return response.status(405).send({ error: 'Method Not Allowed' });
      }

      // 2. Extract values from request body
      // We expect the frontend to send a JSON body with a 'values' array
      // e.g. { values: ["Toyota RAV4", "2026-05-02", ...] }
      const bodyValues = request.body.values;
      
      if (!bodyValues || !Array.isArray(bodyValues)) {
        return response.status(400).send({ error: 'Invalid payload: expected an array of values.' });
      }

      // Add a timestamp as the first column for tracking
      const timestamp = new Date().toISOString();
      const rowData = [timestamp, ...bodyValues];

      // 3. Initialize Google Auth (Zero Key approach using ADC)
      const authOptions = {
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
      };

      // In local emulator, force it to use the service account file since the emulator overrides ADC
      if (process.env.FUNCTIONS_EMULATOR === 'true') {
        authOptions.keyFile = './service-account.json';
      }

      const auth = new google.auth.GoogleAuth(authOptions);

      const authClient = await auth.getClient();
      const sheets = google.sheets({ version: 'v4', auth: authClient });

      const spreadsheetId = process.env.SPREADSHEET_ID;
      
      if (!spreadsheetId) {
        throw new Error('SPREADSHEET_ID is not configured in environment variables.');
      }

      // 4. Append to Google Sheet
      const sheetName = process.env.SHEET_NAME || 'Sheet1';
      const responseSheet = await sheets.spreadsheets.values.append({
        spreadsheetId: spreadsheetId,
        range: sheetName,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [rowData]
        }
      });

      logger.info('Successfully appended row to Google Sheet', { 
        updatedCells: responseSheet.data.updates.updatedCells 
      });

      return response.status(200).send({ 
        success: true, 
        message: 'Booking saved successfully',
        updates: responseSheet.data.updates 
      });

    } catch (error) {
      logger.error('Error saving booking to Google Sheets:', error);
      return response.status(500).send({ 
        error: 'Internal Server Error',
        details: error.message 
      });
    }
  });
});
