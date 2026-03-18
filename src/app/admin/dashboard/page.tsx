export default function DashboardPage() {
  // TODO: Replace with real data from API
  const stats = [
    { label: "Total Listings", value: "2,847", change: "+12%", up: true },
    { label: "Active Users", value: "18,392", change: "+8%", up: true },
    { label: "Events This Week", value: "64", change: "+23%", up: true },
    { label: "Revenue (MTD)", value: "$42,180", change: "+5%", up: true },
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
            <p
              className={`mt-1 font-ui text-xs font-medium ${
                stat.up ? "text-semantic-green" : "text-semantic-red"
              }`}
            >
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Placeholder sections */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-brand border border-gray-100 bg-white p-6">
          <h3 className="font-display text-lg font-semibold text-brand-navy">
            Recent Listings
          </h3>
          <p className="mt-2 font-accent text-sm italic text-gray-400">
            Chart and table will render here with real data.
          </p>
        </div>
        <div className="rounded-brand border border-gray-100 bg-white p-6">
          <h3 className="font-display text-lg font-semibold text-brand-navy">
            User Growth
          </h3>
          <p className="mt-2 font-accent text-sm italic text-gray-400">
            Recharts line chart will render here.
          </p>
        </div>
      </div>
    </div>
  );
}
