"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createListing(formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;
  const status = (formData.get("status") as string) || "DRAFT";
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const address = formData.get("address") as string;
  const postalCode = formData.get("postalCode") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const website = formData.get("website") as string;
  const description = formData.get("description") as string;
  const priceRange = formData.get("priceRange") as string;
  const kosherCertifier = (formData.get("kosherCertifier") as string) || "NONE";
  const kosherStatus = formData.get("kosherStatus") === "on";
  const cholovYisroel = formData.get("cholovYisroel") === "on";
  const pasYisroel = formData.get("pasYisroel") === "on";
  const yoshon = formData.get("yoshon") === "on";
  const bishulYisroel = formData.get("bishulYisroel") === "on";

  const slug = (name + " " + city)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

  // Find or create an admin user to be the creator
  const admin = await prisma.user.findFirst({ where: { role: "SUPER_ADMIN" } });
  if (!admin) throw new Error("No admin user found");

  await prisma.listing.create({
    data: {
      name,
      slug,
      type: type as any,
      status: status as any,
      city,
      state,
      address: address || null,
      postalCode: postalCode || null,
      phone: phone || null,
      email: email || null,
      website: website || null,
      description: description || null,
      priceRange: priceRange || null,
      kosherCertifier: kosherCertifier as any,
      kosherStatus,
      cholovYisroel,
      pasYisroel,
      yoshon,
      bishulYisroel,
      createdById: admin.id,
    },
  });

  revalidatePath("/admin/listings");
  redirect("/admin/listings");
}

export async function updateListing(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;
  const status = formData.get("status") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const address = formData.get("address") as string;
  const postalCode = formData.get("postalCode") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const website = formData.get("website") as string;
  const description = formData.get("description") as string;
  const priceRange = formData.get("priceRange") as string;
  const kosherCertifier = (formData.get("kosherCertifier") as string) || "NONE";
  const kosherStatus = formData.get("kosherStatus") === "on";
  const cholovYisroel = formData.get("cholovYisroel") === "on";
  const pasYisroel = formData.get("pasYisroel") === "on";
  const yoshon = formData.get("yoshon") === "on";
  const bishulYisroel = formData.get("bishulYisroel") === "on";

  await prisma.listing.update({
    where: { id },
    data: {
      name,
      type: type as any,
      status: status as any,
      city,
      state,
      address: address || null,
      postalCode: postalCode || null,
      phone: phone || null,
      email: email || null,
      website: website || null,
      description: description || null,
      priceRange: priceRange || null,
      kosherCertifier: kosherCertifier as any,
      kosherStatus,
      cholovYisroel,
      pasYisroel,
      yoshon,
      bishulYisroel,
    },
  });

  revalidatePath("/admin/listings");
  revalidatePath(`/admin/listings/${id}`);
  redirect("/admin/listings");
}

export async function deleteListing(id: string) {
  await prisma.listing.delete({ where: { id } });
  revalidatePath("/admin/listings");
  redirect("/admin/listings");
}
