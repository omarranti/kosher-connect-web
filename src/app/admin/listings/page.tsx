import Link from "next/link";
import { prisma } from "@/lib/db";
import type { Prisma } from "@prisma/client";

export const dynamic = "force-dynamic";

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: "bg-emerald-50 text-emerald-600 border-emerald-200",
  PENDING: "bg-amber-50 text-amber-600 border-amber-200",
  DRAFT: "bg-gray-50 text-gray-500 border-gray-200",
  PAUSED: "bg-blue-50 text-blue-500 border-blue-200",
  CLOSED: "bg-red-50 text-red-500 border-red-200",
};

const TYPE_EMOJI: Record<string, string> = {
  RESTAURANT: "🍽", CAFE: "☕", BAKERY: "🥯", BUTCHER: "🥩", GROCERY: "🛒",
  CATERER: "🍱", FOOD_TRUCK: "🚚", WHOLESALE: "📦", VENUE: "🏛",
  PHOTOGRAPHER: "📸", DJ: "🎵", DECORATOR: "🎨", PLANNER: "📋",
  WORKSHOP: "🎓", OTHER: "📌",
};

type SortField = "name" | "city" | "type" | "status" | "rating" | "createdAt";
type SortDir = "asc" | "desc";

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: Promise<{
    type?: string;
    status?: string;
    city?: string;
    cert?: string;
    search?: string;
    sort?: string;
    dir?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const typeFilter = params.type?.toUpperCase();
  const statusFilter = params.status?.toUpperCase();
  const cityFilter = params.city;
  const certFilter = params.cert?.toUpperCase();
  const search = params.search?.trim();
  const sortField = (params.sort as SortField) || "createdAt";
  const sortDir = (params.dir as SortDir) || "desc";
  const page = Math.max(1, parseInt(params.page || "1", 10));
  const perPage = 25;

  const where: Prisma.ListingWhereInput = {};
  if (typeFilter) where.type = typeFilter as any;
  if (statusFilter) where.status = statusFilter as any;
  if (cityFilter) where.city = cityFilter;
  if (certFilter) where.kosherCertifier = certFilter as any;
  if (search) where.name = { contains: search, mode: "insensitive" };

  const orderBy: Prisma.ListingOrderByWithRelationInput =
    sortField === "rating"
      ? { rating: { sort: sortDir, nulls: "last" } }
      : { [sortField]: sortDir };

  const [listings, total, typeCounts, statusCounts, cityCounts, certCounts] = await Promise.all([
    prisma.listing.findMany({
      where,
      orderBy,
      skip: (page - 1) * perPage,
      take: perPage,
      select: {
        id: true, name: true, type: true, city: true, state: true,
        status: true, rating: true, kosherCertifier: true, phone: true,
        createdAt: true,
      },
    }),
    prisma.listing.count({ where }),
    prisma.listing.groupBy({ by: ["type"], _count: { id: true }, orderBy: { _count: { id: "desc" } } }),
    prisma.listing.groupBy({ by: ["status"], _count: { id: true }, orderBy: { _count: { id: "desc" } } }),
    prisma.listing.groupBy({ by: ["city"], _count: { id: true }, orderBy: { _count: { id: "desc" } }, take: 10 }),
    prisma.listing.groupBy({ by: ["kosherCertifier"], _count: { id: true }, orderBy: { _count: { id: "desc" } } }),
  ]);

  const totalPages = Math.ceil(total / perPage);

  // Build URL helper preserving current filters
  function buildUrl(overrides: Record<string, string | undefined>) {
    const base: Record<string, string> = {};
    if (typeFilter) base.type = typeFilter;
    if (statusFilter) base.status = statusFilter;
    if (cityFilter) base.city = cityFilter;
    if (certFilter) base.cert = certFilter;
    if (search) base.search = search;
    if (sortField !== "createdAt") base.sort = sortField;
    if (sortDir !== "desc") base.dir = sortDir;

    const merged = { ...base, ...overrides };
    // Remove undefined/empty values
    const clean: Record<string, string> = {};
    for (const [k, v] of Object.entries(merged)) {
      if (v) clean[k] = v;
    }
    const qs = new URLSearchParams(clean).toString();
    return `/admin/listings${qs ? `?${qs}` : ""}` as "/admin/listings";
  }

  function sortUrl(field: SortField) {
    const newDir = sortField === field && sortDir === "asc" ? "desc" : "asc";
    return buildUrl({ sort: field, dir: newDir, page: undefined });
  }

  function sortIndicator(field: SortField) {
    if (sortField !== field) return " ↕";
    return sortDir === "asc" ? " ↑" : " ↓";
  }

  const columns: { label: string; field: SortField; hide?: string }[] = [
    { label: "Name", field: "name" },
    { label: "Type", field: "type" },
    { label: "City", field: "city" },
    { label: "Certification", field: "type", hide: "hidden lg:table-cell" },
    { label: "Status", field: "status" },
    { label: "Rating", field: "rating", hide: "hidden md:table-cell" },
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-navy">Listings</h1>
          <p className="font-accent text-sm italic text-gray-500">
            {total.toLocaleString()} result{total !== 1 ? "s" : ""}
            {search ? ` for "${search}"` : ""}
            {typeFilter ? ` · ${typeFilter.charAt(0) + typeFilter.slice(1).toLowerCase()}` : ""}
            {statusFilter ? ` · ${statusFilter}` : ""}
            {cityFilter ? ` · ${cityFilter}` : ""}
          </p>
        </div>
        <Link href="/admin/listings/new" className="btn-burgundy shrink-0 text-xs">
          + Add Listing
        </Link>
      </div>

      {/* Search */}
      <form action="/admin/listings" method="GET" className="flex gap-2">
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search listings by name..."
          className="flex-1 rounded-brand-sm border border-gray-200 bg-white px-4 py-2.5 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-gray-400 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
        />
        {typeFilter && <input type="hidden" name="type" value={typeFilter} />}
        {statusFilter && <input type="hidden" name="status" value={statusFilter} />}
        {cityFilter && <input type="hidden" name="city" value={cityFilter} />}
        {certFilter && <input type="hidden" name="cert" value={certFilter} />}
        <button type="submit" className="rounded-brand-sm bg-brand-navy px-5 py-2.5 font-ui text-xs font-medium text-white transition-colors hover:bg-brand-navy/80">
          Search
        </button>
        {(search || typeFilter || statusFilter || cityFilter || certFilter) && (
          <Link href="/admin/listings" className="rounded-brand-sm border border-gray-200 bg-white px-4 py-2.5 font-ui text-xs text-gray-500 transition-colors hover:bg-gray-50">
            Clear
          </Link>
        )}
      </form>

      {/* Filter Rows */}
      <div className="space-y-2">
        {/* Type filters */}
        <div className="flex flex-wrap gap-1.5">
          <span className="self-center font-ui text-[10px] font-bold uppercase tracking-wider text-gray-400 mr-1">Type</span>
          <Link
            href={buildUrl({ type: undefined, page: undefined })}
            className={`rounded-pill border px-3 py-1 font-ui text-[11px] transition-colors ${!typeFilter ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-500 hover:border-brand-gold"}`}
          >
            All
          </Link>
          {typeCounts.map((t) => (
            <Link
              key={t.type}
              href={buildUrl({ type: t.type === typeFilter ? undefined : t.type, page: undefined })}
              className={`rounded-pill border px-3 py-1 font-ui text-[11px] transition-colors ${typeFilter === t.type ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-500 hover:border-brand-gold"}`}
            >
              {TYPE_EMOJI[t.type] || ""} {t.type.charAt(0) + t.type.slice(1).toLowerCase().replace(/_/g, " ")} ({t._count.id})
            </Link>
          ))}
        </div>

        {/* Status filters */}
        <div className="flex flex-wrap gap-1.5">
          <span className="self-center font-ui text-[10px] font-bold uppercase tracking-wider text-gray-400 mr-1">Status</span>
          <Link
            href={buildUrl({ status: undefined, page: undefined })}
            className={`rounded-pill border px-3 py-1 font-ui text-[11px] transition-colors ${!statusFilter ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-500 hover:border-brand-gold"}`}
          >
            All
          </Link>
          {statusCounts.map((s) => (
            <Link
              key={s.status}
              href={buildUrl({ status: s.status === statusFilter ? undefined : s.status, page: undefined })}
              className={`rounded-pill border px-3 py-1 font-ui text-[11px] transition-colors ${statusFilter === s.status ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-500 hover:border-brand-gold"}`}
            >
              {s.status} ({s._count.id})
            </Link>
          ))}
        </div>

        {/* City filters */}
        <div className="flex flex-wrap gap-1.5">
          <span className="self-center font-ui text-[10px] font-bold uppercase tracking-wider text-gray-400 mr-1">City</span>
          <Link
            href={buildUrl({ city: undefined, page: undefined })}
            className={`rounded-pill border px-3 py-1 font-ui text-[11px] transition-colors ${!cityFilter ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-500 hover:border-brand-gold"}`}
          >
            All
          </Link>
          {cityCounts.map((c) => (
            <Link
              key={c.city}
              href={buildUrl({ city: c.city === cityFilter ? undefined : c.city, page: undefined })}
              className={`rounded-pill border px-3 py-1 font-ui text-[11px] transition-colors ${cityFilter === c.city ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-500 hover:border-brand-gold"}`}
            >
              {c.city} ({c._count.id})
            </Link>
          ))}
        </div>

        {/* Certification filters */}
        <div className="flex flex-wrap gap-1.5">
          <span className="self-center font-ui text-[10px] font-bold uppercase tracking-wider text-gray-400 mr-1">Cert</span>
          <Link
            href={buildUrl({ cert: undefined, page: undefined })}
            className={`rounded-pill border px-3 py-1 font-ui text-[11px] transition-colors ${!certFilter ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-500 hover:border-brand-gold"}`}
          >
            All
          </Link>
          {certCounts.filter(c => c.kosherCertifier !== "NONE").map((c) => (
            <Link
              key={c.kosherCertifier}
              href={buildUrl({ cert: c.kosherCertifier === certFilter ? undefined : c.kosherCertifier, page: undefined })}
              className={`rounded-pill border px-3 py-1 font-ui text-[11px] transition-colors ${certFilter === c.kosherCertifier ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-500 hover:border-brand-gold"}`}
            >
              {c.kosherCertifier === "STAR_K" ? "Star-K" : c.kosherCertifier} ({c._count.id})
            </Link>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-brand border border-gray-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                {columns.map((col, i) => (
                  <th key={col.label} className={`px-4 py-3 text-left ${col.hide || ""}`}>
                    {i === 3 ? (
                      <span className="font-ui text-[11px] font-medium uppercase tracking-wider text-gray-400">
                        {col.label}
                      </span>
                    ) : (
                      <Link
                        href={sortUrl(col.field)}
                        className="font-ui text-[11px] font-medium uppercase tracking-wider text-gray-400 hover:text-brand-navy transition-colors"
                      >
                        {col.label}{sortIndicator(col.field)}
                      </Link>
                    )}
                  </th>
                ))}
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {listings.map((listing) => (
                <tr key={listing.id} className="transition-colors hover:bg-gray-50/50">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-brand-gold-pale text-sm">
                        {TYPE_EMOJI[listing.type] || "📌"}
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-sm font-semibold text-brand-navy truncate">{listing.name}</p>
                        {listing.phone && <p className="font-ui text-[11px] text-gray-400">{listing.phone}</p>}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="rounded-pill bg-brand-gold-pale/60 px-2.5 py-0.5 font-ui text-[11px] font-medium text-brand-navy">
                      {listing.type.charAt(0) + listing.type.slice(1).toLowerCase().replace(/_/g, " ")}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-ui text-sm text-gray-500">
                    {listing.city}, {listing.state}
                  </td>
                  <td className="hidden px-4 py-3.5 font-ui text-sm text-gray-500 lg:table-cell">
                    {listing.kosherCertifier !== "NONE"
                      ? listing.kosherCertifier === "STAR_K" ? "Star-K" : listing.kosherCertifier
                      : "—"}
                  </td>
                  <td className="px-4 py-3.5">
                    <span className={`rounded-pill border px-2.5 py-0.5 font-ui text-[11px] font-medium ${STATUS_COLORS[listing.status] || "bg-gray-50 text-gray-500 border-gray-200"}`}>
                      {listing.status}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3.5 font-ui text-sm text-gray-600 md:table-cell">
                    {listing.rating ? (
                      <span className="inline-flex items-center gap-1">
                        <span className="text-amber-400">★</span> {listing.rating.toFixed(1)}
                      </span>
                    ) : "—"}
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <Link href={`/admin/listings/${listing.id}`} className="font-ui text-xs font-medium text-brand-gold hover:text-brand-navy transition-colors">
                      Edit →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {listings.length === 0 && (
          <div className="px-5 py-12 text-center">
            <p className="font-accent text-sm italic text-gray-400">
              No listings found{search ? ` for "${search}"` : ""}.
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="font-ui text-xs text-gray-400">
            Showing {((page - 1) * perPage) + 1}–{Math.min(page * perPage, total)} of {total}
          </p>
          <div className="flex gap-1.5">
            {page > 1 && (
              <Link
                href={buildUrl({ page: String(page - 1) })}
                className="rounded-brand-sm border border-gray-200 bg-white px-3 py-1.5 font-ui text-xs text-gray-600 hover:bg-gray-50"
              >
                ← Prev
              </Link>
            )}
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              let p: number;
              if (totalPages <= 7) {
                p = i + 1;
              } else if (page <= 4) {
                p = i + 1;
              } else if (page >= totalPages - 3) {
                p = totalPages - 6 + i;
              } else {
                p = page - 3 + i;
              }
              return (
                <Link
                  key={p}
                  href={buildUrl({ page: String(p) })}
                  className={`grid h-8 w-8 place-items-center rounded-brand-sm font-ui text-xs transition-colors ${
                    p === page
                      ? "bg-brand-navy text-white"
                      : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {p}
                </Link>
              );
            })}
            {page < totalPages && (
              <Link
                href={buildUrl({ page: String(page + 1) })}
                className="rounded-brand-sm border border-gray-200 bg-white px-3 py-1.5 font-ui text-xs text-gray-600 hover:bg-gray-50"
              >
                Next →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
