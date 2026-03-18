"use server";

import { prisma } from "@/lib/db";
import { sendVendorConfirmation } from "@/lib/email";

export async function submitVendorListing(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const type = formData.get("type") as string;
  const city = (formData.get("city") as string)?.trim();
  const state = (formData.get("state") as string)?.trim();

  if (!name || !type || !city || !state) {
    return { error: "Please fill in all required fields." };
  }

  const description = (formData.get("description") as string)?.trim() || null;
  const address = (formData.get("address") as string)?.trim() || null;
  const postalCode = (formData.get("postalCode") as string)?.trim() || null;
  const phone = (formData.get("phone") as string)?.trim() || null;
  const email = (formData.get("email") as string)?.trim() || null;
  const website = (formData.get("website") as string)?.trim() || null;
  const priceRange = (formData.get("priceRange") as string) || null;
  const kosherCertifier = (formData.get("kosherCertifier") as string) || "NONE";
  const kosherStatus = formData.get("kosherStatus") === "on";
  const cholovYisroel = formData.get("cholovYisroel") === "on";
  const pasYisroel = formData.get("pasYisroel") === "on";
  const yoshon = formData.get("yoshon") === "on";
  const bishulYisroel = formData.get("bishulYisroel") === "on";

  const slug =
    (name + " " + city)
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) +
    "-" +
    Date.now().toString(36);

  // Find an admin user as the creator (required by schema)
  const admin = await prisma.user.findFirst({ where: { role: "SUPER_ADMIN" } });
  if (!admin) {
    return { error: "System error. Please try again later." };
  }

  try {
    await prisma.listing.create({
      data: {
        name,
        slug,
        type: type as any,
        status: "PENDING",
        description,
        city,
        state,
        address,
        postalCode,
        phone,
        email,
        website,
        priceRange,
        kosherCertifier: kosherCertifier as any,
        kosherStatus,
        cholovYisroel,
        pasYisroel,
        yoshon,
        bishulYisroel,
        createdById: admin.id,
      },
    });
  } catch {
    return { error: "Something went wrong. Please try again." };
  }

  // Send confirmation email (don't block on failure)
  if (email) {
    sendVendorConfirmation(email, name).catch((e) =>
      console.error("[vendor email]", e)
    );
  }

  return { success: true };
}
