"use client";

import { useRouter } from "next/navigation";
import { createEvent, updateEvent, deleteEvent } from "../event-actions";

const STATUSES = ["DRAFT", "PUBLISHED", "CANCELLED", "PAST"] as const;

type EventData = {
  id: string;
  title: string;
  status: string;
  description: string | null;
  startDate: Date;
  endDate: Date | null;
  city: string;
  state: string;
  address: string | null;
  locationName: string | null;
  isVirtual: boolean;
  virtualUrl: string | null;
  isFree: boolean;
  price: number | null;
  maxAttendees: number | null;
  registrationUrl: string | null;
  isRecurring: boolean;
};

function toDatetimeLocal(date: Date): string {
  const d = new Date(date);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
}

export function EventForm({ event }: { event?: EventData }) {
  const router = useRouter();
  const isEdit = !!event;

  async function handleSubmit(formData: FormData) {
    if (isEdit) {
      await updateEvent(event.id, formData);
    } else {
      await createEvent(formData);
    }
  }

  async function handleDelete() {
    if (!event) return;
    if (!confirm("Are you sure you want to delete this event?")) return;
    await deleteEvent(event.id);
  }

  const inputClass =
    "w-full rounded-brand border border-gray-200 px-4 py-2.5 font-ui text-sm text-brand-navy focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold";
  const labelClass = "block font-ui text-xs font-medium text-gray-600 mb-1";

  return (
    <form action={handleSubmit} className="space-y-6">
      {/* Basic Info */}
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Event Details</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="title" className={labelClass}>Title *</label>
            <input id="title" name="title" required defaultValue={event?.title ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="status" className={labelClass}>Status</label>
            <select id="status" name="status" defaultValue={event?.status ?? "DRAFT"} className={inputClass}>
              {STATUSES.map((s) => (
                <option key={s} value={s}>{s.charAt(0) + s.slice(1).toLowerCase()}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end gap-6">
            <label className="flex items-center gap-2 font-ui text-sm text-gray-700">
              <input type="checkbox" name="isRecurring" defaultChecked={event?.isRecurring ?? false} className="rounded border-gray-300 text-brand-gold focus:ring-brand-gold" />
              Recurring
            </label>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="description" className={labelClass}>Description</label>
            <textarea id="description" name="description" rows={3} defaultValue={event?.description ?? ""} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Date & Time */}
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Date & Time</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="startDate" className={labelClass}>Start Date *</label>
            <input id="startDate" name="startDate" type="datetime-local" required defaultValue={event ? toDatetimeLocal(event.startDate) : ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="endDate" className={labelClass}>End Date</label>
            <input id="endDate" name="endDate" type="datetime-local" defaultValue={event?.endDate ? toDatetimeLocal(event.endDate) : ""} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Location</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="locationName" className={labelClass}>Venue Name</label>
            <input id="locationName" name="locationName" defaultValue={event?.locationName ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="address" className={labelClass}>Address</label>
            <input id="address" name="address" defaultValue={event?.address ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="city" className={labelClass}>City *</label>
            <input id="city" name="city" required defaultValue={event?.city ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="state" className={labelClass}>State *</label>
            <input id="state" name="state" required defaultValue={event?.state ?? ""} className={inputClass} />
          </div>
          <div className="md:col-span-2 flex items-center gap-6">
            <label className="flex items-center gap-2 font-ui text-sm text-gray-700">
              <input type="checkbox" name="isVirtual" defaultChecked={event?.isVirtual ?? false} className="rounded border-gray-300 text-brand-gold focus:ring-brand-gold" />
              Virtual Event
            </label>
            <div className="flex-1">
              <label htmlFor="virtualUrl" className={labelClass}>Virtual URL</label>
              <input id="virtualUrl" name="virtualUrl" type="url" defaultValue={event?.virtualUrl ?? ""} className={inputClass} />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Registration */}
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Pricing & Registration</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label htmlFor="isFree" className={labelClass}>Pricing</label>
            <select id="isFree" name="isFree" defaultValue={event?.isFree === false ? "off" : "on"} className={inputClass}>
              <option value="on">Free</option>
              <option value="off">Paid</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className={labelClass}>Price ($)</label>
            <input id="price" name="price" type="number" step="0.01" min="0" defaultValue={event?.price ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="maxAttendees" className={labelClass}>Max Attendees</label>
            <input id="maxAttendees" name="maxAttendees" type="number" min="0" defaultValue={event?.maxAttendees ?? ""} className={inputClass} />
          </div>
          <div className="md:col-span-3">
            <label htmlFor="registrationUrl" className={labelClass}>Registration URL</label>
            <input id="registrationUrl" name="registrationUrl" type="url" defaultValue={event?.registrationUrl ?? ""} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <button type="submit" className="btn-burgundy text-sm px-6 py-2.5">
            {isEdit ? "Save Changes" : "Create Event"}
          </button>
          <button type="button" onClick={() => router.back()} className="btn-outline text-sm px-6 py-2.5">
            Cancel
          </button>
        </div>
        {isEdit && (
          <button type="button" onClick={handleDelete} className="font-ui text-sm text-semantic-red hover:text-red-700 transition-colors">
            Delete Event
          </button>
        )}
      </div>
    </form>
  );
}
