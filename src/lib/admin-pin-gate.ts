import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_PIN_COOKIE = "kc_admin_pin";
const PIN_CODE = "1980";

function gateSecret(): string {
  return (
    process.env.AUTH_SECRET ||
    process.env.KC_ADMIN_PIN_SECRET ||
    "kc-admin-pin-dev-only-change-in-production"
  );
}

/** Signed cookie value (never store raw PIN). */
export function adminPinCookieValue(): string {
  return createHmac("sha256", gateSecret())
    .update(`admin-pin-gate:${PIN_CODE}`)
    .digest("hex");
}

export async function hasValidAdminPinCookie(): Promise<boolean> {
  const jar = await cookies();
  const c = jar.get(ADMIN_PIN_COOKIE)?.value;
  if (!c) return false;
  const expected = adminPinCookieValue();
  if (c.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(c, "utf8"), Buffer.from(expected, "utf8"));
  } catch {
    return false;
  }
}

export async function clearAdminPinCookie(): Promise<void> {
  const jar = await cookies();
  jar.delete(ADMIN_PIN_COOKIE);
}

export function verifyAdminPinInput(pin: string): boolean {
  return String(pin).trim() === PIN_CODE;
}
