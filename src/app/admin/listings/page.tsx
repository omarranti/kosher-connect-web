import Link from "next/link";

export default function ListingsPage() {
  // TODO: Replace with real data from Prisma
  const listings = [
    { id: "1", name: "Dinner Rachel's", type: "Restaurant", city: "Los Angeles", status: "Active", rating: 5.0 },
    { id: "2", name: "Kosh Catering", type: "Caterer", city: "Los Angeles", status: "Active", rating: 5.0 },
    { id: "3", name: "Challah Baking Workshop", type: "Workshop", city: "Los Angeles", status: "Pending", rating: null },
    { id: "4", name: "Shabbat Unique", type: "Restaurant", city: "New York", status: "Active", rating: 4.8 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-navy">Listings</h1>
          <p className="font-accent text-sm italic text-gray-500">
            Manage kosher restaurants, vendors, workshops, and markets.
          </p>
        </div>
        <Link href="/admin/listings/new" className="btn-burgundy text-xs">
          + Add Listing
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {["All", "Restaurant", "Caterer", "Market", "Workshop", "Vendor"].map((filter) => (
          <button
            key={filter}
            className="rounded-pill border border-gray-200 bg-white px-4 py-1.5 font-ui text-xs text-gray-600 transition-colors hover:border-brand-gold hover:text-brand-navy"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-brand border border-gray-100 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Name</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Type</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">City</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Status</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Rating</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {listings.map((listing) => (
              <tr key={listing.id} className="transition-colors hover:bg-gray-50/50">
                <td className="px-5 py-4 font-display text-sm font-semibold text-brand-navy">{listing.name}</td>
                <td className="px-5 py-4">
                  <span className="tag-brand bg-brand-gold-pale text-brand-navy">{listing.type}</span>
                </td>
                <td className="px-5 py-4 font-ui text-sm text-gray-500">{listing.city}</td>
                <td className="px-5 py-4">
                  <span className={`tag-brand ${listing.status === "Active" ? "bg-semantic-green-soft text-semantic-green" : "bg-orange-50 text-orange-500"}`}>
                    {listing.status}
                  </span>
                </td>
                <td className="px-5 py-4 font-ui text-sm text-gray-600">
                  {listing.rating ? `★ ${listing.rating}` : "—"}
                </td>
                <td className="px-5 py-4 text-right">
                  <Link href={`/admin/listings/${listing.id}`} className="font-ui text-xs font-medium text-brand-gold hover:text-brand-navy transition-colors">
                    Edit →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
