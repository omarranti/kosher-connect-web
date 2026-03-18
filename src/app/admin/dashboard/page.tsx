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

export default async function DashboardPage() {
  let listingCount = 0;
  let userCount = 0;
  let eventCount = 0;
  let categoryCount = 0;
  let recentListings: RecentListing[] = [];
  let recentEvents: RecentEvent[] = [];
  let dbError: string | null = null;

  try {
    const [lc, uc, ec, rl, re] = await Promise.all([
      prisma.listing.count(),
      prisma.user.count(),
      prisma.event.count(),
      prisma.listing.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        select: { id: true, name: true, type: true, city: true, status: true, createdAt: true },
      }),
      prisma.event.findMany({
        orderBy: { startDate: "asc" },
        where: { startDate: { gte: new Date() } },
        take: 5,
        select: { id: true, title: true, city: true, startDate: true, status: true },
      }),
    ]);
    listingCount = lc;
    userCount = uc;
    eventCount = ec;
    recentListings = rl;
    recentEvents = re;
    categoryCount = await prisma.category.count();
  } catch (e) {
    console.error("[admin/dashboard]", e);
    dbError =
      e instanceof Error
        ? e.message
        : "Could not connect to the database. Check DATABASE_URL on Vercel.";
  }

  const stats = [
    { label: "Total Listings", value: listingCount.toLocaleString() },
    { label: "Users", value: userCount.toLocaleString() },
    { label: "Events", value: eventCount.toLocaleString() },
    { label: "Categories", value: categoryCount.toLocaleString() },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Dashboard</h1>
        <p className="font-accent text-sm italic text-gray-500">
          Welcome back. Here&apos;s what&apos;s happening with Kosher Connect.
        </p>
      </div>

      {dbError ? (
        <div
          className="rounded-brand border border-semantic-red/30 bg-red-50 p-6 text-brand-navy"
          role="alert"
        >
          <p className="font-display text-lg font-semibold text-semantic-red">Database unavailable</p>
          <p className="mt-2 font-ui text-sm text-gray-700 break-words">{dbError}</p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 font-ui text-sm text-gray-700">
            <li>
              Vercel → Project → <strong>Settings → Environment Variables</strong> → add{" "}
              <code className="rounded bg-white px-1 text-xs">DATABASE_URL</code> (Postgres URL from{" "}
              <a
                href="https://neon.tech"
                className="text-brand-navy underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neon
              </a>{" "}
              or Supabase). <strong>Redeploy</strong> after saving.
            </li>
            <li>
              On your computer, create tables:{" "}
              <code className="block mt-1 rounded bg-white p-2 text-xs">
                DATABASE_URL=&quot;…same url…&quot; npx prisma db push
              </code>
            </li>
            <li>
              Optional seed data:{" "}
              <code className="rounded bg-white px-1 text-xs">npx prisma db seed</code>
            </li>
          </ol>
          <p className="mt-3 font-ui text-xs text-gray-500">
            Full guide in the repo: <code className="rounded bg-white px-1">docs/DATABASE_VERCEL.md</code>
          </p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-brand border border-gray-100 bg-white p-5 shadow-sm"
          >
            <p className="font-ui text-xs uppercase tracking-wider text-gray-400">{stat.label}</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-navy">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
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
            <p className="font-accent text-sm italic text-gray-400">
              No listings yet. Run the seed to populate data.
            </p>
          ) : dbError ? null : (
            <div className="space-y-3">
              {recentListings.map((listing) => (
                <Link
                  key={listing.id}
                  href={`/admin/listings/${listing.id}`}
                  className="flex flex-col gap-1 rounded-brand-sm border border-gray-50 p-3 transition-colors hover:bg-gray-50/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-brand-navy truncate">
                      {listing.name}
                    </p>
                    <p className="font-ui text-xs text-gray-400">
                      {listing.type} · {listing.city}
                    </p>
                  </div>
                  <span
                    className={`self-start rounded-pill px-2 py-0.5 font-ui text-[10px] font-medium sm:self-center ${
                      listing.status === "ACTIVE"
                        ? "bg-semantic-green-soft text-semantic-green"
                        : "bg-orange-50 text-orange-500"
                    }`}
                  >
                    {listing.status}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

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
            <p className="font-accent text-sm italic text-gray-400">
              No upcoming events. Run the seed to populate data.
            </p>
          ) : dbError ? null : (
            <div className="space-y-3">
              {recentEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/admin/events/${event.id}`}
                  className="flex flex-col gap-1 rounded-brand-sm border border-gray-50 p-3 transition-colors hover:bg-gray-50/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-brand-navy truncate">
                      {event.title}
                    </p>
                    <p className="font-ui text-xs text-gray-400">
                      {event.startDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      · {event.city}
                    </p>
                  </div>
                  <span
                    className={`self-start rounded-pill px-2 py-0.5 font-ui text-[10px] font-medium sm:self-center ${
                      event.status === "PUBLISHED"
                        ? "bg-semantic-green-soft text-semantic-green"
                        : "bg-brand-gold-pale text-brand-navy"
                    }`}
                  >
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
