import { prisma } from "@/lib/db";
import Link from "next/link";
import { format } from "date-fns";

export const dynamic = "force-dynamic";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; page?: string }>;
}) {
  const params = await searchParams;
  const status = params.status;
  const page = parseInt(params.page ?? "1", 10);
  const limit = 20;

  const where: Record<string, unknown> = {};
  if (status) where.status = status;

  const [events, total] = await Promise.all([
    prisma.event.findMany({
      where,
      orderBy: { startDate: "asc" },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true,
        title: true,
        status: true,
        startDate: true,
        endDate: true,
        city: true,
        state: true,
        locationName: true,
        attendeeCount: true,
        isFree: true,
        price: true,
        isRecurring: true,
      },
    }),
    prisma.event.count({ where }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-navy">Events</h1>
          <p className="font-accent text-sm italic text-gray-500">
            {total} community events, holidays, and gatherings.
          </p>
        </div>
        <Link href="/admin/events/new" className="btn-burgundy text-xs">
          + Create Event
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {[
          { label: "All", value: undefined },
          { label: "Published", value: "PUBLISHED" },
          { label: "Draft", value: "DRAFT" },
          { label: "Cancelled", value: "CANCELLED" },
          { label: "Past", value: "PAST" },
        ].map((filter) => (
          <Link
            key={filter.label}
            href={filter.value ? `/admin/events?status=${filter.value}` : "/admin/events"}
            className={`rounded-pill border px-4 py-1.5 font-ui text-xs transition-colors ${status === filter.value || (!status && !filter.value) ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium" : "border-gray-200 bg-white text-gray-600 hover:border-brand-gold hover:text-brand-navy"}`}
          >
            {filter.label}
          </Link>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/admin/events/${event.id}`}
            className="rounded-brand border border-gray-100 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold text-brand-navy">{event.title}</h3>
                <p className="mt-1 font-ui text-xs text-gray-400">
                  {format(new Date(event.startDate), "EEE, MMM d · h:mm a")} &middot; {event.city}, {event.state}
                </p>
                {event.locationName && (
                  <p className="mt-0.5 font-ui text-xs text-gray-400">{event.locationName}</p>
                )}
              </div>
              <span className={`tag-brand ${event.status === "PUBLISHED" ? "bg-semantic-green-soft text-semantic-green" : event.status === "DRAFT" ? "bg-brand-gold-pale text-brand-navy" : event.status === "CANCELLED" ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500"}`}>
                {event.status}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(Math.min(event.attendeeCount, 3))].map((_, i) => (
                    <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-brand-gold/20" />
                  ))}
                </div>
                <span className="font-ui text-xs text-gray-400">
                  {event.attendeeCount} attending
                </span>
              </div>
              {event.isRecurring && (
                <span className="font-ui text-xs text-brand-gold">Recurring</span>
              )}
              {event.isFree ? (
                <span className="font-ui text-xs text-semantic-green">Free</span>
              ) : event.price ? (
                <span className="font-ui text-xs text-gray-500">${event.price}</span>
              ) : null}
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="font-ui text-xs text-gray-400">
            Page {page} of {totalPages}
          </p>
          <div className="flex gap-2">
            {page > 1 && (
              <Link
                href={`/admin/events?page=${page - 1}${status ? `&status=${status}` : ""}`}
                className="rounded-pill border border-gray-200 bg-white px-4 py-1.5 font-ui text-xs text-gray-600 hover:border-brand-gold"
              >
                &larr; Prev
              </Link>
            )}
            {page < totalPages && (
              <Link
                href={`/admin/events?page=${page + 1}${status ? `&status=${status}` : ""}`}
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
