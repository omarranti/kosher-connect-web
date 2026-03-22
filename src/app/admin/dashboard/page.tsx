import Link from "next/link";
import type { EventStatus, ListingStatus, ListingType } from "@prisma/client";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

type RecentListing = {
  id: string;
  name: string;
  type: ListingType;
  city: string;
  status: ListingStatus;
  createdAt: Date;
};
type RecentEvent = {
  id: string;
  title: string;
  city: string;
  startDate: Date;
  status: EventStatus;
};

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: "bg-emerald-50 text-emerald-600 border-emerald-200",
  PENDING: "bg-amber-50 text-amber-600 border-amber-200",
  DRAFT: "bg-gray-50 text-gray-500 border-gray-200",
  PAUSED: "bg-blue-50 text-blue-500 border-blue-200",
  CLOSED: "bg-red-50 text-red-500 border-red-200",
  PUBLISHED: "bg-emerald-50 text-emerald-600 border-emerald-200",
  CANCELLED: "bg-red-50 text-red-500 border-red-200",
  PAST: "bg-gray-50 text-gray-400 border-gray-200",
};

const TYPE_EMOJI: Record<string, string> = {
  RESTAURANT: "🍽",
  CAFE: "☕",
  BAKERY: "🥯",
  BUTCHER: "🥩",
  GROCERY: "🛒",
  CATERER: "🍱",
  FOOD_TRUCK: "🚚",
  WHOLESALE: "📦",
  VENUE: "🏛",
  PHOTOGRAPHER: "📸",
  DJ: "🎵",
  DECORATOR: "🎨",
  PLANNER: "📋",
  WORKSHOP: "🎓",
  OTHER: "📌",
};

