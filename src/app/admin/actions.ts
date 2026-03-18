"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function signOutAction() {
  await signOut({ redirectTo: "/admin/login" });
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const callbackUrl = (formData.get("callbackUrl") as string) || "/admin";
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    // Re-throw Next.js redirect errors (shouldn't happen with redirect: false)
    if (isRedirectError(error)) throw error;
    // Any auth error (CredentialsSignin, etc.)
    return { error: "Invalid email or password." };
  }
  redirect(callbackUrl);
}
