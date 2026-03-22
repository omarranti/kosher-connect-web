import { sendWaitlistWelcome } from "@/lib/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  try {
    await sendWaitlistWelcome(email);
  } catch (e) {
    console.error("[waitlist email]", e);
    // Don't fail the signup if email fails
  }

  return NextResponse.json({ ok: true });
}
