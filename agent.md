# Agent Instructions — RentalHub Platform

> This file provides guidance for AI coding agents working on this project.  
> **Read this file before making any changes.**

---

## 1. Technology Stack

| Layer | Technology | Version | Notes |
|:------|:-----------|:--------|:------|
| **Frontend** | Vite | 5.x | Vanilla JS, ES Modules (`"type": "module"`) |
| **Styling** | Tailwind CSS | 3.x | Custom design tokens in `tailwind.config.js` |
| **PostCSS** | PostCSS | 8.x | Plugins: `tailwindcss`, `autoprefixer` |
| **Icons** | Material Symbols Outlined | — | Loaded via `<link>` in `index.html` |
| **Typography** | Work Sans | — | Google Fonts, weights 300–700 |
| **Backend** | Firebase Cloud Functions | v2 (Gen 2) | Node.js 18, `firebase-functions/v2/https` |
| **Google APIs** | googleapis | 133.x | Google Sheets API v4 |
| **Auth** | Google Auth Library | 9.x | Application Default Credentials (ADC) |
| **Hosting** | Firebase Hosting | — | Static `dist/` served via CDN |
| **Routing** | Hash-based SPA Router | Custom | Implemented in `src/main.js` |

### Frontend Architecture
- **No framework** — Pure Vanilla JS with template literals.
- **Component pattern** — Each page exports a single `render*()` function that returns an HTML string.
- **Shared components** — `src/components/header.js` (top bar) and `src/components/navbar.js` (bottom nav + sidebar).
- **State** — Currently stateless (no client-side state manager). All data is mock/static. Future state should be handled via Firebase SDK or simple module-level variables.

---

## 2. Security Model — "Zero Key" Approach

### ⚠️ CRITICAL: No API keys, tokens, or credentials may ever appear in frontend code.

This project follows a **Zero Key** architecture. The frontend is a **dumb client** that talks only to our own Firebase Cloud Functions. All sensitive operations (Google Sheets, Google Calendar, etc.) happen server-side.

### How It Works

```
┌────────────────────┐      HTTPS POST       ┌──────────────────────┐
│                    │  ──────────────────►   │                      │
│   Frontend (Vite)  │                        │  Cloud Function      │
│   Static HTML/JS   │  ◄──────────────────   │  (Node.js 18)        │
│                    │      JSON Response     │                      │
│   NO API KEYS      │                        │  ✅ Has ADC           │
│   NO SERVICE ACCT  │                        │  ✅ Has .env          │
│   NO FIREBASE SDK  │                        │  ✅ Has googleapis    │
│                    │                        │                      │
└────────────────────┘                        └──────────────────────┘
                                                       │
                                                       ▼
                                              ┌──────────────────────┐
                                              │  Google APIs         │
                                              │  (Sheets, Calendar)  │
                                              └──────────────────────┘
```

### Rules for Agents

1. **NEVER** put Firebase config objects (`apiKey`, `authDomain`, etc.) in frontend code.
2. **NEVER** import `firebase/app`, `firebase/auth`, or any Firebase client SDK in `src/`.
3. **NEVER** hardcode spreadsheet IDs, project IDs, or service account emails in frontend files.
4. **ALL** Google API calls must go through a Cloud Function in `functions/index.js`.
5. **ALL** secrets must be stored in `functions/.env` (for local) or Firebase environment config (for production).
6. The frontend calls Cloud Functions via `fetch()` to their deployed HTTPS URL.

### Authentication Strategy

| Environment | Method | Details |
|:------------|:-------|:--------|
| **Production** | Application Default Credentials (ADC) | Cloud Functions automatically inherit the project's service account. **No key file needed.** |
| **Local Emulator** | Service Account JSON | `functions/service-account.json` is used only when `FUNCTIONS_EMULATOR === 'true'`. |

```js
// ✅ CORRECT — Zero Key ADC pattern in Cloud Functions
const authOptions = {
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
};

// Only use key file in local emulator
if (process.env.FUNCTIONS_EMULATOR === 'true') {
  authOptions.keyFile = './service-account.json';
}

const auth = new google.auth.GoogleAuth(authOptions);
```

---

## 3. Environment Variables

### `functions/.env` (Local Development)

```env
SPREADSHEET_ID=<google-sheets-id>
GOOGLE_APPLICATION_CREDENTIALS=./service-account.json
SHEET_NAME=<sheet-tab-name>
```

### Production (Firebase)

Set via Firebase CLI — **never** in code:
```bash
firebase functions:config:set sheets.id="<spreadsheet-id>" sheets.name="<sheet-name>"
```

Or use Firebase Functions v2 `defineSecret()`:
```bash
firebase functions:secrets:set SPREADSHEET_ID
```

### Files That Must NEVER Be Committed

| File | Reason | Protected By |
|:-----|:-------|:-------------|
| `functions/.env` | Contains Spreadsheet ID | `.gitignore` |
| `functions/service-account.json` | Contains private key | `.gitignore` |
| `service-account*.json` | Any SA key file | `.gitignore` |
| `.env` / `.env.*` | Root env files | `.gitignore` |

> **Before every commit, verify:** `git status` should NOT show any `.env` or `service-account*.json` files.

