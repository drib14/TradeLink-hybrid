# 🏫 TradeLink (`tradelink-hybrid`)

> **Your campus. Your marketplace. One connected community.**

TradeLink is a hybrid mobile and web marketplace built exclusively for the **University of Cebu** student community. It replaces the chaos of scattered group chats and social media posts with one searchable, trust-verified, student-centered platform where students can **buy, sell, trade, and discover** second-hand books, uniforms, gadgets, school supplies, dorm items, and personal services — safely and conveniently.

<p align="center">
  <img src="apps/web/public/logo.png" alt="TradeLink Logo" width="120" style="border-radius: 24px;" />
</p>

---

## 📋 Table of Contents

- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Campuses Covered](#-campuses-covered)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [MVP Roadmap](#-mvp-roadmap)
- [Brand Identity](#-brand-identity)
- [Getting Started](#-getting-started)
- [Security & Environment](#-security--environment)
- [Documentation](#-documentation)
- [Out of Scope (MVP)](#-out-of-scope-mvp)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🔍 The Problem

Students across the University of Cebu system currently sell second-hand items through **scattered Facebook groups, GC threads, and social media posts**. This creates real friction:

- 📉 **Listings get buried** — good deals disappear in hours under unrelated chatter
- 🤷 **No trust signals** — buyers can't verify whether a seller is an enrolled UC student
- 💬 **Too much back-and-forth** — arranging meetups across multiple chat apps is frustrating
- 🚫 **No moderation** — scams and prohibited items have no central reporting or enforcement
- 🔍 **No searchability** — finding a specific textbook means scrolling through hundreds of unrelated posts

## 💡 The Solution

TradeLink brings all campus commerce into **one searchable, verified, moderated marketplace**:

- ✅ **Campus-verified accounts** — only verified UC students and staff participate
- 🔎 **Powerful search & filters** — find items by keyword, category, price, campus, and condition
- 💬 **Built-in messaging** — coordinate public campus meetups without leaving the app
- 🛡️ **Trust & safety** — reporting, blocking, and moderation tools built from day one
- 👨‍💼 **Admin console** — full operational control for campus administrators

---

## 🎓 Campuses Covered

TradeLink is pre-configured and seeded for all official University of Cebu campuses:

1. **University of Cebu - Main Campus** (Sanciangko St., Cebu City)
2. **University of Cebu - Banilad Campus** (Gov. Cuenco Ave., Banilad, Cebu City)
3. **University of Cebu - Lapu-Lapu and Mandaue (LM)** (A.C. Cortes Ave., Mandaue City)
4. **University of Cebu - Maritime Education and Training Center (METC)** (Alumnos, Mambaling, Cebu City)
5. **University of Cebu - Pardo-Talisay Campus** (Bulacao, Pardo, Cebu City)

---

## ✨ Key Features

### 🔐 Authentication & Campus Verification
- Email/password registration with secure hashing (Argon2id)
- Campus email verification (`@uc.edu.ph`) for student identity
- Role-based access control: **Guest → Student (Buyer/Seller) → Moderator → Admin**
- Secure session management with JWT access + refresh tokens
- Password reset with time-limited secure tokens

### 🛒 Marketplace Browsing
- **Home feed** with recent listings, category shortcuts, and debounced search
- **7 Core Categories**: Books & Learning Materials, Uniforms & Apparel, Electronics & Gadgets, Dorm & Living, Food & Snacks, Services & Tutoring, Miscellaneous
- **Advanced search**: keyword, category, price range, item condition, campus branch, sort order (newest, price ↑↓, relevance)
- **Listing detail**: photo carousel, price in PHP, condition badge, seller profile, campus meetup info
- **Favorites**: save listings for later (private to user)

### 📦 Listing Management
- Create listings with title, description, category, price, condition, up to 8 photos, and meetup preference
- **Listing lifecycle**: Draft → Pending Review → Published → Reserved → Sold / Archived / Removed
- Edit, pause, reserve, mark sold, or archive listings
- Image validation (type, size, content) and duplicate prevention

### 💬 Messaging & Notifications
- **Private 1:1 conversations** initiated directly from any listing
- **Real-time messaging** via WebSocket (Socket.IO)
- Conversation list with unread indicators and timestamps
- **Push notifications** (mobile) and in-app notifications for messages and listing events
- Privacy protection: phone numbers and private emails are never exposed by default

### 🤝 Exchange Coordination
- Agree on price, availability, and a **public campus meetup point** via in-app chat
- **Reservation system**: seller marks item as Reserved while exchange is pending
- Seller marks **Sold** after exchange; optional rating & feedback
- No in-app payments — users arrange payment directly with safe-exchange campus guidelines

### 🛡️ Trust & Safety
- **Report** any listing, user, or conversation with reason and details
- **Block users** — blocked users cannot initiate new conversations
- **Moderation queue** with status tracking, assignment, decision, and audit trail
- Admin can hide/remove listings, issue warnings, suspend/reactivate accounts
- Prohibited listings and conduct defined by campus policy

### 👨‍💼 Admin Console (Web)
- **Dashboard**: verified users, active listings, pending reports, registration trends
- **User management**: search, inspect, suspend/reactivate accounts, moderation history
- **Listing management**: search, filter, inspect, hide/remove content
- **Reports queue**: priority, status, assignment, resolution notes, audit trail
- **Category management**: create, rename, reorder, enable/disable
- **Configuration**: campus settings, listing limits, image limits, notification settings
- **Audit log**: actor, action, target, timestamp, and reason for every sensitive admin action

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Mobile App (Priority 1)** | React Native + Expo + TypeScript | Cross-platform Android/iOS app |
| **Mobile Styling** | NativeWind (Tailwind for RN) | Consistent design token system |
| **Web App** | Next.js + TypeScript | Responsive marketplace + admin console |
| **Web Styling** | Tailwind CSS | Utility-first CSS framework |
| **Backend API** | NestJS + TypeScript | Modular, validated, guard-protected API |
| **Database** | PostgreSQL | Relational data with transactional integrity |
| **ORM** | Prisma | Type-safe database access + migrations |
| **Auth** | JWT (access + refresh tokens) | Secure, stateless authentication |
| **Password Hashing** | Argon2id | Industry-standard password security |
| **Realtime** | Socket.IO (WebSocket) | Live messaging and notification events |
| **Object Storage** | S3-compatible (MinIO / AWS S3) | Listing and profile image storage |
| **Push Notifications** | Expo Notifications | Mobile push delivery |
| **CI/CD** | GitHub Actions | Automated lint, test, build, deploy |
| **Monitoring** | Error tracking + structured logs | Production health visibility |

---

## 📁 Project Structure

```
tradelink-hybrid/
├── apps/
│   ├── mobile/              # React Native + Expo app (Mobile First Target)
│   │   ├── app/             # expo-router screens ((auth), (tabs))
│   │   ├── assets/          # App icon (tl logo), adaptive-icon, splash
│   │   ├── components/      # UI components (Button, ListingCard, etc.)
│   │   ├── services/        # Axios client with auto-refresh
│   │   └── stores/          # Zustand auth & user stores
│   ├── web/                 # Next.js marketplace + admin console
│   │   ├── app/             # App router pages
│   │   └── public/          # TradeLink logo & brand assets
│   └── api/                 # NestJS modular monolith backend
│       ├── prisma/
│       │   ├── schema.prisma# Relational schema (13 models)
│       │   └── seed.ts      # Seeds 5 UC campuses, categories & secure admin
│       └── src/
│           ├── common/      # Guards, exception filters, DTO validation
│           └── prisma/      # Prisma lifecycle service
├── packages/
│   ├── contracts/           # Shared TypeScript types, enums & API models
│   ├── design-tokens/       # Brand colors (#0B236E navy, #F4B942 gold), spacing, shadows
│   └── config/              # Shared TypeScript & lint configuration
├── docs/                    # Architecture, Security & Mobile implementation plans
│   ├── SYSTEM_DESIGN.md
│   ├── SECURITY_AND_AUTH_PLAN.md
│   └── MOBILE_APP_PLAN.md
├── docker-compose.yml       # Local PostgreSQL + MinIO S3 services
├── .env.example             # Safe environment template
├── .gitignore               # Strict secret & build exclusion rules
└── README.md
```

---

## 🗺️ MVP Roadmap

| Phase | Scope | Exit Criteria |
|-------|-------|---------------|
| **Phase 0 — Discovery** | Stakeholder interviews, campus policy check, user journeys, clickable prototype, technical decisions | Scope approved; risks documented; prototype reviewed |
| **Phase 1 — MVP Foundation** | Auth, verification, profiles, categories, listing CRUD, image upload, browse/search, favorites | Students can register, verify, publish, find, and save listings |
| **Phase 2 — Communication** | Conversations, messaging, notifications, block/report, listing reservation/sold states | Buyer and seller can coordinate an exchange; abuse can be reported |
| **Phase 3 — Admin & Hardening** | Admin console, moderation queue, audit logs, security review, automated tests, monitoring, backups | Admins can safely operate the pilot; release checklist passes |
| **Phase 4 — Pilot & Iteration** | Limited campus rollout, feedback, analytics, bug fixes, performance improvements | Pilot KPIs reviewed; prioritized improvements agreed |

---

## 🎨 Brand Identity

| Element | Value |
|---------|-------|
| **App Name** | TradeLink |
| **Tagline** | Your campus. Your marketplace. One connected community. |
| **Personality** | Friendly, practical, student-first, trustworthy, local |

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| 🔵 TradeLink Deep Navy | `#0B236E` | App background, primary headings, trust |
| 🟡 TradeLink Gold / Amber | `#F4B942` | Accents, logo dot/strip, badges, highlights |
| 🔷 Action Blue | `#2563EB` | Buttons, links, active navigation |
| 🟢 Verified Teal | `#14B8A6` | Verification checkmarks, positive status |
| ⬜ Clean Surface | `#F3F6FA` | Background canvas |

---

## 🔐 Security & Environment

> [!IMPORTANT]
> **Zero Credential Exposure Guarantee**: Sensitive administrator credentials, database passwords, and JWT secret keys are never committed into git or exposed to GitHub. All secrets are configured strictly through your local `.env` file (which is git-ignored).

To configure local credentials:
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Define `ADMIN_DEFAULT_EMAIL` and `ADMIN_DEFAULT_PASSWORD` in `.env`.
3. The database seeder (`pnpm --filter @tradelink/api prisma:seed`) automatically provisions the admin account from these variables without exposing them in git history.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **PostgreSQL** 15+ (or run `docker compose up -d`)
- **pnpm** 9+
- **Expo CLI** (for mobile development)

### Quickstart

```bash
# 1. Install dependencies
pnpm install

# 2. Start local database & storage (optional if using Docker)
docker compose up -d

# 3. Setup environment variables
cp .env.example .env

# 4. Run database migrations and seed (seeds all 5 UC campuses)
pnpm --filter @tradelink/api prisma:migrate
pnpm --filter @tradelink/api prisma:seed

# 5. Start development servers
pnpm dev:api       # Backend API (:4000)
pnpm dev:mobile    # Expo mobile app
pnpm dev:web       # Next.js web application (:3000)
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [System Design](docs/SYSTEM_DESIGN.md) | Architecture, database schema, API specification, module structure, data flows |
| [Security & Auth Plan](docs/SECURITY_AND_AUTH_PLAN.md) | Authentication, authorization, attack prevention, data protection, security checklist |
| [Mobile App Plan](docs/MOBILE_APP_PLAN.md) | Mobile first roadmap, screen map, component library, API integration, sprint plan |

---

## 🚫 Out of Scope (MVP)

- ❌ In-app wallet, escrow, card payments, or holding user funds
- ❌ Delivery fleet, shipping labels, or logistics tracking
- ❌ Public anonymous marketplace access or nationwide listings
- ❌ AI recommendations, automated price estimation, or image recognition
- ❌ Complex bidding/auction mechanics, subscriptions, paid advertising
- ❌ Direct integration with university student information systems (unless formally approved)

---

## 📄 License

This project is proprietary. All rights reserved.

---

<p align="center">
  <strong>TradeLink</strong> — Your campus. Your marketplace. One connected community.
</p>
