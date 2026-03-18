import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const params = await searchParams;
  const statusFilter = params.status?.toUpperCase();

  const events = await prisma.event.findMany({
    where: statusFilter ? { status: statusFilter as any } : undefined,
    orderBy: { startDate: "asc" },
    select: {
      id: true,
      title: true,
      startDate: true,
      endDate: true,
      city: true,
      state: true,
      locationName: true,
      status: true,
      attendeeCount: true,
      maxAttendees: true,
      isRecurring: true,
      isFree: true,
      price: true,
    },
  });

  const statusCounts = await prisma.event.groupBy({
    by: ["status"],
    _count: { id: true },
  });

  const filters = [
    { label: "All", value: "", count: events.length },
    ...statusCounts.map((s) => ({
      label: s.status.charAt(0) + s.status.slice(1).toLowerCase(),
      value: s.status,
      count: s._count.id,
    })),
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-navy">Events</h1>
          <p className="font-accent text-sm italic text-gray-500">
            {events.length} community events, holidays, and gatherings.
          </p>
        </div>
        <Link href="/admin/events/new" className="btn-burgundy text-xs">
          + Create Event
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Link
            key={filter.label}
            href={filter.value ? `/admin/events?status=${filter.value}` : "/admin/events"}
            className={`rounded-pill border px-4 py-1.5 font-ui text-xs transition-colors ${
              (statusFilter === filter.value) || (!statusFilter && !filter.value)
                ? "border-brand-gold bg-brand-gold-pale text-brand-navy font-medium"
                : "border-gray-200 bg-white text-gray-600 hover:border-brand-gold hover:text-brand-navy"
            }`}
          >
            {filter.label} ({filter.count})
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
                  {event.startDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
                  {event.endDate && ` – ${event.endDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}
                </p>
                <p className="font-ui text-xs text-gray-400">
                  {event.locationName ? `${event.locationName} · ` : ""}{event.city}, {event.state}
                </p>
              </div>
              <span className={`rounded-pill px-2.5 py-0.5 font-ui text-[10px] font-medium ${
                event.status === "PUBLISHED"
                  ? "bg-semantic-green-soft text-semantic-green"
                  : event.status === "DRAFT"
                  ? "bg-brand-gold-pale text-brand-navy"
                  : event.status === "CANCELLED"
                  ? "bg-red-50 text-red-500"
                  : "bg-gray-100 text-gray-500"
              }`}>
                {event.status}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              {event.isRecurring && (
                <span className="font-ui text-[11px] text-brand-gold">↻ Recurring</span>
              )}
              <span className="font-ui text-xs text-gray-400">
                {event.attendeeCount} attending{event.maxAttendees ? ` / ${event.maxAttendees} max` : ""}
              </span>
              <span className="font-ui text-xs text-gray-400">
                {event.isFree ? "Free" : `$${event.price?.toFixed(2)}`}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {events.length === 0 && (
        <div className="rounded-brand border border-gray-100 bg-white px-5 py-12 text-center">
          <p className="font-accent text-sm italic text-gray-400">No events found. Run the seed to populate data.</p>
        </div>
      )}
    </div>
  );
}
