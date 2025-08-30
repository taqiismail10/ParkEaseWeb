# ParkEase Landing Website

A modern, responsive landing site for **ParkEase** built with the **PERN stack (Postgres, Express, React/Next.js, Node)** and **Prisma ORM**. This landing site is designed to attract **drivers, investors, and media** while remaining lightweight, future-proof, and scalable into the full ParkEase product.

---

## 🚀 Features

* **Waitlist Signup** – Collect early adopters’ emails.
* **Contact & Inquiries** – General, Investor, Media, Partnership forms.
* **Press & Updates** – Showcase milestones, funding, incubator program.
* **Investor Page** – Market opportunity, milestones, funding details.
* **Team & About Page** – Mission, vision, team bios.
* **Privacy Policy** – Legal basics.
* **Global Navigation & Footer** – Accessible on all pages.

---

## 🛠 Tech Stack

* **Frontend:** React (Next.js) + TailwindCSS
* **Backend:** Node.js + Express
* **Database:** PostgreSQL (Supabase/Neon/Postgres on Vercel)
* **ORM:** Prisma
* **Hosting:** Vercel (Frontend + API)
* **Deployment:** CI/CD via GitHub + Vercel

---

## 📂 Project Structure
```
ParkEaseWeb/
├── client/                     # Next.js frontend (React)
│   ├── public/                 # Static assets (icons, images, etc.)
│   ├── src/                    # App source code
│   ├── components.json         # UI components config
│   ├── eslint.config.mjs       # ESLint rules
│   ├── jsconfig.json           # Path aliases for Next.js
│   ├── next.config.mjs         # Next.js config
│   ├── package.json            # Frontend dependencies & scripts
│   └── ...                     # Other Next.js project files
│
├── server/                     # Express backend + Prisma ORM
│   ├── config/                 # Config files (e.g., middleware, settings)
│   ├── controllers/            # Request handlers / business logic
│   ├── routes/                 # API route definitions
│   ├── validations/            # Input validation logic
│   ├── DB/                     # Database-related utilities/helpers
│   ├── prisma/                 # Prisma schema & migrations
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── server.js               # Express server entrypoint
│   ├── package.json            # Backend dependencies & scripts
│   └── .env                    # Environment variables (ignored by git)
│
├── package-lock.json           # Global lock file (monorepo-level if used)
├── README.md                   # Project documentation (you’re editing this)
└── ...                         # Other root configs if added
```
---


## 📜 Scripts Overview

### 🔹 Backend (run from `/server`)

| Command                                                | Description                                                       |
| ------------------------------------------------------ | ----------------------------------------------------------------- |
| `npm i`                                                | Install backend dependencies                                      |
| `npm run server`                                       | Start Express backend server (default: `http://localhost:5000`)   |
| `npx prisma migrate dev --schema=prisma/schema.prisma` | Apply DB migrations (creates/updates schema)                      |
| `npx prisma generate --schema=prisma/schema.prisma`    | Generate Prisma Client (required after migrations or fresh clone) |
| `npx prisma studio`                                    | Open Prisma Studio (GUI for inspecting your DB)                   |

### 🔹 Frontend (run from `/client`)

| Command         | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| `npm i`         | Install frontend dependencies                               |
| `npm run dev`   | Start Next.js dev server (default: `http://localhost:3000`) |
| `npm run build` | Build production bundle                                     |
| `npm run start` | Run production server after build                           |

---

✨ **Pro tip:** Always start backend **before** frontend, so API requests don’t fail.

---

Do you want me to also add a **“Typical Development Flow”** section (step 1 DB, step 2 backend, step 3 frontend) as a quick-glance workflow for contributors?

---
## 🗄 Database Schema

Key models defined in `schema.prisma`:

* `WaitlistSignup` – Early users joining the waitlist.
* `ContactInquiry` – General, investor, media, or partnership inquiries.
* `PressItem` – Published press mentions.
* `UpdatePost` – Short updates/blog-style posts.
* `TeamMember` – Founding team bios.
* `Milestone` – Funding, incubator, product, or partnership milestones.
* `FundingRound` – Funding round details.
* `MediaAsset` – Photos and media.
* `SiteSetting` – Configurable site-wide settings.

---
## Clone the Repository

```bash
git clone https://github.com/your-org/parkease.git
cd parkease
```

---

## Install Dependencies & Run the Project (DB → Backend → Frontend)

