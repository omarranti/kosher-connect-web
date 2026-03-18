import Link from "next/link";
import { ListingForm } from "../listing-form";

export default function NewListingPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/listings" className="font-ui text-xs text-brand-gold hover:text-brand-navy transition-colors">
          &larr; Back to Listings
        </Link>
        <h1 className="mt-2 font-display text-2xl font-bold text-brand-navy">
          Add New Listing
        </h1>
        <p className="font-accent text-sm italic text-gray-500">
          Create a new kosher restaurant, vendor, or service listing.
        </p>
      </div>
      <ListingForm />
    </div>
  );
}
