import { prisma } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [totalListings, activeListings, totalUsers, totalEvents, recentListings, cityBreakdown] =
    await Promise.all([
      prisma.listing.count(),
      prisma.listing.count({ where: { status: "ACTIVE" } }),
      prisma.user.count(),
      prisma.event.count(),
      prisma.listing.findMany({
        orderBy: { createdAt: "desc" },
        take: 8,
        select: { id: true, name: true, type: true, city: true, state: true, status: true, kosherCertifier: true, createdAt: true },
      }),
      prisma.listing.groupBy({
        by: ["city", "state"],
        _count: { id: true },
        orderBy: { _count: { id: "desc" } },
        take: 8,
      }),
    ]);

  const stats = [
    { label: "Total Listings", value: totalListings.toLocaleString() },
    { label: "Active Listings", value: activeListings.toLocaleString() },
    { label: "Total Users", value: totalUsers.toLocaleString() },
    { label: "Events", value: totalEvents.toLocaleString() },
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

      {/* Content sections */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Recent Listings */}
        <div className="rounded-brand border border-gray-100 bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-lg font-semibold text-brand-navy">
              Recent Listings
            </h3>
            <Link href="/admin/listings" className="font-ui text-xs font-medium text-brand-gold hover:text-brand-navy transition-colors">
              View all &rarr;
            </Link>
          </div>
          <div className="space-y-3">
            {recentListings.map((listing) => (
              <div key={listing.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div>
                  <p className="font-display text-sm font-semibold text-brand-navy">{listing.name}</p>
                  <p className="font-ui text-xs text-gray-400">{listing.city}, {listing.state} &middot; {listing.type.toLowerCase()}</p>
                </div>
                <span className={`tag-brand text-xs ${listing.status === "ACTIVE" ? "bg-semantic-green-soft text-semantic-green" : "bg-orange-50 text-orange-500"}`}>
                  {listing.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* City Breakdown */}
        <div className="rounded-brand border border-gray-100 bg-white p-6">
          <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">
            Listings by City
          </h3>
          <div className="space-y-3">
            {cityBreakdown.map((row) => (
              <div key={`${row.city}-${row.state}`} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <span className="font-ui text-sm text-gray-700">{row.city}, {row.state}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-gold rounded-full"
                      style={{ width: `${(row._count.id / totalListings) * 100}%` }}
                    />
                  </div>
                  <span className="font-display text-sm font-bold text-brand-navy w-8 text-right">{row._count.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