---

## 4. Cloud Functions Guidelines

### Request Handling Pattern

All Cloud Functions must follow this pattern:

```js
const { onRequest } = require("firebase-functions/v2/https");
const cors = require("cors")({ origin: true }); // TODO: restrict in production

exports.functionName = onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      // 1. Validate HTTP method
      if (request.method !== 'POST') {
        return response.status(405).send({ error: 'Method Not Allowed' });
      }

      // 2. Validate input
      // 3. Authenticate with Google APIs via ADC
      // 4. Perform operation
      // 5. Return structured JSON response

    } catch (error) {
      logger.error('Error:', error);
      return response.status(500).send({ 
        error: 'Internal Server Error',
        // ⚠️ In production, do NOT return error.message to the client
      });
    }
  });
});
```

### Production Hardening Checklist

- [ ] **CORS:** Restrict `origin` to your Firebase Hosting domain only (`origin: 'https://your-project.web.app'`).
- [ ] **Rate Limiting:** Add `maxInstances` to function config to prevent abuse.
- [ ] **Input Validation:** Sanitize all user input before sending to Google APIs.
- [ ] **Error Messages:** Never return stack traces or internal error details to the client.
- [ ] **HTTPS Only:** Firebase Functions are HTTPS by default — never downgrade.

---

## 5. Frontend-to-Backend Communication

### Calling Cloud Functions from Frontend

```js
// ✅ CORRECT — Call our own Cloud Function, no API keys exposed
const response = await fetch('https://us-central1-<project-id>.cloudfunctions.net/saveBooking', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    values: ['Toyota RAV4', '2026-05-02', '2026-05-05', 'John Doe', 'john@example.com']
  })
});

const result = await response.json();
```

```js
// ❌ WRONG — NEVER do this in frontend
import { initializeApp } from 'firebase/app';
const firebaseConfig = { apiKey: "..." }; // EXPOSED TO PUBLIC!
```

### Function URL Management

| Environment | URL Pattern |
|:------------|:-----------|
| **Emulator** | `http://127.0.0.1:5001/<project-id>/us-central1/saveBooking` |
| **Production** | `https://us-central1-<project-id>.cloudfunctions.net/saveBooking` |

Store the base URL in a simple config constant (no secrets):
```js
// src/config.js
const IS_DEV = window.location.hostname === 'localhost';
export const API_BASE = IS_DEV 
  ? 'http://127.0.0.1:5001/<project-id>/us-central1'
  : 'https://us-central1-<project-id>.cloudfunctions.net';
```

---

## 6. Project Conventions

### File Naming
- Pages: `src/pages/<page-name>.js` (kebab-case)
- Partner pages: `src/pages/partner/<page-name>.js`
- Components: `src/components/<component-name>.js`
- Cloud Functions: `functions/index.js` (single entry point)

### CSS / Styling
- **All styles via Tailwind utility classes** — no inline `style` except for icon `font-size`.
- **Custom components** defined in `src/style.css` under `@layer components`.
- **Design tokens** defined in `tailwind.config.js` — never use raw hex in templates.
- Refer to `DESIGN.md` for the full token reference.

### Responsive Design
- Mobile-first approach.
- Use `.content-wrapper` on all page content divs.
- Bottom nav (`.bottom-nav`) for mobile, sidebar (`.desktop-nav`) for desktop.
- Tailwind breakpoints: `md:` (768px), `lg:` (1024px), `xl:` (1280px).

### Routing
- Hash-based: `window.location.hash = 'page-name'`
- Route map in `src/main.js`
- Navigation via `data-navigate="route-name"` attributes on clickable elements.

---

## 7. Deployment Workflow

```bash
# 1. Build frontend
npm run build

# 2. Deploy Cloud Functions only
cd functions && npm run deploy

# 3. Deploy everything (hosting + functions)
firebase deploy

# 4. Deploy hosting only
firebase deploy --only hosting
```

### Pre-Deployment Security Checklist

- [ ] `functions/.env` is in `.gitignore`
- [ ] `functions/service-account.json` is in `.gitignore`
- [ ] No API keys in any `src/` file
- [ ] CORS origin is restricted to production domain
- [ ] `maxInstances` is set on all Cloud Functions
- [ ] Error responses do not leak internal details
- [ ] `firebase-debug.log` is in `.gitignore`

---

## 8. Local Development Setup

```bash
# Install frontend dependencies
npm install

# Install function dependencies
cd functions && npm install && cd ..

# Start frontend dev server
npm run dev

# Start Firebase emulator (separate terminal)
firebase emulators:start --only functions

# Required files for local development:
# - functions/.env          (get from team lead)
# - functions/service-account.json  (get from Firebase Console → Project Settings → Service Accounts)
```

### Creating `functions/.env` from scratch

```bash
# Copy the example and fill in values
cp functions/.env.example functions/.env
```

### `.env.example` template (safe to commit):

```env
SPREADSHEET_ID=<your-google-spreadsheet-id>
GOOGLE_APPLICATION_CREDENTIALS=./service-account.json
SHEET_NAME=<your-sheet-tab-name>
```

---

*Last updated: 2026-05-02*
