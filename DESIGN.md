# RentalHub — Design System Reference

> Design specification for the Google-Powered Car Rental Platform.  
> Based on **Material Design 3** tokens sourced from the Stitch MCP project.

---

## 1. Color Palette

### Primary (Google Blue)

| Token | Hex | Usage |
|:------|:----|:------|
| `primary` | `#0058bd` | Primary actions, active states |
| `primary-container` | `#2771df` | Filled containers, FABs |
| `primary-fixed` | `#d8e2ff` | Fixed tonal surfaces |
| `primary-fixed-dim` | `#adc6ff` | Dimmed fixed surfaces |
| `on-primary` | `#ffffff` | Text/icons on primary |
| `on-primary-container` | `#fefcff` | Text/icons on primary container |
| `inverse-primary` | `#adc6ff` | Inverse surface primary |

### Secondary (Green)

| Token | Hex | Usage |
|:------|:----|:------|
| `secondary` | `#006e2c` | Secondary actions, verified states |
| `secondary-container` | `#86f898` | Success containers |
| `on-secondary` | `#ffffff` | Text/icons on secondary |

### Tertiary (Amber)

| Token | Hex | Usage |
|:------|:----|:------|
| `tertiary` | `#765700` | Tertiary actions, warnings |
| `tertiary-container` | `#956e00` | Warning containers |
| `tertiary-fixed-dim` | `#fbbc06` | Amber highlight |
| `on-tertiary` | `#ffffff` | Text/icons on tertiary |

### Error

| Token | Hex | Usage |
|:------|:----|:------|
| `error` | `#ba1a1a` | Error states, destructive actions |
| `error-container` | `#ffdad6` | Error background |
| `on-error-container` | `#93000a` | Error text |

### Google Brand Colors

| Token | Hex | Usage |
|:------|:----|:------|
| `google-blue` | `#4285F4` | Primary CTA buttons, links |
| `google-green` | `#34A853` | Success, confirmation |
| `google-yellow` | `#FBBC05` | Pending, attention |
| `google-red` | `#EA4335` | Error, decline |

### Surfaces & Backgrounds

| Token | Hex | Usage |
|:------|:----|:------|
| `surface` | `#f9f9ff` | Default page background |
| `surface-dim` | `#d8d9e3` | Dimmed surfaces |
| `surface-container-lowest` | `#ffffff` | Card backgrounds |
| `surface-container-low` | `#f2f3fd` | Sidebar, bottom nav |
| `surface-container` | `#ecedf7` | Containers |
| `surface-container-high` | `#e7e7f1` | Elevated containers |
| `surface-container-highest` | `#e1e2eb` | Highest elevation |
| `on-surface` | `#191b22` | Primary text |
| `on-surface-variant` | `#424753` | Secondary text |
| `outline` | `#727785` | Borders, dividers |
| `outline-variant` | `#c2c6d5` | Subtle borders |

---

## 2. Typography

