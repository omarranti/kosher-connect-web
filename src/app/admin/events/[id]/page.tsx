import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { EventForm } from "../event-form";

export const dynamic = "force-dynamic";

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const event = await prisma.event.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      status: true,
      description: true,
      startDate: true,
      endDate: true,
      city: true,
      state: true,
      address: true,
      locationName: true,
      isVirtual: true,
      virtualUrl: true,
      isFree: true,
      price: true,
      maxAttendees: true,
      registrationUrl: true,
      isRecurring: true,
    },
  });

  if (!event) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/events" className="font-ui text-xs text-brand-gold hover:text-brand-navy transition-colors">
          &larr; Back to Events
        </Link>
        <h1 className="mt-2 font-display text-2xl font-bold text-brand-navy">
          Edit Event
        </h1>
        <p className="font-accent text-sm italic text-gray-500">{event.title}</p>
      </div>
      <EventForm event={event} />
    </div>
  );
}
