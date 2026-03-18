import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [listingCount, userCount, eventCount, recentListings, recentEvents] =
    await Promise.all([
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

  const categoryCount = await prisma.category.count();

  const stats = [
    { label: "Total Listings", value: listingCount.toLocaleString() },
    { label: "Users", value: userCount.toLocaleString() },
    { label: "Events", value: eventCount.toLocaleString() },
    { label: "Categories", value: categoryCount.toLocaleString() },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">
          Dashboard
        </h1>
        <p className="font-accent text-sm italic text-gray-500">
          Welcome back. Here&apos;s what&apos;s happening with Kosher Connect.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-brand border border-gray-100 bg-white p-5"
          >
            <p className="font-ui text-xs uppercase tracking-wider text-gray-400">
              {stat.label}
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-navy">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent data */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Recent Listings */}
        <div className="rounded-brand border border-gray-100 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-brand-navy">
              Recent Listings
            </h3>
            <Link href="/admin/listings" className="font-ui text-xs font-medium text-brand-gold hover:text-brand-navy transition-colors">
              View all →
            </Link>
          </div>
          {recentListings.length === 0 ? (
            <p className="font-accent text-sm italic text-gray-400">No listings yet. Run the seed to populate data.</p>
          ) : (
            <div className="space-y-3">
              {recentListings.map((listing) => (
                <Link
                  key={listing.id}
                  href={`/admin/listings/${listing.id}`}
                  className="flex items-center justify-between rounded-brand-sm border border-gray-50 p-3 transition-colors hover:bg-gray-50/50"
                >
                  <div>
                    <p className="font-display text-sm font-semibold text-brand-navy">{listing.name}</p>
                    <p className="font-ui text-xs text-gray-400">{listing.type} · {listing.city}</p>
                  </div>
                  <span className={`rounded-pill px-2 py-0.5 font-ui text-[10px] font-medium ${
                    listing.status === "ACTIVE" ? "bg-semantic-green-soft text-semantic-green" : "bg-orange-50 text-orange-500"
                  }`}>
                    {listing.status}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Upcoming Events */}
        <div className="rounded-brand border border-gray-100 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-brand-navy">
              Upcoming Events
            </h3>
            <Link href="/admin/events" className="font-ui text-xs font-medium text-brand-gold hover:text-brand-navy transition-colors">
              View all →
            </Link>
          </div>
          {recentEvents.length === 0 ? (
            <p className="font-accent text-sm italic text-gray-400">No upcoming events. Run the seed to populate data.</p>
          ) : (
            <div className="space-y-3">
              {recentEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/admin/events/${event.id}`}
                  className="flex items-center justify-between rounded-brand-sm border border-gray-50 p-3 transition-colors hover:bg-gray-50/50"
                >
                  <div>
                    <p className="font-display text-sm font-semibold text-brand-navy">{event.title}</p>
                    <p className="font-ui text-xs text-gray-400">
                      {event.startDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {event.city}
                    </p>
                  </div>
                  <span className={`rounded-pill px-2 py-0.5 font-ui text-[10px] font-medium ${
                    event.status === "PUBLISHED" ? "bg-semantic-green-soft text-semantic-green" : "bg-brand-gold-pale text-brand-navy"
                  }`}>
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
