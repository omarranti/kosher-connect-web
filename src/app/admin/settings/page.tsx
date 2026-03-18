export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Settings</h1>
        <p className="font-accent text-sm italic text-gray-500">
          Configure app behavior, notifications, and integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
          { title: "General", desc: "App name, description, cities served" },
          { title: "Notifications", desc: "Email alerts, push notification rules" },
          { title: "Integrations", desc: "API keys, webhook endpoints, scraping schedules" },
          { title: "Team", desc: "Admin users, roles, and permissions" },
        ].map((card) => (
          <div key={card.title} className="rounded-brand border border-gray-100 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-brand-navy">{card.title}</h3>
            <p className="mt-1 font-accent text-sm italic text-gray-400">{card.desc}</p>
            <button className="mt-4 btn-outline text-xs px-4 py-2">Configure</button>
          </div>
        ))}
      </div>
    </div>
  );
}
