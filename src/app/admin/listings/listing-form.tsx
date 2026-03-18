"use client";

import { useRouter } from "next/navigation";
import { createListing, updateListing, deleteListing } from "../listing-actions";

const LISTING_TYPES = [
  "RESTAURANT", "CAFE", "BAKERY", "BUTCHER", "GROCERY", "CATERER",
  "FOOD_TRUCK", "WHOLESALE", "VENUE", "PHOTOGRAPHER", "DJ",
  "DECORATOR", "PLANNER", "WORKSHOP", "OTHER",
] as const;

const STATUSES = ["DRAFT", "PENDING", "ACTIVE", "PAUSED", "CLOSED"] as const;
const CERTIFIERS = ["NONE", "OU", "OK", "RCC", "STAR_K", "CRC", "OTHER"] as const;
const PRICE_RANGES = ["$", "$$", "$$$", "$$$$"] as const;

type ListingData = {
  id: string;
  name: string;
  type: string;
  status: string;
  city: string;
  state: string;
  address: string | null;
  postalCode: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  description: string | null;
  priceRange: string | null;
  kosherCertifier: string;
  kosherStatus: boolean;
  cholovYisroel: boolean;
  pasYisroel: boolean;
  yoshon: boolean;
  bishulYisroel: boolean;
};

export function ListingForm({ listing }: { listing?: ListingData }) {
  const router = useRouter();
  const isEdit = !!listing;

  async function handleSubmit(formData: FormData) {
    if (isEdit) {
      await updateListing(listing.id, formData);
    } else {
      await createListing(formData);
    }
  }

  async function handleDelete() {
    if (!listing) return;
    if (!confirm("Are you sure you want to delete this listing?")) return;
    await deleteListing(listing.id);
  }

  const inputClass =
    "w-full rounded-brand border border-gray-200 px-4 py-2.5 font-ui text-sm text-brand-navy focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold";
  const labelClass = "block font-ui text-xs font-medium text-gray-600 mb-1";

  return (
    <form action={handleSubmit} className="space-y-6">
      {/* Basic Info */}
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>Name *</label>
            <input id="name" name="name" required defaultValue={listing?.name ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="type" className={labelClass}>Type *</label>
            <select id="type" name="type" required defaultValue={listing?.type ?? "RESTAURANT"} className={inputClass}>
              {LISTING_TYPES.map((t) => (
                <option key={t} value={t}>{t.charAt(0) + t.slice(1).toLowerCase().replace(/_/g, " ")}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="status" className={labelClass}>Status</label>
            <select id="status" name="status" defaultValue={listing?.status ?? "DRAFT"} className={inputClass}>
              {STATUSES.map((s) => (
                <option key={s} value={s}>{s.charAt(0) + s.slice(1).toLowerCase()}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="priceRange" className={labelClass}>Price Range</label>
            <select id="priceRange" name="priceRange" defaultValue={listing?.priceRange ?? ""} className={inputClass}>
              <option value="">Not set</option>
              {PRICE_RANGES.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="description" className={labelClass}>Description</label>
            <textarea id="description" name="description" rows={3} defaultValue={listing?.description ?? ""} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Location</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="address" className={labelClass}>Address</label>
            <input id="address" name="address" defaultValue={listing?.address ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="city" className={labelClass}>City *</label>
            <input id="city" name="city" required defaultValue={listing?.city ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="state" className={labelClass}>State *</label>
            <input id="state" name="state" required defaultValue={listing?.state ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="postalCode" className={labelClass}>Postal Code</label>
            <input id="postalCode" name="postalCode" defaultValue={listing?.postalCode ?? ""} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Contact</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label htmlFor="phone" className={labelClass}>Phone</label>
            <input id="phone" name="phone" type="tel" defaultValue={listing?.phone ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input id="email" name="email" type="email" defaultValue={listing?.email ?? ""} className={inputClass} />
          </div>
          <div>
            <label htmlFor="website" className={labelClass}>Website</label>
            <input id="website" name="website" type="url" defaultValue={listing?.website ?? ""} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Kosher Details */}
      <div className="rounded-brand border border-gray-100 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-brand-navy mb-4">Kosher Details</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="kosherCertifier" className={labelClass}>Certifier</label>
            <select id="kosherCertifier" name="kosherCertifier" defaultValue={listing?.kosherCertifier ?? "NONE"} className={inputClass}>
              {CERTIFIERS.map((c) => (
                <option key={c} value={c}>{c === "STAR_K" ? "Star-K" : c}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap items-end gap-6">
            {([
              ["kosherStatus", "Kosher"],
              ["cholovYisroel", "Cholov Yisroel"],
              ["pasYisroel", "Pas Yisroel"],
              ["yoshon", "Yoshon"],
              ["bishulYisroel", "Bishul Yisroel"],
            ] as const).map(([field, label]) => (
              <label key={field} className="flex items-center gap-2 font-ui text-sm text-gray-700">
                <input
                  type="checkbox"
                  name={field}
                  defaultChecked={listing ? (listing as any)[field] : false}
                  className="rounded border-gray-300 text-brand-gold focus:ring-brand-gold"
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <button type="submit" className="btn-burgundy text-sm px-6 py-2.5">
            {isEdit ? "Save Changes" : "Create Listing"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="btn-outline text-sm px-6 py-2.5"
          >
            Cancel
          </button>
        </div>
        {isEdit && (
          <button
            type="button"
            onClick={handleDelete}
            className="font-ui text-sm text-semantic-red hover:text-red-700 transition-colors"
          >
            Delete Listing
          </button>
        )}
      </div>
    </form>
  );
}
