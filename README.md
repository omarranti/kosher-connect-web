# KOSHER *Connect*

> **Your Jewish Community Hub** — Marketing site & Admin portal

Marketing website and admin dashboard for the Kosher Connect mobile app. Built with Next.js 14 (App Router), Tailwind CSS, Prisma, and the Heritage Luxe brand system.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + Brand design tokens |
| Database | PostgreSQL + Prisma ORM |
| Auth | NextAuth.js (Google OAuth) |
| UI Components | Radix UI + custom brand components |
| Charts | Recharts |
| Forms | React Hook Form + Zod |
| File Uploads | UploadThing |
| Deployment | Vercel |

## Project Structure

```
kosher-connect-web/
├── prisma/                    # Database schema & migrations
│   └── schema.prisma          # Listing, Event, User, Category models
├── public/
│   ├── images/brand/          # Logo SVGs, OG image, favicons
│   └── images/marketing/      # Hero images, screenshots
├── src/
│   ├── app/
│   │   ├── (marketing)/       # Public marketing pages
│   │   │   ├── page.tsx       # Homepage (hero, features, pricing, CTA)
│   │   │   ├── about/
│   │   │   ├── pricing/
│   │   │   ├── features/
│   │   │   ├── contact/
│   │   │   ├── blog/
│   │   │   ├── download/
│   │   │   ├── privacy/
│   │   │   └── terms/
│   │   ├── admin/             # Protected admin dashboard
│   │   │   ├── dashboard/     # KPIs, charts, recent activity
│   │   │   ├── listings/      # CRUD for restaurants, vendors, markets
│   │   │   ├── users/         # Subscriber management
│   │   │   ├── events/        # Event creation & management
│   │   │   ├── analytics/     # Growth, revenue, engagement charts
│   │   │   └── settings/      # App configuration
│   │   └── api/               # API routes
│   │       ├── auth/
│   │       ├── listings/
│   │       ├── users/
│   │       ├── events/
│   │       ├── analytics/
│   │       └── upload/
│   ├── components/
│   │   ├── marketing/         # Nav, footer, hero, features, etc.
│   │   ├── admin/             # Sidebar, header, data tables
│   │   ├── ui/                # Shared primitives (Button, Dialog, etc.)
│   │   └── shared/            # Logo, icons, brand elements
│   ├── lib/                   # Utilities, Prisma client, auth config
│   ├── hooks/                 # Custom React hooks
│   ├── styles/
│   │   └── globals.css        # Tailwind + brand tokens + component classes
│   ├── types/                 # TypeScript types & pricing config
│   └── config/                # Site metadata & constants
└── tailwind.config.ts         # Brand colors, fonts, spacing, animations
```

## Getting Started

```bash
# 1. Clone and install
git clone https://github.com/YOUR_ORG/kosher-connect-web.git
cd kosher-connect-web
npm install

# 2. Set up environment
cp .env.example .env.local
# Fill in DATABASE_URL, NEXTAUTH_SECRET, Google OAuth creds

# 3. Set up database
npx prisma db push
npx prisma generate

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the marketing site.
Open [http://localhost:3000/admin](http://localhost:3000/admin) for the admin dashboard.

## Brand System

The Heritage Luxe brand kit is baked into `tailwind.config.ts` as design tokens:

- **Fonts**: `font-display` (Bodoni Moda), `font-accent` (Crimson Pro), `font-ui` (Josefin Sans)
- **Colors**: `brand-navy`, `brand-gold`, `brand-burgundy`, `brand-cream`, etc.
- **Components**: `btn-burgundy`, `btn-navy`, `btn-gold`, `card-brand`, `tag-brand`
- **Animations**: `animate-float`, `animate-pulse-spring`, `animate-breathe`

See `src/styles/globals.css` for the full component class library.

## Admin Features

| Module | Capabilities |
|---|---|
| **Dashboard** | KPI cards, recent activity, growth charts |
| **Listings** | Full CRUD, type filters, kosher certification tracking, status management |
| **Users** | Subscriber list, plan management, trial tracking |
| **Events** | Create/edit events, attendee counts, recurring events (RRULE) |
| **Analytics** | User growth, revenue breakdown, top listings, conversion rates |
| **Settings** | App configuration, notification preferences |

## Database

The Prisma schema covers the full data model from the [Scraping Blueprint](/docs):

- **Listings**: Restaurants, caterers, markets, vendors — with kosher certification details (cholov yisroel, pas yisroel, yoshon, bishul yisroel)
- **Events**: Community gatherings with recurrence support (iCal RRULE)
- **Users**: With subscription plans (Free, Monthly $6.99, Yearly $59.99, Family $89.99)
- **Categories**: Flexible tagging (Shabbat, Wedding, Simcha, Bar Mitzvah, etc.)

## Deployment

```bash
# Deploy to Vercel
npx vercel

# Or connect GitHub repo to Vercel for auto-deploy
```

Set environment variables in Vercel dashboard. Database can be Neon, Supabase, or Railway PostgreSQL.

## Related Repos

- **kosher-connect-app** — Mobile app (separate repo)
- **kosher-connect-web** — This repo (marketing + admin)

---

Built with 🕎 for the Jewish community.
