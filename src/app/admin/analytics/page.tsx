export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Analytics</h1>
        <p className="font-accent text-sm italic text-gray-500">
          Track growth, engagement, and revenue across the platform.
        </p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Monthly Active Users", value: "12,847", change: "+15%" },
          { label: "Listings Viewed", value: "89,241", change: "+22%" },
          { label: "Events Created", value: "342", change: "+18%" },
          { label: "Conversion Rate", value: "4.2%", change: "+0.8%" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-brand border border-gray-100 bg-white p-5">
            <p className="font-ui text-xs uppercase tracking-wider text-gray-400">{kpi.label}</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-navy">{kpi.value}</p>
            <p className="mt-1 font-ui text-xs font-medium text-semantic-green">{kpi.change}</p>
          </div>
        ))}
      </div>

      {/* Chart placeholders */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-brand border border-gray-100 bg-white p-6">
          <h3 className="font-display text-lg font-semibold text-brand-navy mb-2">User Growth</h3>
          <p className="font-accent text-sm italic text-gray-400">Recharts area chart — daily/weekly/monthly toggle</p>
          <div className="mt-4 h-64 rounded-xl bg-gray-50 flex items-center justify-center">
            <span className="font-ui text-xs text-gray-300 uppercase tracking-wider">Chart Placeholder</span>
          </div>
        </div>
        <div className="rounded-brand border border-gray-100 bg-white p-6">
          <h3 className="font-display text-lg font-semibold text-brand-navy mb-2">Revenue Breakdown</h3>
          <p className="font-accent text-sm italic text-gray-400">Monthly vs Yearly vs Family plan distribution</p>
          <div className="mt-4 h-64 rounded-xl bg-gray-50 flex items-center justify-center">
            <span className="font-ui text-xs text-gray-300 uppercase tracking-wider">Chart Placeholder</span>
          </div>
        </div>
      </div>

      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-2">Top Listings by Views</h3>
        <p className="font-accent text-sm italic text-gray-400">Horizontal bar chart — top 10 most viewed this month</p>
        <div className="mt-4 h-48 rounded-xl bg-gray-50 flex items-center justify-center">
          <span className="font-ui text-xs text-gray-300 uppercase tracking-wider">Chart Placeholder</span>
        </div>
      </div>
    </div>
  );
}
