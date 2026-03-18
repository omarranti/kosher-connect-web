"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function signOutAction() {
  await signOut({ redirectTo: "/admin/login" });
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const callbackUrl = (formData.get("callbackUrl") as string) || "/admin";
  try {
    await signIn("credentials", { email, password, redirectTo: callbackUrl });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Invalid email or password." };
    }
    // Re-throw NEXT_REDIRECT and other non-auth errors
    throw error;
  }
}
