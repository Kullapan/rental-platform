# RentalHub: Google-Powered Car Rental Platform

A full-stack car rental platform prototype architected for the Google ecosystem. This project features a premium, Material Design 3 inspired interface built with Vite and Tailwind CSS v3, covering both B2C (Customer) and B2B (Partner) workflows.

## 🚀 Key Features

### B2C Customer Journey (8 Screens)
- **Seamless Onboarding:** High-impact welcome screen and Google-integrated authentication.
- **Smart Search:** Location-based vehicle discovery with real-time filters and active promotions.
- **Detailed Listings:** Rich vehicle profiles with interactive spec grids and ratings.
- **Secure Booking:** Stepper-based confirmation flow with bank transfer verification and order summaries.
- **Personal Hub:** Verification status tracking and active/upcoming booking management.

### B2B Partner Ecosystem (4 Screens)
- **Operational Dashboard:** Real-time KPI tracking for fleet size, active bookings, and revenue trends.
- **Fleet Inventory:** Comprehensive management view for monitoring asset availability and maintenance.
- **Asset Registration:** Streamlined vehicle onboarding with document upload and pricing intelligence.
- **Booking Hub:** Centralized management of rental requests with confirm/decline capabilities.

## 🛠️ Technology Stack
- **Frontend:** Vite 5 (Vanilla JS)
- **Styling:** Tailwind CSS v3
- **Design System:** Material Design 3 (Tokens from Stitch MCP)
- **Typography:** [Work Sans](https://fonts.google.com/specimen/Work+Sans)
- **Icons:** [Material Symbols Outlined](https://fonts.google.com/icons)
- **Routing:** Custom Hash-based SPA Router

## 📂 Project Structure
- `src/pages/`: Contains the logic and templates for all 12 platform screens.
- `src/components/`: Reusable UI elements like Headers and Bottom Navigation.
- `tailwind.config.js`: Custom theme configuration mapping Stitch design tokens.
- `DESIGN.md`: Full design system documentation (Colors, Typography, Spacing).
- `PROJECT_CONTEXT.md`: Technical architecture and Firebase data schema.

## 🏁 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Access the App:**
   Open `http://localhost:5173` in your browser.

## 📜 Historical Logs
For detailed implementation progress and snapshots, see:
- [Historical Walkthrough (May 2, 2026)](./WALKTHROUGH_20260502_094931.md)

---
*Developed with ❤️ as a premium Google ecosystem prototype.*
