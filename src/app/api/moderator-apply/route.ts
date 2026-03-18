import { sendModeratorConfirmation } from "@/lib/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  if (!email || !name) {
    return NextResponse.json({ error: "Name and email required" }, { status: 400 });
  }

  try {
    await sendModeratorConfirmation(email, name);
  } catch (e) {
    console.error("[moderator email]", e);
  }

  return NextResponse.json({ ok: true });
}
