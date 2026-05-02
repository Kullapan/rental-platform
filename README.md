# RentalHub — Vehicle Rental Platform

A modern vehicle rental web application built with **Vite + TailwindCSS**, powered by **Firebase** for hosting and backend services.

Booking data is automatically saved to **Google Sheets** via a serverless Cloud Function using the **"Zero Key" approach** (no hardcoded API keys in production).

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Initial Setup (First Time Only)](#initial-setup-first-time-only)
- [Local Development](#local-development)
- [Deploy to Production](#deploy-to-production)
- [Environment Variables Reference](#environment-variables-reference)
- [Security](#security)
- [Cost & Billing](#cost--billing)
- [Troubleshooting](#troubleshooting)

---

## Architecture Overview

```
┌─────────────────┐      POST /saveBooking       ┌──────────────────────┐
│   Frontend      │  ──────────────────────────►  │  Firebase Cloud      │
│   (Vite SPA)    │                               │  Function (Gen 2)    │
│                 │  ◄──────────────────────────  │  "saveBooking"       │
│  Firebase       │      { success: true }        │                      │
│  Hosting        │                               │  Node.js 22          │
└─────────────────┘                               └──────────┬───────────┘
                                                             │
                                                   Google Sheets API
                                                   (Zero Key / ADC)
                                                             │
                                                             ▼
                                                  ┌──────────────────────┐
                                                  │   Google Sheet       │
                                                  │   "ข้อมูลการจอง"      │
                                                  └──────────────────────┘
```

**Authentication approach:**

| Environment | Auth Method                                         |
|-------------|-----------------------------------------------------|
| Production  | **Zero Key (ADC)** — automatic via Cloud Run identity |
| Local Dev   | `service-account.json` key file via emulator         |

---

## Project Structure

```
Rental-Platform/
├── src/                        # Frontend source (Vite + TailwindCSS)
│   ├── main.js                 # App entry point, routing, booking API call
│   ├── style.css               # Global styles
│   └── pages/                  # Page components
├── functions/                  # Firebase Cloud Functions (backend)
│   ├── index.js                # saveBooking function
│   ├── package.json            # Node.js 22, dependencies
│   ├── .env                    # Deployed env vars (SPREADSHEET_ID, SHEET_NAME)
│   ├── .env.local              # Local-only env vars (GOOGLE_APPLICATION_CREDENTIALS)
│   ├── .env.example            # Template for new developers
│   └── service-account.json    # ⛔ Secret — never commit to Git
├── firebase.json               # Firebase Hosting + Functions config
├── .firebaserc                 # Firebase project alias (rental-platform-3d52f)
├── package.json                # Frontend dependencies
├── tailwind.config.js          # TailwindCSS configuration
└── .gitignore                  # Excludes secrets, node_modules, dist
```

---

## Prerequisites

| Tool             | Version  | Install                                         |
|------------------|----------|--------------------------------------------------|
| Node.js          | 22.x     | https://nodejs.org                               |
| Firebase CLI     | Latest   | `npm install -g firebase-tools`                  |
| Google Account   | —        | Owner of the target Google Sheet                 |

---

## Initial Setup (First Time Only)

### 1. Clone & Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend (Cloud Functions) dependencies
cd functions
npm install
cd ..
```

### 2. Firebase Login

```bash
firebase login
```

### 3. Create a Google Cloud Service Account (for local dev)

This is only needed for running the emulator locally. Production uses Zero Key.

1. Go to [Google Cloud Console → IAM & Admin → Service Accounts](https://console.cloud.google.com/iam-admin/serviceAccounts?project=rental-platform-3d52f)
2. Click **"+ Create Service Account"**
3. Name it (e.g., `svc-sheet`), click **Create and Continue**
4. Skip the optional permissions step, click **Done**
5. Click on the newly created service account → **Keys** tab → **Add Key** → **Create New Key** → **JSON**
6. Save the downloaded file as `functions/service-account.json`

> ⚠️ **NEVER commit `service-account.json` to Git.** It is already in `.gitignore`.

### 4. Configure Environment Variables

```bash
# Copy the example and fill in your values
cp functions/.env.example functions/.env
```

Edit `functions/.env`:
```env
SPREADSHEET_ID=<your-google-spreadsheet-id>
SHEET_NAME=<your-sheet-tab-name>
```

Create `functions/.env.local` (for local emulator only):
```env
GOOGLE_APPLICATION_CREDENTIALS="./service-account.json"
```

### 5. Share Google Sheet with Service Accounts

Open your Google Sheet → click **Share** → add these emails as **Editor**:

| Environment | Service Account Email                                      |
|-------------|-------------------------------------------------------------|
| Local Dev   | `<your-service-account>@<project>.iam.gserviceaccount.com` |
| Production  | `162405508383-compute@developer.gserviceaccount.com`        |

### 6. Enable Google Sheets API

Go to [Google Cloud Console → APIs & Services → Enable APIs](https://console.cloud.google.com/apis/library/sheets.googleapis.com?project=rental-platform-3d52f) and enable the **Google Sheets API**.

### 7. Firebase Blaze Plan (Required for Cloud Functions)

Cloud Functions requires the **Blaze (pay-as-you-go)** plan. Upgrade at:
https://console.firebase.google.com/project/rental-platform-3d52f/usage/details

> 💡 The Blaze plan includes a generous free tier. See [Cost & Billing](#cost--billing) for details.

### 8. Allow Unauthenticated Invocations

After first deploy, the Cloud Function defaults to private. You must allow public access:

1. Go to [Cloud Run Console](https://console.cloud.google.com/run?project=rental-platform-3d52f)
2. Click on the **`savebooking`** service
3. Go to **SECURITY** tab → set to **"Allow unauthenticated invocations"**
4. Click **Save**

> 🔒 This is safe because the function has CORS restrictions that only accept requests from your specific domains. See [Security](#security).

---

## Local Development

### Run Frontend (Vite dev server)

```bash
npm run dev
```
Opens at `http://localhost:5173`

### Run Backend (Firebase Emulator)

```bash
cd functions
firebase emulators:start --only functions
```
Emulator runs at `http://127.0.0.1:5001`

The frontend automatically detects `localhost` and routes API calls to the local emulator instead of production.

---

## Deploy to Production

### Deploy Cloud Functions Only

```bash
firebase deploy --only functions
```

### Deploy Website (Hosting) Only

```bash
npm run build
firebase deploy --only hosting
```

### Deploy Everything

```bash
npm run build
firebase deploy
```

> 💡 If `firebase` command fails in PowerShell, use `firebase.cmd` instead.

### Production URLs

| Service   | URL                                                                    |
|-----------|------------------------------------------------------------------------|
| Website   | https://rental-platform-3d52f.web.app                                  |
| API       | https://us-central1-rental-platform-3d52f.cloudfunctions.net/saveBooking |

---

## Environment Variables Reference

### `functions/.env` — Deployed to Production

| Variable         | Description                              | Example                                    |
|------------------|------------------------------------------|--------------------------------------------|
| `SPREADSHEET_ID` | Google Sheet ID (from the URL)           | `1oIYlMB6ffxgGpZuV7krGEkCaGwIOU1QTeGikpuHdQZo` |
| `SHEET_NAME`     | Tab name at the bottom of the sheet      | `ข้อมูลการจอง`                               |

### `functions/.env.local` — Local Emulator Only (never deployed)

| Variable                         | Description                           | Value                        |
|----------------------------------|---------------------------------------|------------------------------|
| `GOOGLE_APPLICATION_CREDENTIALS` | Path to service account key file      | `./service-account.json`     |

---

## Security

The API is protected by multiple layers:

### 1. CORS Origin Restriction

Only these domains can call the API (configured in `functions/index.js`):
```javascript
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://rental-platform-3d52f.web.app',
  'https://rental-platform-3d52f.firebaseapp.com'
];
```
Any request from another website will be rejected with a CORS error.

### 2. Instance & Timeout Limits

```javascript
exports.saveBooking = onRequest({
  maxInstances: 2,      // Max 2 servers at a time — prevents DDoS cost spikes
  timeoutSeconds: 15    // Kill slow requests after 15 seconds
}, ...);
```

### 3. Request Validation

- Only `POST` method is accepted (returns `405` otherwise)
- Request body must contain a valid `values` array (returns `400` otherwise)

### 4. Zero Key (ADC)

No API keys or credentials are stored in the code or environment. Production authentication is handled automatically by Google Cloud's identity system.

---

## Cost & Billing

### Google Sheets API
**100% Free** — No charges, only a quota of 300 requests/minute.

### Firebase Cloud Functions (Blaze Plan)

Even on the Blaze plan, there is a **generous free tier** included every month:

| Resource                 | Free Tier                   |
|--------------------------|-----------------------------|
| Invocations              | 2,000,000 requests/month    |
| Compute Time             | 400,000 GB-seconds/month    |
| Outbound Networking      | 5 GB/month                  |

> 💡 For a typical rental platform, the monthly bill will be **$0.00**.

### How to Protect Against Unexpected Costs

1. **Code-level limits** (`maxInstances: 2`) are already configured
2. **Set a budget alert** at [Google Cloud Billing → Budgets](https://console.cloud.google.com/billing/budgets)
   - Set target amount to **$1.00**
   - Get email alerts at 50%, 90%, 100%
3. You can **downgrade back to the Spark (free) plan** at any time from the Firebase Console

---

## Troubleshooting

| Error | Cause | Solution |
|-------|-------|----------|
| `403 Insufficient Permission` | Service account doesn't have access to the Google Sheet | Share the sheet with the service account email as **Editor** |
| `403 Access Not Configured` | Google Sheets API is not enabled | Enable it in [Google Cloud Console → APIs](https://console.cloud.google.com/apis/library/sheets.googleapis.com?project=rental-platform-3d52f) |
| `400 Unable to parse range` | Sheet tab name doesn't match `SHEET_NAME` in `.env` | Open the Google Sheet and verify the exact tab name at the bottom |
| `403 The request was not authenticated` | Cloud Function is set to private | Go to Cloud Run → `savebooking` → Security → Allow unauthenticated |
| `Build failed: missing permission` | Build service account lacks Artifact Registry access | Go to IAM → find `*-compute@developer.gserviceaccount.com` → add **Artifact Registry Writer** role |
| `Runtime Node.js 18 was decommissioned` | Outdated Node.js version in `functions/package.json` | Change `"node": "18"` to `"node": "22"` |
| `firebase.ps1 cannot be loaded` | PowerShell execution policy blocks scripts | Use `firebase.cmd` instead of `firebase` |
| `CORS error` in browser console | Request origin not in the allowed list | Add your domain to `allowedOrigins` in `functions/index.js` |

---

## Google Sheet Data Format

Each booking row contains the following columns:

| Column | Field        | Example               |
|--------|--------------|-----------------------|
| A      | Timestamp    | `2026-05-02T08:30:00Z`|
| B      | Vehicle Name | `Toyota RAV4`         |
| C      | Start Date   | `2026-05-10`          |
| D      | Start Time   | `09:00`               |
| E      | End Date     | `2026-05-15`          |
| F      | End Time     | `18:00`               |
| G      | Duration     | `5 days`              |
| H      | Total        | `$425.00`             |

To add new fields in the future, simply append them to the `valuesToSave` array in `src/main.js`. No backend changes are needed.

---

*Last updated: 2026-05-02*
