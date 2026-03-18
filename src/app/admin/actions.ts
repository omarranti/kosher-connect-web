"use server";

import { signIn, signOut } from "@/auth";

export async function signOutAction() {
  await signOut({ redirectTo: "/admin/login" });
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const callbackUrl = (formData.get("callbackUrl") as string) || "/admin";
  await signIn("credentials", { email, password, redirectTo: callbackUrl });
}