**Font Family:** [Work Sans](https://fonts.google.com/specimen/Work+Sans)  
**Weights:** 300 (Light) · 400 (Regular) · 500 (Medium) · 600 (SemiBold) · 700 (Bold)

| Token | Size | Line Height | Weight | Use Case |
|:------|:-----|:------------|:-------|:---------|
| `display-lg` | 57px | 64px | 400 | Hero headings |
| `headline-lg` | 32px | 40px | 600 | Page titles |
| `headline-md` | 28px | 36px | 500 | Section titles |
| `title-lg` | 22px | 28px | 500 | Card titles, sub-headings |
| `body-lg` | 16px | 24px | 400 | Body text |
| `body-md` | 14px | 20px | 400 | Supporting text |
| `label-lg` | 14px | 20px | 500 | Button labels, emphasis |
| `label-md` | 12px | 16px | 500 | Captions, badges, chips |

---

## 3. Elevation (Box Shadows)

| Level | Shadow | Usage |
|:------|:-------|:------|
| `level-0` | none | Flat / pressed state |
| `level-1` | `0px 2px 4px rgba(0,0,0,0.05)` | Cards, inputs |
| `level-2` | `0px 4px 8px rgba(0,0,0,0.1)` | Hover state, modals |
| `level-3` | `0px 8px 16px rgba(0,0,0,0.12)` | FABs, popups, dropdowns |

---

## 4. Spacing & Layout

| Token | Value | Usage |
|:------|:------|:------|
| `unit` | 8px | Base spacing unit |
| `gutter` | 16px | Column/row gutters |
| `card` | 24px | Card internal padding |
| `input-gap` | 12px | Gap between form elements |
| `margin` | 24px | Section margins |

### Border Radius

| Token | Value | Usage |
|:------|:------|:------|
| `sm` | 4px | Subtle rounding |
| `DEFAULT` | 8px | Standard elements |
| `md` | 12px | Inputs, chips |
| `lg` | 16px | Cards |
| `xl` | 24px | Large containers |
| `full` | 9999px | Pills, avatars, badges |

---

## 5. Iconography

**Library:** [Material Symbols Outlined](https://fonts.google.com/icons)  
**Loaded via:** `<link>` tag in `index.html`

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
```

**Usage:**
```html
<span class="material-symbols-outlined">directions_car</span>
```

**Common icons used:**

| Icon | Name | Context |
|:-----|:-----|:--------|
| 🚗 | `directions_car` | Vehicle cards, logo |
| ⚡ | `electric_car` | EV vehicles |
| 🔍 | `search` | Search bars |
| 🏠 | `home` | Home navigation |
| 📋 | `event_note` | Bookings |
| 👤 | `person` | Profile |
| 📊 | `dashboard` | Partner dashboard |
| 🔧 | `settings` | Transmission spec |
| ⛽ | `local_gas_station` | Fuel type spec |
| 💺 | `airline_seat_recline_normal` | Seat count spec |

---

## 6. Component Library

### Buttons

| Class | Style | Usage |
|:------|:------|:------|
| `.btn-primary` | Google Blue, white text, rounded-full, shadow | Primary CTAs |
| `.btn-secondary` | Outlined, primary text, rounded-full | Secondary actions |
| `.btn-text` | No border, primary text | Tertiary / inline actions |

### Cards

| Class | Style |
|:------|:------|
| `.card` | White bg, rounded-xl, 24px padding, level-1 shadow, hover:level-2 |
| `.promo-card` | Gradient bg, rounded-xl, white text, overflow-hidden |

### Inputs

| Class | Style |
|:------|:------|
| `.input-outlined` | Full-width, border-outline-variant, rounded-lg, focus:primary border |
| `.input-label` | 12px label text above input |

### Badges

| Class | Color | Usage |
|:------|:------|:------|
| `.badge-confirmed` | Green bg/text | Verified, active, confirmed |
| `.badge-pending` | Amber bg/text | Pending, upcoming |
| `.badge-cancelled` | Red bg/text | Cancelled, error |
| `.badge-available` | Green bg/text | Vehicle available |
| `.badge-booked` | Blue bg/text | Vehicle booked |
| `.badge-maintenance` | Gray bg/text | Under maintenance |

### Navigation

| Class | Breakpoint | Description |
|:------|:-----------|:------------|
| `.bottom-nav` | < 768px | Fixed bottom tab bar (mobile) |
| `.desktop-nav` | ≥ 768px | Fixed left sidebar (desktop) |
| `.top-bar` | All | Sticky top app bar with backdrop blur |

### Other

| Class | Description |
|:------|:------------|
| `.fab` | Floating action button (bottom-right) |
| `.spec-chip` | Inline spec tag (e.g., "Auto", "Hybrid", "5 seats") |
| `.content-wrapper` | Responsive content area with sidebar offset |
| `.stepper-dot` / `.stepper-line` | Multi-step progress indicator |

---

## 7. Responsive Breakpoints

| Breakpoint | Min Width | Layout |
|:-----------|:----------|:-------|
| **Mobile** | 0px | Single column, bottom nav, stacked cards |
| **Tablet (md)** | 768px | Sidebar nav, 2-column grids |
| **Desktop (lg)** | 1024px | 3-column grids, split-view detail pages |
| **Wide (xl)** | 1280px | 4-column vehicle grid |

### Content Wrapper Behavior

```
Mobile:     px-4, pb-28 (space for bottom nav)
Desktop:    pl-72 (sidebar offset), pr-8, pb-8, pt-4
```

---

## 8. Page Architecture

### B2C Customer Flow

| # | Screen | Route | Key Components |
|:--|:-------|:------|:---------------|
| 1 | Welcome | `#welcome` | Hero gradient, feature pills, CTA buttons |
| 2 | Sign In | `#signin` | Email/password form, Google OAuth button |
| 3 | Verification | `#verification` | Profile card, status badges, upload areas |
| 4 | Search / Home | `#search` | Search bar, filter chips, promo grid, car cards |
| 5 | Vehicles | `#vehicles` | Filterable 4-column vehicle grid |
| 6 | Vehicle Detail | `#vehicle-detail` | 2-column media + info, spec grid, reserve popup |
| 7 | Confirm Booking | `#confirm-booking` | Stepper, trip details, payment form, summary |
| 8 | My Bookings | `#my-bookings` | Active rental card, upcoming list |

### B2B Partner Flow

| # | Screen | Route | Key Components |
|:--|:-------|:------|:---------------|
| 9 | Dashboard | `#partner-dashboard` | 3 KPI cards, revenue chart, Google integrations |
| 10 | Fleet | `#partner-fleet` | Vehicle cards grid, search, status badges |
| 11 | Add Vehicle | `#partner-add-vehicle` | Multi-section form, document upload |
| 12 | Bookings | `#partner-bookings` | Tabbed list, confirm/decline actions |

---

## 9. Project Structure

```
Rental-Platform/
├── index.html                     # Entry point, font loading
├── tailwind.config.js             # Design token definitions
├── postcss.config.js              # PostCSS with Tailwind plugin
├── package.json
├── firebase.json                  # Firebase hosting config
├── .firebaserc                    # Firebase project alias
│
├── src/
│   ├── main.js                    # SPA router + event binding
│   ├── style.css                  # Tailwind directives + components
│   ├── assets/                    # Static assets (images)
│   ├── components/
│   │   ├── header.js              # Top app bar
│   │   └── navbar.js              # Bottom nav (mobile) + Sidebar (desktop)
│   └── pages/
│       ├── welcome.js
│       ├── signin.js
│       ├── verification.js
│       ├── search.js
│       ├── vehicles.js
│       ├── vehicle-detail.js
│       ├── confirm-booking.js
│       ├── my-bookings.js
│       └── partner/
│           ├── dashboard.js
│           ├── fleet.js
│           ├── add-vehicle.js
│           └── bookings.js
│
└── functions/
    ├── index.js                   # Firebase Cloud Functions
    ├── package.json
    └── .env                       # Firebase config (not committed)
```

---

## 10. Animation & Transitions

| Effect | Property | Duration | Easing |
|:-------|:---------|:---------|:-------|
| Page fade-in | opacity + translateY | 250ms | ease-out |
| Card hover | box-shadow | 200ms | default |
| Button press | shadow level-2 → level-0 | 200ms | default |
| Nav item hover | background-color | 150ms | default |
| Reservation popup | transform + opacity | 400ms | cubic-bezier(0.22,1,0.36,1) |
| Popup backdrop | background + blur | 350ms | ease |

---

*Last updated: 2026-05-02*
