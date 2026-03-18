import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);

  const [
    totalUsers,
    recentUsers,
    prevPeriodUsers,
    totalListings,
    activeListings,
    totalEvents,
    upcomingEvents,
    planCounts,
    topListings,
    recentListings,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
    prisma.user.count({ where: { createdAt: { gte: sixtyDaysAgo, lt: thirtyDaysAgo } } }),
    prisma.listing.count(),
    prisma.listing.count({ where: { status: "ACTIVE" } }),
    prisma.event.count(),
    prisma.event.count({ where: { startDate: { gte: now } } }),
    prisma.user.groupBy({ by: ["plan"], _count: { id: true } }),
    prisma.listing.findMany({
      where: { status: "ACTIVE" },
      orderBy: { rating: "desc" },
      take: 10,
      select: { name: true, city: true, rating: true, reviewCount: true, type: true },
    }),
    prisma.listing.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
  ]);

  const userGrowth = prevPeriodUsers > 0
    ? `+${Math.round(((recentUsers - prevPeriodUsers) / prevPeriodUsers) * 100)}%`
    : recentUsers > 0 ? "+100%" : "0%";

  const kpis = [
    { label: "Total Users", value: totalUsers.toLocaleString(), change: `${recentUsers} new this month` },
    { label: "Active Listings", value: activeListings.toLocaleString(), change: `${totalListings} total` },
    { label: "Upcoming Events", value: upcomingEvents.toLocaleString(), change: `${totalEvents} total` },
    { label: "User Growth", value: userGrowth, change: `${recentUsers} vs ${prevPeriodUsers} prev` },
  ];

  const planData = [
    { plan: "Free", count: 0 },
    { plan: "Monthly", count: 0 },
    { plan: "Yearly", count: 0 },
    { plan: "Family", count: 0 },
  ];
  for (const pc of planCounts) {
    const idx = planData.findIndex((p) => p.plan.toUpperCase() === pc.plan);
    if (idx !== -1) planData[idx].count = pc._count.id;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Analytics</h1>
        <p className="font-accent text-sm italic text-gray-500">
          Live data from your database. Last 30 days compared to previous 30.
        </p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-brand border border-gray-100 bg-white p-5">
            <p className="font-ui text-xs uppercase tracking-wider text-gray-400">{kpi.label}</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-navy">{kpi.value}</p>
            <p className="mt-1 font-ui text-xs text-gray-400">{kpi.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Plan Distribution */}
        <div className="rounded-brand border border-gray-100 bg-white p-6">
          <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Subscription Plans</h3>
          <div className="space-y-3">
            {planData.map((p) => {
              const pct = totalUsers > 0 ? Math.round((p.count / totalUsers) * 100) : 0;
              return (
                <div key={p.plan}>
                  <div className="flex items-center justify-between font-ui text-sm">
                    <span className="text-gray-700">{p.plan}</span>
                    <span className="text-gray-400">{p.count} users ({pct}%)</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-brand-gold"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activity This Month */}
        <div className="rounded-brand border border-gray-100 bg-white p-6">
          <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Activity This Month</h3>
          <dl className="space-y-4 font-ui text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">New Users</dt>
              <dd className="font-display text-lg font-bold text-brand-navy">{recentUsers}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">New Listings</dt>
              <dd className="font-display text-lg font-bold text-brand-navy">{recentListings}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Upcoming Events</dt>
              <dd className="font-display text-lg font-bold text-brand-navy">{upcomingEvents}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-500">Active Listings</dt>
              <dd className="font-display text-lg font-bold text-brand-navy">{activeListings}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Top Listings */}
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Top Rated Listings</h3>
        {topListings.length === 0 ? (
          <p className="font-accent text-sm italic text-gray-400">No active listings with ratings yet.</p>
        ) : (
          <div className="overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="pb-2 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Name</th>
                  <th className="pb-2 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Type</th>
                  <th className="pb-2 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">City</th>
                  <th className="pb-2 text-right font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Rating</th>
                  <th className="pb-2 text-right font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Reviews</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {topListings.map((l, i) => (
                  <tr key={i}>
                    <td className="py-3 font-display text-sm font-semibold text-brand-navy">{l.name}</td>
                    <td className="py-3">
                      <span className="rounded-pill bg-brand-gold-pale px-2.5 py-0.5 font-ui text-[11px] font-medium text-brand-navy">
                        {l.type}
                      </span>
                    </td>
                    <td className="py-3 font-ui text-sm text-gray-500">{l.city}</td>
                    <td className="py-3 text-right font-ui text-sm text-gray-600">
                      {l.rating ? `${l.rating.toFixed(1)}` : "\u2014"}
                    </td>
                    <td className="py-3 text-right font-ui text-sm text-gray-400">{l.reviewCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
