import { prisma } from "@/lib/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

const TYPE_LABELS: Record<string, string> = {
  RESTAURANT: "Restaurant",
  CAFE: "Cafe",
  BAKERY: "Bakery",
  BUTCHER: "Butcher",
  GROCERY: "Grocery",
  CATERER: "Caterer",
  FOOD_TRUCK: "Food Truck",
  WHOLESALE: "Wholesale",
  VENUE: "Venue",
  PHOTOGRAPHER: "Photographer",
  DJ: "DJ",
  DECORATOR: "Decorator",
  PLANNER: "Planner",
  WORKSHOP: "Workshop",
  OTHER: "Other",
};

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; status?: string; city?: string; page?: string }>;
}) {
  const params = await searchParams;
  const type = params.type;
  const status = params.status;
  const city = params.city;
  const page = parseInt(params.page ?? "1", 10);
  const limit = 25;

  const where: Record<string, unknown> = {};
  if (type) where.type = type;
  if (status) where.status = status;
  if (city) where.city = city;

  const [listings, total, types, cities] = await Promise.all([
    prisma.listing.findMany({
      where,
      orderBy: { name: "asc" },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        name: true,
        type: true,
        status: true,
        city: true,
        state: true,
        phone: true,
        kosherCertifier: true,
        kosherStatus: true,
        rating: true,
      },
    }),
    prisma.listing.count({ where }),
    prisma.listing.groupBy({ by: ["type"], _count: { id: true }, orderBy: { _count: { id: "desc" } } }),
    prisma.listing.groupBy({ by: ["city"], _count: { id: true }, orderBy: { _count: { id: "desc" } }, take: 12 }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-navy">Listings</h1>
          <p className="font-accent text-sm italic text-gray-500">
            {total} kosher restaurants, vendors, workshops, and markets.
          </p>
        </div>
        <Link href="/admin/listings/new" className="btn-burgundy text-xs">
          + Add Listing
        </Link>
      </div>

      {/* Type Filters */}
      <div className="flex flex-wrap gap-2">
        <Link
          href="/admin/listings"
          className={`rounded-pill border px-4 py-1.5 font-ui text-xs transition-colors ${!type ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-600 hover:border-brand-gold hover:text-brand-navy"}`}
        >
          All ({total})
        </Link>
        {types.map((t) => (
          <Link
            key={t.type}
            href={`/admin/listings?type=${t.type}${status ? `&status=${status}` : ""}${city ? `&city=${city}` : ""}`}
            className={`rounded-pill border px-4 py-1.5 font-ui text-xs transition-colors ${type === t.type ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-600 hover:border-brand-gold hover:text-brand-navy"}`}
          >
            {TYPE_LABELS[t.type] ?? t.type} ({t._count.id})
          </Link>
        ))}
      </div>

      {/* City Filters */}
      <div className="flex flex-wrap gap-2">
        {cities.map((c) => (
          <Link
            key={c.city}
            href={`/admin/listings?city=${encodeURIComponent(c.city)}${type ? `&type=${type}` : ""}${status ? `&status=${status}` : ""}`}
            className={`rounded-pill border px-3 py-1 font-ui text-xs transition-colors ${city === c.city ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-500 hover:border-brand-gold hover:text-brand-navy"}`}
          >
            {c.city} ({c._count.id})
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
              <th className="px-5 py-3 text-left font-ui text-xs font-medium uppercase tracking-wider text-gray-400">Phone</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {listings.map((listing) => (
              <tr key={listing.id} className="transition-colors hover:bg-gray-50/50">
                <td className="px-5 py-4 font-display text-sm font-semibold text-brand-navy">{listing.name}</td>
                <td className="px-5 py-4">
                  <span className="tag-brand bg-brand-gold-pale text-brand-navy">{TYPE_LABELS[listing.type] ?? listing.type}</span>
                </td>
                <td className="px-5 py-4 font-ui text-sm text-gray-500">{listing.city}, {listing.state}</td>
                <td className="px-5 py-4">
                  {listing.kosherStatus ? (
                    <span className="tag-brand bg-semantic-green-soft text-semantic-green">{listing.kosherCertifier}</span>
                  ) : (
                    <span className="font-ui text-xs text-gray-400">—</span>
                  )}
                </td>
                <td className="px-5 py-4">
                  <span className={`tag-brand ${listing.status === "ACTIVE" ? "bg-semantic-green-soft text-semantic-green" : listing.status === "PENDING" ? "bg-orange-50 text-orange-500" : "bg-gray-100 text-gray-500"}`}>
                    {listing.status}
                  </span>
                </td>
                <td className="px-5 py-4 font-ui text-sm text-gray-500">{listing.phone ?? "—"}</td>
                <td className="px-5 py-4 text-right">
                  <Link href={`/admin/listings/${listing.id}`} className="font-ui text-xs font-medium text-brand-gold hover:text-brand-navy transition-colors">
                    Edit &rarr;
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="font-ui text-xs text-gray-400">
            Showing {(page - 1) * limit + 1}–{Math.min(page * limit, total)} of {total}
          </p>
          <div className="flex gap-2">
            {page > 1 && (
              <Link
                href={`/admin/listings?page=${page - 1}${type ? `&type=${type}` : ""}${status ? `&status=${status}` : ""}${city ? `&city=${city}` : ""}`}
                className="rounded-pill border border-gray-200 bg-white px-4 py-1.5 font-ui text-xs text-gray-600 hover:border-brand-gold"
              >
                &larr; Prev
              </Link>
            )}
            {page < totalPages && (
              <Link
                href={`/admin/listings?page=${page + 1}${type ? `&type=${type}` : ""}${status ? `&status=${status}` : ""}${city ? `&city=${city}` : ""}`}
                className="rounded-pill border border-gray-200 bg-white px-4 py-1.5 font-ui text-xs text-gray-600 hover:border-brand-gold"
              >
                Next &rarr;
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
