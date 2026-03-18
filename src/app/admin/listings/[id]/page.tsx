import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { ListingForm } from "../listing-form";

export const dynamic = "force-dynamic";

export default async function EditListingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const listing = await prisma.listing.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      type: true,
      status: true,
      city: true,
      state: true,
      address: true,
      postalCode: true,
      phone: true,
      email: true,
      website: true,
      description: true,
      priceRange: true,
      kosherCertifier: true,
      kosherStatus: true,
      cholovYisroel: true,
      pasYisroel: true,
      yoshon: true,
      bishulYisroel: true,
    },
  });

  if (!listing) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/listings" className="font-ui text-xs text-brand-gold hover:text-brand-navy transition-colors">
          &larr; Back to Listings
        </Link>
        <h1 className="mt-2 font-display text-2xl font-bold text-brand-navy">
          Edit Listing
        </h1>
        <p className="font-accent text-sm italic text-gray-500">{listing.name}</p>
      </div>
      <ListingForm listing={listing} />
    </div>
  );
}
