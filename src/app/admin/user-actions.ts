"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateUser(id: string, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;
  const plan = formData.get("plan") as string;

  await prisma.user.update({
    where: { id },
    data: {
      name: name || null,
      email: email || null,
      role: role as any,
      plan: plan as any,
    },
  });

  revalidatePath("/admin/users");
  revalidatePath(`/admin/users/${id}`);
  redirect("/admin/users");
}
