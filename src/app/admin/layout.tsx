import { auth } from "@/auth";
import { AdminGuard } from "./admin-guard";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return <AdminGuard session={session}>{children}</AdminGuard>;
}
