import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const [totalListings, activeListings, totalUsers, totalEvents, recentListings] =
    await Promise.all([
      prisma.listing.count(),
      prisma.listing.count({ where: { status: "ACTIVE" } }),
      prisma.user.count(),
      prisma.event.count(),
      prisma.listing.findMany({
        orderBy: { createdAt: "desc" },
        take: 10,
        select: { id: true, name: true, type: true, city: true, state: true, status: true, createdAt: true },
      }),
    ]);

  return NextResponse.json({ totalListings, activeListings, totalUsers, totalEvents, recentListings });
}
