import Link from "next/link";

export default function EventsPage() {
  const events = [
    { id: "1", title: "Shabbat Dinner Rachel's", date: "Friday 7:30 PM", location: "Los Angeles", attendees: 8, status: "Upcoming" },
    { id: "2", title: "Challah Baking Workshop", date: "Sunday 2:00 PM", location: "Los Angeles", attendees: 12, status: "Upcoming" },
    { id: "3", title: "Rosh Chodesh Tamuz Celebration", date: "Jun 26", location: "Multiple", attendees: 45, status: "Upcoming" },
    { id: "4", title: "Shavuot Community Dinner", date: "Jun 11-13", location: "New York", attendees: 120, status: "Planning" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-brand-navy">Events</h1>
          <p className="font-accent text-sm italic text-gray-500">
            Manage community events, holidays, and gatherings.
          </p>
        </div>
        <Link href="/admin/events/new" className="btn-burgundy text-xs">
          + Create Event
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {["All", "Upcoming", "Planning", "Past", "Holidays"].map((filter) => (
          <button
            key={filter}
            className="rounded-pill border border-gray-200 bg-white px-4 py-1.5 font-ui text-xs text-gray-600 transition-colors hover:border-brand-gold hover:text-brand-navy"
          >
            {filter}
          </button>
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
                <p className="mt-1 font-ui text-xs text-gray-400">{event.date} · {event.location}</p>
              </div>
              <span className={`tag-brand ${event.status === "Upcoming" ? "bg-semantic-green-soft text-semantic-green" : "bg-brand-gold-pale text-brand-navy"}`}>
                {event.status}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(Math.min(event.attendees, 3))].map((_, i) => (
                  <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-brand-gold/20" />
                ))}
              </div>
              <span className="font-ui text-xs text-gray-400">
                {event.attendees} attending
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
