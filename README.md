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
parkease/
│── prisma/
│   ├── schema.prisma      # Prisma schema definition
│   └── migrations/        # Auto-generated migrations
│── src/
│   ├── pages/             # Next.js pages
│   ├── components/        # Reusable UI components
│   ├── lib/               # Prisma client, utils
│   └── api/               # API routes (waitlist, contact, etc.)
│── public/                # Static assets (logos, images)
│── .env                   # Environment variables
│── README.md              # Project docs
│── package.json
```

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

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/parkease.git
cd parkease
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Create a `.env` file:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

### 4. Run Database Migration

```bash
npx prisma migrate dev --name init_landing
```

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Start Dev Server

```bash
npm run dev
```

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