> Recommended order: **Database** → **Backend** → **Frontend**
> Monorepo layout:
>
> ```
> ParkEaseWeb/
> ├─ client/     # Next.js frontend
> └─ server/     # Node/Express + Prisma backend
> ```

## 0) Prerequisites

* **Node.js** 18+ and **npm**
* **PostgreSQL** 16+ (local) or a cloud Postgres (Neon/Supabase/etc.)

> macOS (Homebrew):
>
> ```bash
> brew install node
> brew install postgresql@16
> brew services start postgresql@16
> echo 'export PATH="/opt/homebrew/opt/postgresql@16/bin:$PATH"' >> ~/.zshrc && exec zsh
> ```

---

## 1) Database Setup (PostgreSQL)

### Option A — Local Postgres (recommended for dev)

Create a DB user and database:

```bash
# open psql
psql -d postgres

-- inside psql:
CREATE ROLE parkease WITH LOGIN PASSWORD 'change_me_strong';
ALTER ROLE parkease CREATEDB;
\q

# back in shell, create database:
createdb -U parkease -h localhost -p 5432 parkease
```

**Server `.env`**
Create `ParkEaseWeb/server/.env` with your connection string:

```env
DATABASE_URL="postgresql://parkease:change_me_strong@localhost:5432/parkease?schema=public"
```

> If your password contains special characters, URL-encode them (e.g., `@` → `%40`, `%` → `%25`).

### Option B — Cloud Postgres (Neon/Supabase/etc.)

Paste the provider’s URL into `server/.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DBNAME?sslmode=require"
```

---

## 2) Backend Setup (Express + Prisma)

From the repo root:

```bash
cd server
npm i
```

Run database migrations and generate the Prisma client:

```bash
# Apply migrations (creates/updates DB schema)
npx prisma migrate dev --schema=prisma/schema.prisma

# Ensure Prisma Client is generated (needed for code to compile)
npx prisma generate --schema=prisma/schema.prisma
```

Start the backend:

```bash
npm run server
```

---

## 4) Quick Start (TL;DR)

```bash
# Backend
cd server
npm i
npx prisma migrate dev --schema=prisma/schema.prisma
npx prisma generate --schema=prisma/schema.prisma
npm run server

# Frontend (new terminal)
cd client
npm i
npm run dev
```

---

## 5) Common Tasks

* Re-run Prisma after schema changes:

  ```bash
  cd server
  npx prisma migrate dev --schema=prisma/schema.prisma
  ```
* Regenerate Prisma client:

  ```bash
  npx prisma generate --schema=prisma/schema.prisma
  ```
* Connect to DB quickly:

  ```bash
  psql "postgresql://parkease:change_me_strong@localhost:5432/parkease"
  ```

---

## 6) Troubleshooting

* **Prisma can’t find schema**: run commands from `server/` or pass `--schema=prisma/schema.prisma`.
* **`P1012` missing `DATABASE_URL`**: ensure `server/.env` exists and matches your DB.
* **`P1013` invalid URL/port**: replace placeholders with real values; ensure port is numeric (e.g., `5432`).
* **Password with special chars**: URL-encode in `DATABASE_URL`.
* **macOS service down**: `brew services start postgresql@16` (or `restart`).

---



App should be running at [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

| Variable          | Description                               |
| ----------------- | ----------------------------------------- |
| `DATABASE_URL`    | Connection string for PostgreSQL database |
| `NEXTAUTH_SECRET` | (Optional) Auth secret if expanded later  |
| `VERCEL_URL`      | Deployment URL (set by Vercel)            |

---

## 🌱 Seeding Data (Optional)

Add initial team members, milestones, and press items by creating a `prisma/seed.ts` script:

```bash
npx prisma db seed
```

---

## 📦 Deployment

1. Push code to GitHub.
2. Connect repo to **Vercel**.
3. Set environment variables in Vercel dashboard.
4. Vercel auto-deploys on new commits.

---

## 🧑‍💻 Development Notes

* Use **Prisma Studio** to inspect data:

  ```bash
  npx prisma studio
  ```
* Follow **8pt spacing grid** + **Tailwind utility classes** for consistency.
* Keep pages simple, minimal, and mobile-first.

---

## 📈 Future Roadmap

* Expand to booking system (real-time parking availability).
* Integrate payments for reservations.
* IoT sensor integration.
* Multi-language (English + Bangla).
* Role-based admin dashboard.

---

## 👨‍👩‍👦 Team

Built by **ParkEase founding team** – passionate about solving Bangladesh’s urban mobility challenges.

---

## 📜 License

MIT © 2025 ParkEase
