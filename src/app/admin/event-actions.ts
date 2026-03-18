"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const title = formData.get("title") as string;
  const status = (formData.get("status") as string) || "DRAFT";
  const description = formData.get("description") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const address = formData.get("address") as string;
  const locationName = formData.get("locationName") as string;
  const isVirtual = formData.get("isVirtual") === "on";
  const virtualUrl = formData.get("virtualUrl") as string;
  const isFree = formData.get("isFree") !== "off";
  const price = formData.get("price") as string;
  const maxAttendees = formData.get("maxAttendees") as string;
  const registrationUrl = formData.get("registrationUrl") as string;
  const isRecurring = formData.get("isRecurring") === "on";

  const slug = (title + " " + city)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

  const admin = await prisma.user.findFirst({ where: { role: "SUPER_ADMIN" } });
  if (!admin) throw new Error("No admin user found");

  await prisma.event.create({
    data: {
      title,
      slug,
      status: status as any,
      description: description || null,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
      city,
      state,
      address: address || null,
      locationName: locationName || null,
      isVirtual,
      virtualUrl: virtualUrl || null,
      isFree: isFree,
      price: price ? parseFloat(price) : null,
      maxAttendees: maxAttendees ? parseInt(maxAttendees) : null,
      registrationUrl: registrationUrl || null,
      isRecurring,
      organizerId: admin.id,
    },
  });

  revalidatePath("/admin/events");
  redirect("/admin/events");
}

export async function updateEvent(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const status = formData.get("status") as string;
  const description = formData.get("description") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const address = formData.get("address") as string;
  const locationName = formData.get("locationName") as string;
  const isVirtual = formData.get("isVirtual") === "on";
  const virtualUrl = formData.get("virtualUrl") as string;
  const isFree = formData.get("isFree") !== "off";
  const price = formData.get("price") as string;
  const maxAttendees = formData.get("maxAttendees") as string;
  const registrationUrl = formData.get("registrationUrl") as string;
  const isRecurring = formData.get("isRecurring") === "on";

  await prisma.event.update({
    where: { id },
    data: {
      title,
      status: status as any,
      description: description || null,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : null,
      city,
      state,
      address: address || null,
      locationName: locationName || null,
      isVirtual,
      virtualUrl: virtualUrl || null,
      isFree,
      price: price ? parseFloat(price) : null,
      maxAttendees: maxAttendees ? parseInt(maxAttendees) : null,
      registrationUrl: registrationUrl || null,
      isRecurring,
    },
  });

  revalidatePath("/admin/events");
  revalidatePath(`/admin/events/${id}`);
  redirect("/admin/events");
}

export async function deleteEvent(id: string) {
  await prisma.event.delete({ where: { id } });
  revalidatePath("/admin/events");
  redirect("/admin/events");
}
