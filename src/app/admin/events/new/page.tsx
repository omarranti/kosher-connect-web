import Link from "next/link";
import { EventForm } from "../event-form";

export default function NewEventPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/events" className="font-ui text-xs text-brand-gold hover:text-brand-navy transition-colors">
          &larr; Back to Events
        </Link>
        <h1 className="mt-2 font-display text-2xl font-bold text-brand-navy">
          Create New Event
        </h1>
        <p className="font-accent text-sm italic text-gray-500">
          Add a community event, holiday gathering, or workshop.
        </p>
      </div>
      <EventForm />
    </div>
  );
}
