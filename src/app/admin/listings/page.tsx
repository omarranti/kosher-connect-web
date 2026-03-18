import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const typeFilter = params.type?.toUpperCase();

  const listings = await prisma.listing.findMany({
    where: typeFilter ? { type: typeFilter as any } : undefined,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      type: true,
      city: true,
      state: true,
      status: true,
      rating: true,
      kosherCertifier: true,
      phone: true,
    },
  });

  const typeCounts = await prisma.listing.groupBy({
    by: ["type"],
    _count: { id: true },
    orderBy: { _count: { id: "desc" } },
  });

  const filterTypes = [
    { label: "All", value: "", count: listings.length },
    ...typeCounts.map((t) => ({
      label: t.type.charAt(0) + t.type.slice(1).toLowerCase(),
      value: t.type,
      count: t._count.id,
    })),
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-navy">Listings</h1>
          <p className="font-accent text-sm italic text-gray-500">
            {listings.length} kosher restaurants, vendors, workshops, and markets.
          </p>
        </div>
        <Link href="/admin/listings/new" className="btn-burgundy text-xs">
          + Add Listing
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filterTypes.map((filter) => (
          <Link
            key={filter.label}
            href={filter.value ? `/admin/listings?type=${filter.value}` : "/admin/listings"}
            className={`rounded-pill border px-4 py-1.5 font-ui text-xs transition-colors ${
              (typeFilter === filter.value) || (!typeFilter && !filter.value)
                ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium"
                : "border-gray-200 bg-white text-gray-600 hover:border-brand-gold hover:text-brand-navy"
            }`}
          >
            {filter.label} ({filter.count})
          </Link>
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
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Certification</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Status</th>
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Rating</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {listings.map((listing) => (
              <tr key={listing.id} className="transition-colors hover:bg-gray-50/50">
                <td className="px-5 py-4">
                  <p className="font-display text-sm font-semibold text-brand-navy">{listing.name}</p>
                  {listing.phone && <p className="font-ui text-[11px] text-gray-400">{listing.phone}</p>}
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-pill bg-brand-gold-pale px-2.5 py-0.5 font-ui text-[11px] font-medium text-brand-navy">
                    {listing.type}
                  </span>
                </td>
                <td className="px-5 py-4 font-ui text-sm text-gray-500">{listing.city}, {listing.state}</td>
                <td className="px-5 py-4 font-ui text-sm text-gray-500">
                  {listing.kosherCertifier !== "NONE" ? listing.kosherCertifier : "—"}
                </td>
                <td className="px-5 py-4">
                  <span className={`rounded-pill px-2.5 py-0.5 font-ui text-[11px] font-medium ${
                    listing.status === "ACTIVE"
                      ? "bg-semantic-green-soft text-semantic-green"
                      : listing.status === "PENDING"
                      ? "bg-orange-50 text-orange-500"
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    {listing.status}
                  </span>
                </td>
                <td className="px-5 py-4 font-ui text-sm text-gray-600">
                  {listing.rating ? `★ ${listing.rating.toFixed(1)}` : "—"}
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
        {listings.length === 0 && (
          <div className="px-5 py-12 text-center">
            <p className="font-accent text-sm italic text-gray-400">No listings found. Run the seed to populate data.</p>
          </div>
        )}
      </div>
    </div>
  );
}
