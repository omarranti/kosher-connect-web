"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

const SIGN_IN_ERROR = "Invalid credentials or insufficient permissions.";

export async function signOutAction() {
  await signOut({ redirectTo: "/admin/login" });
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const callbackUrl = (formData.get("callbackUrl") as string) || "/admin";
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // NextAuth v5 has inconsistent return values with redirect: false:
    // - Can return { error, ok } object, or sometimes a URL string
    // - auth() cannot be used here: session cookie is set in response, not readable in same request
    const err =
      (result && typeof result === "object" && result.error) ||
      (result && typeof result === "object" && result.ok === false) ||
      (typeof result === "string" && result.includes("/login"));

    if (err) {
      return { error: SIGN_IN_ERROR };
    }

    redirect(callbackUrl as "/admin");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    return { error: SIGN_IN_ERROR };
  }
}
