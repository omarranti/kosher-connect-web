import { siteConfig } from "@/config/site";
import { prisma } from "@/lib/db";

export default async function SettingsPage() {
  const [listingsCount, eventsCount, usersCount, categoriesCount] = await Promise.all([
    prisma.listing.count(),
    prisma.event.count(),
    prisma.user.count(),
    prisma.category.count(),
  ]);

  const citiesInDb = await prisma.listing.findMany({
    select: { city: true, state: true },
    distinct: ["city", "state"],
    orderBy: [{ state: "asc" }, { city: "asc" }],
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-navy">Settings</h1>
        <p className="font-accent text-sm italic text-gray-500">
          Configure app behavior, notifications, and integrations.
        </p>
      </div>

      {/* General — real data from site config and DB */}
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy">General</h3>
        <p className="mt-1 font-accent text-sm italic text-gray-400">
          App name, description, cities served
        </p>
        <dl className="mt-4 space-y-3 font-ui text-sm">
          <div>
            <dt className="text-gray-500">App name</dt>
            <dd className="font-medium text-brand-navy">{siteConfig.name}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Tagline</dt>
            <dd className="font-medium text-brand-navy">{siteConfig.tagline}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Description</dt>
            <dd className="text-gray-700">{siteConfig.description}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Site URL</dt>
            <dd className="font-medium text-brand-navy">{siteConfig.url}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Support email</dt>
            <dd className="font-medium text-brand-navy">{siteConfig.supportEmail}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Cities (config)</dt>
            <dd className="text-gray-700">{siteConfig.cities.join(", ")}</dd>
          </div>
        </dl>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="font-ui text-xs uppercase tracking-wider text-gray-400 mb-2">
            Database summary (from seed)
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
            <li><strong className="text-brand-navy">{listingsCount}</strong> listings</li>
            <li><strong className="text-brand-navy">{eventsCount}</strong> events</li>
            <li><strong className="text-brand-navy">{usersCount}</strong> users</li>
            <li><strong className="text-brand-navy">{categoriesCount}</strong> categories</li>
          </ul>
          <p className="mt-2 font-ui text-xs text-gray-500">
            Cities with listings: {citiesInDb.map(({ city, state }) => `${city}, ${state}`).join(" · ")}
          </p>
        </div>
        <button className="mt-4 btn-outline text-xs px-4 py-2">Configure</button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[
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
