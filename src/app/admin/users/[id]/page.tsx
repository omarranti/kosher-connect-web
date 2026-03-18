import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { UserForm } from "./user-form";

export const dynamic = "force-dynamic";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      plan: true,
      createdAt: true,
      _count: { select: { listings: true, events: true } },
    },
  });

  if (!user) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/users" className="font-ui text-xs text-brand-gold hover:text-brand-navy transition-colors">
          &larr; Back to Users
        </Link>
        <h1 className="mt-2 font-display text-2xl font-bold text-brand-navy">
          Edit User
        </h1>
        <p className="font-accent text-sm italic text-gray-500">
          {user.name || "Unnamed"} &middot; joined {user.createdAt.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-brand border border-gray-100 bg-white p-5">
          <p className="font-ui text-xs uppercase tracking-wider text-gray-400">Listings</p>
          <p className="mt-1 font-display text-2xl font-bold text-brand-navy">{user._count.listings}</p>
        </div>
        <div className="rounded-brand border border-gray-100 bg-white p-5">
          <p className="font-ui text-xs uppercase tracking-wider text-gray-400">Events</p>
          <p className="mt-1 font-display text-2xl font-bold text-brand-navy">{user._count.events}</p>
        </div>
        <div className="rounded-brand border border-gray-100 bg-white p-5">
          <p className="font-ui text-xs uppercase tracking-wider text-gray-400">Member Since</p>
          <p className="mt-1 font-display text-lg font-bold text-brand-navy">
            {user.createdAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </div>

      <UserForm user={{ id: user.id, name: user.name, email: user.email, role: user.role, plan: user.plan }} />
    </div>
  );
}
