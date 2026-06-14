# Carebridge - Project Structure Documentation

## Overview
Carebridge is a React-based donation and charitable services platform built with Vite. The application connects donors with orphanages and facilitates charitable giving, volunteer coordination, and user management.

**Tech Stack:**
- Frontend: React 19.2.5
- Build Tool: Vite 8.0.10
- Routing: React Router DOM 7.15.0
- UI Framework: Bootstrap 5.3.8
- Icons: React Icons 5.6.0
- Calendar: React Calendar 6.0.1
- Deployment: GitHub Pages

---

## Directory Structure

```
Carebridge/
├── src/                          # Source code directory
│   ├── assets/                   # Static images and media
│   ├── components/               # Reusable UI components
│   ├── data/                     # Data files and constants
│   ├── pages/                    # Page-level routes
│   ├── routes/                   # Routing configuration
│   ├── App.jsx                   # App root component
│   ├── App.css                   # Global styles
│   └── main.jsx                  # React entry point
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
├── firebase.json                 # Firebase configuration
├── index.html                    # HTML entry point
└── README.md                     # Project overview
```

> Note: This workspace does not currently include a `public/` directory.

---

## `/src` Directory Details

### 📄 Core Files

| File | Purpose |
|------|---------|
| `main.jsx` | Mounts the React app into the DOM |
| `App.jsx` | Application root, layout, and route wrapper |
| `App.css` | Global and shared CSS styles |

---

### 📦 `/components` - Reusable Components

The `/components` folder contains reusable UI elements, listing pages, and dashboard widgets.

| Component | Purpose |
|-----------|---------|
| `Navbar.jsx` | Top-level navigation bar |
| `Hero.jsx` | Landing page hero section |
| `NeedsHero.jsx` | Featured needs section on the home page |
| `ActiveNeeds.jsx` | Displays currently active donation needs |
| `UrgentNeeds.jsx` | Urgent donation requests display |
| `HowItWorks.jsx` | Explains platform workflow |
| `ImpactSummary.jsx` | Displays impact metrics and achievements |
| `RecentActivity.jsx` | Recent platform activity feed |
| `Messages.jsx` | Messaging and notification panel |
| `Footer.jsx` | Shared footer component |
| `DonateCTA.jsx` | Donation call-to-action card |
| `NeedCard.jsx` | Individual need request card |
| `NeedsFilters.jsx` | Filters for browsing needs |
| `NeedsGrid.jsx` | Grid layout for need cards |
| `OrphanagesHero.jsx` | Orphanages listing hero section |
| `OrphanagesFilters.jsx` | Filters for orphanage search |
| `OrphanagesGallery.jsx` | Gallery of orphanage images |
| `OrphanageDetails.jsx` | Orphanage detail summary section |
| `OrphanageNeeds.jsx` | Orphanage needs listing |
| `OrphanageHeader.jsx` | Orphanage dashboard header |
| `OrphanageSidebar.jsx` | Orphanage admin sidebar navigation |
| `OrphanageStats.jsx` | Orphanage-specific metrics |
| `DonorHeader.jsx` | Donor dashboard header |
| `DonorSidebar.jsx` | Donor dashboard navigation |
| `DonorStats.jsx` | Donor-specific metrics |
| `ActionCards.jsx` | Dashboard action cards |
| `RecentDonations.jsx` | Donor donation history and activity |
| `UpcomingBookings.jsx` | Upcoming volunteer bookings and events |
| `UpcomingVisits.jsx` | Upcoming visits or appointments |

**Best Practices:**
- Functional React components
- Reusable props-driven design
- Bootstrap-based layout with custom CSS

---

### 📄 `/pages` - Page Components

Page components serve as route destinations and full views.

| Page | Purpose |
|------|---------|
| `Home.jsx` | Landing page with featured content |
| `DonorDashboard.jsx` | Donor portal with donations and stats |
| `OrphanageDashboard.jsx` | Orphanage admin portal |
| `AdminDashboard.jsx` | Admin overview and controls |
| `Needs.jsx` | Needs browsing and request discovery |
| `Orphanages.jsx` | Orphanage discovery and details |
| `Register.jsx` | User registration page |
| `VerifyEmail.jsx` | Email verification flow |

---

### 🛣️ `/routes` - Route Configuration

| File | Purpose |
|------|---------|
| `AppRoutes.jsx` | Central route definitions and component mapping |

**Usage:**
- Defines application routes
- Imports page components
- Handles route rendering logic

---

### 📊 `/data` - Data & Constants

**Currently:** Empty

**Intended Use:**
- Mock data for development
- Shared constants and configuration
- API endpoints and lookup tables

**Suggested future files:**
```
data/
├── mockDonations.js
├── mockOrphanages.js
├── constants.js
└── apiConfig.js
```

---

### 🎨 `/assets` - Static Media

Image and media assets used across the app.

**Best Practices:**
- Use descriptive asset names
- Organize by type or page when needed
- Optimize images for performance

---

## Component Hierarchy

```
App
├── Navbar
├── Routes
│   ├── Home
│   │   ├── Hero
│   │   ├── NeedsHero
│   │   ├── ActiveNeeds
│   │   ├── Stats
│   │   ├── UrgentNeeds
│   │   ├── HowItWorks
│   │   ├── ImpactSummary
│   │   ├── RecentActivity
│   │   └── Footer
│   ├── DonorDashboard
│   │   ├── DonorHeader
│   │   ├── DonorSidebar
│   │   ├── DonorStats
│   │   ├── ActionCards
│   │   ├── RecentDonations
│   │   ├── UpcomingBookings
│   │   ├── UpcomingVisits
│   │   ├── Messages
│   │   └── Footer
│   ├── OrphanageDashboard
│   │   ├── OrphanageHeader
│   │   ├── OrphanageSidebar
│   │   ├── OrphanageStats
│   │   └── Footer
│   └── AdminDashboard
│       └── Footer
└── Footer
```

---

## Development Workflow

### Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm lint
npm run deploy
```

`package.json` scripts are configured for Vite development and GitHub Pages deployment.

---

## Notes

- `firebase.json` exists in the project, but deploy currently uses `gh-pages`.
- `/src/data/` is empty and ready for mock or API data files.
- No `public/` directory is present in the workspace.

---

## Recommended Next Steps

1. Add shared data files in `/src/data/`
2. Document routes in `src/routes/AppRoutes.jsx`
3. Add reusable hooks for dashboard logic
4. Add loading/error states in pages and components
