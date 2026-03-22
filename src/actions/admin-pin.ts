"use server";

import { cookies } from "next/headers";
import {
  ADMIN_PIN_COOKIE,
  adminPinCookieValue,
  verifyAdminPinInput,
} from "@/lib/admin-pin-gate";

export async function submitAdminPinAction(pin: string) {
  if (!verifyAdminPinInput(pin)) {
    return { error: "Invalid PIN" as const };
  }
  const jar = await cookies();
  jar.set(ADMIN_PIN_COOKIE, adminPinCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return { ok: true as const };
}