export default async function DashboardPage() {
  let listingCount = 0;
  let activeCount = 0;
  let pendingCount = 0;
  let userCount = 0;
  let eventCount = 0;
  let categoryCount = 0;
  let recentListings: RecentListing[] = [];
  let recentEvents: RecentEvent[] = [];
  let typeCounts: { type: string; _count: { id: number } }[] = [];
  let cityCounts: { city: string; _count: { id: number } }[] = [];
  let statusCounts: { status: string; _count: { id: number } }[] = [];
  let dbError: string | null = null;

  try {
    const [lc, ac, pc, uc, ec, cc, rl, re, tc, cic, sc] = await Promise.all([
      prisma.listing.count(),
      prisma.listing.count({ where: { status: "ACTIVE" } }),
      prisma.listing.count({ where: { status: "PENDING" } }),
      prisma.user.count(),
      prisma.event.count(),
      prisma.category.count(),
      prisma.listing.findMany({
        orderBy: { createdAt: "desc" },
        take: 8,
        select: { id: true, name: true, type: true, city: true, status: true, createdAt: true },
      }),
      prisma.event.findMany({
        orderBy: { startDate: "asc" },
        where: { startDate: { gte: new Date() } },
        take: 5,
        select: { id: true, title: true, city: true, startDate: true, status: true },
      }),
      prisma.listing.groupBy({
        by: ["type"],
        _count: { id: true },
        orderBy: { _count: { id: "desc" } },
        take: 8,
      }),
      prisma.listing.groupBy({
        by: ["city"],
        _count: { id: true },
        orderBy: { _count: { id: "desc" } },
        take: 6,
      }),
      prisma.listing.groupBy({
        by: ["status"],
        _count: { id: true },
        orderBy: { _count: { id: "desc" } },
      }),
    ]);
    listingCount = lc;
    activeCount = ac;
    pendingCount = pc;
    userCount = uc;
    eventCount = ec;
    categoryCount = cc;
    recentListings = rl;
    recentEvents = re;
    typeCounts = tc;
    cityCounts = cic;
    statusCounts = sc;
  } catch (e) {
    console.error("[admin/dashboard]", e);
    dbError =
      e instanceof Error
        ? e.message
        : "Could not connect to the database. Check DATABASE_URL on Vercel.";
  }

  const stats = [
    { label: "Total Listings", value: listingCount, icon: "📍", color: "from-brand-navy to-brand-navy/80", text: "text-white" },
    { label: "Active", value: activeCount, icon: "✅", color: "from-emerald-500 to-emerald-600", text: "text-white" },
    { label: "Pending Review", value: pendingCount, icon: "⏳", color: "from-amber-400 to-amber-500", text: "text-white" },
    { label: "Users", value: userCount, icon: "👥", color: "from-brand-burgundy to-brand-burgundy/80", text: "text-white" },
    { label: "Events", value: eventCount, icon: "📅", color: "from-brand-gold to-brand-gold-light", text: "text-brand-navy" },
    { label: "Categories", value: categoryCount, icon: "🏷", color: "from-violet-500 to-violet-600", text: "text-white" },
  ];

  const maxTypeCount = typeCounts.length > 0 ? typeCounts[0]._count.id : 1;
  const maxCityCount = cityCounts.length > 0 ? cityCounts[0]._count.id : 1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-navy">Dashboard</h1>
          <p className="font-accent text-sm italic text-gray-500">
            Welcome back. Here&apos;s what&apos;s happening with Kosher Connect.
          </p>
        </div>
        <Link href="/admin/listings/new" className="btn-burgundy hidden text-xs sm:inline-flex">
          + Add Listing
        </Link>
      </div>

      {dbError ? (
        <div className="rounded-brand border border-semantic-red/30 bg-red-50 p-6 text-brand-navy" role="alert">
          <p className="font-display text-lg font-semibold text-semantic-red">Database unavailable</p>
          <p className="mt-2 font-ui text-sm text-gray-700 break-words">{dbError}</p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 font-ui text-sm text-gray-700">
            <li>
              Vercel → Project → <strong>Settings → Environment Variables</strong> → add{" "}
              <code className="rounded bg-white px-1 text-xs">DATABASE_URL</code> (Postgres URL from{" "}
              <a href="https://neon.tech" className="text-brand-navy underline" target="_blank" rel="noopener noreferrer">Neon</a>{" "}
              or Supabase). <strong>Redeploy</strong> after saving.
            </li>
            <li>
              On your computer, create tables:{" "}
              <code className="block mt-1 rounded bg-white p-2 text-xs">DATABASE_URL=&quot;…same url…&quot; npx prisma db push</code>
            </li>
            <li>
              Optional seed data: <code className="rounded bg-white px-1 text-xs">npx prisma db seed</code>
            </li>
          </ol>
        </div>
      ) : null}

      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`relative overflow-hidden rounded-brand bg-gradient-to-br ${stat.color} p-4 shadow-sm`}
          >
            <span className="absolute -right-2 -top-2 text-3xl opacity-15">{stat.icon}</span>
            <p className={`font-display text-2xl font-bold ${stat.text}`}>
              {stat.value.toLocaleString()}
            </p>
            <p className={`mt-0.5 font-ui text-[11px] ${stat.text} opacity-70`}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Breakdowns Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* By Type */}
        <div className="rounded-brand border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-navy/40">
            By Type
          </h3>
          <div className="space-y-2.5">
            {typeCounts.map((t) => {
              const pct = Math.round((t._count.id / maxTypeCount) * 100);
              const label = t.type.charAt(0) + t.type.slice(1).toLowerCase().replace(/_/g, " ");
              return (
                <Link
                  key={t.type}
                  href={`/admin/listings?type=${t.type}`}
                  className="group flex items-center gap-3 transition-opacity hover:opacity-80"
                >
                  <span className="w-5 text-center text-sm">{TYPE_EMOJI[t.type] || "📌"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-ui text-xs font-medium text-brand-navy truncate">{label}</span>
                      <span className="font-ui text-xs text-gray-400 ml-2">{t._count.id}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* By City */}
        <div className="rounded-brand border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-navy/40">
            By City
          </h3>
          <div className="space-y-2.5">
            {cityCounts.map((c) => {
              const pct = Math.round((c._count.id / maxCityCount) * 100);
              return (
                <Link
                  key={c.city}
                  href={`/admin/listings?city=${encodeURIComponent(c.city)}`}
                  className="group flex items-center gap-3 transition-opacity hover:opacity-80"
                >
                  <span className="w-5 text-center text-sm">📍</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-ui text-xs font-medium text-brand-navy truncate">{c.city}</span>
                      <span className="font-ui text-xs text-gray-400 ml-2">{c._count.id}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-burgundy/70 to-brand-burgundy transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* By Status */}
        <div className="rounded-brand border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-navy/40">
            By Status
          </h3>
          <div className="space-y-3">
            {statusCounts.map((s) => {
              const pct = listingCount > 0 ? Math.round((s._count.id / listingCount) * 100) : 0;
              return (
                <Link
                  key={s.status}
                  href={`/admin/listings?status=${s.status}`}
                  className="flex items-center justify-between rounded-brand-sm border border-gray-50 p-3 transition-colors hover:bg-gray-50/50"
                >
                  <div className="flex items-center gap-3">
                    <span className={`rounded-pill border px-2.5 py-0.5 font-ui text-[11px] font-medium ${STATUS_COLORS[s.status] || "bg-gray-50 text-gray-500 border-gray-200"}`}>
                      {s.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-lg font-bold text-brand-navy">{s._count.id}</span>
                    <span className="font-ui text-[11px] text-gray-400 w-10 text-right">{pct}%</span>
                  </div>
                </Link>
              );
            })}
          </div>
          {listingCount > 0 && (
            <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-gray-100">
              {statusCounts.map((s) => {
                const pct = (s._count.id / listingCount) * 100;
                const colors: Record<string, string> = {
                  ACTIVE: "bg-emerald-500",
                  PENDING: "bg-amber-400",
                  DRAFT: "bg-gray-300",
                  PAUSED: "bg-blue-400",
                  CLOSED: "bg-red-400",
                };
                return (
                  <div
                    key={s.status}
                    className={`${colors[s.status] || "bg-gray-300"} transition-all`}
                    style={{ width: `${pct}%` }}
                    title={`${s.status}: ${s._count.id}`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity Row */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Recent Listings */}
        <div className="rounded-brand border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-brand-navy">Recent Listings</h3>
            <Link
              href="/admin/listings"
              className="shrink-0 font-ui text-xs font-medium text-brand-gold hover:text-brand-navy transition-colors"
            >
              View all →
            </Link>
          </div>
          {!dbError && recentListings.length === 0 ? (
            <p className="font-accent text-sm italic text-gray-400">No listings yet.</p>
          ) : dbError ? null : (
            <div className="space-y-2">
              {recentListings.map((listing) => (
                <Link
                  key={listing.id}
                  href={`/admin/listings/${listing.id}`}
                  className="flex items-center gap-3 rounded-brand-sm border border-gray-50 p-3 transition-colors hover:bg-gray-50/50"
                >
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-brand-sm bg-brand-gold-pale text-sm">
                    {TYPE_EMOJI[listing.type] || "📌"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-semibold text-brand-navy truncate">{listing.name}</p>
                    <p className="font-ui text-[11px] text-gray-400">
                      {listing.type.charAt(0) + listing.type.slice(1).toLowerCase().replace(/_/g, " ")} · {listing.city}
                    </p>
                  </div>
                  <span className={`shrink-0 rounded-pill border px-2 py-0.5 font-ui text-[10px] font-medium ${STATUS_COLORS[listing.status]}`}>
                    {listing.status}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Upcoming Events */}
        <div className="rounded-brand border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-brand-navy">Upcoming Events</h3>
            <Link
              href="/admin/events"
              className="shrink-0 font-ui text-xs font-medium text-brand-gold hover:text-brand-navy transition-colors"
            >
              View all →
            </Link>
          </div>
          {!dbError && recentEvents.length === 0 ? (
            <p className="font-accent text-sm italic text-gray-400">No upcoming events.</p>
          ) : dbError ? null : (
            <div className="space-y-2">
              {recentEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/admin/events/${event.id}`}
                  className="flex items-center gap-3 rounded-brand-sm border border-gray-50 p-3 transition-colors hover:bg-gray-50/50"
                >
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-brand-sm bg-brand-burgundy/10 font-ui text-[10px] font-bold text-brand-burgundy">
                    {event.startDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase()}
                    <br />
                    {event.startDate.getDate()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-semibold text-brand-navy truncate">{event.title}</p>
                    <p className="font-ui text-[11px] text-gray-400">
                      {event.startDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} · {event.city}
                    </p>
                  </div>
                  <span className={`shrink-0 rounded-pill border px-2 py-0.5 font-ui text-[10px] font-medium ${STATUS_COLORS[event.status]}`}>
                    {event.status}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
