import { auth } from "@/auth";
import { AdminPinForm } from "@/components/admin/admin-pin-form";
import { hasValidAdminPinCookie } from "@/lib/admin-pin-gate";
import { AdminGuard } from "./admin-guard";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await hasValidAdminPinCookie())) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream px-6 py-12">
        <div className="w-full max-w-sm rounded-brand border border-gray-100 bg-white p-8 shadow-sm text-center">
          <h1 className="font-display text-2xl font-bold text-brand-navy">Admin</h1>
          <p className="font-accent text-sm text-gray-500 mt-1">Enter PIN to continue</p>
          <div className="mt-6 flex justify-center">
            <AdminPinForm redirectTo="/admin/dashboard" />
          </div>
        </div>
      </div>
    );
  }

  let session = null;
  try {
    session = await auth();
  } catch {
    // optional session
  }
  return <AdminGuard session={session}>{children}</AdminGuard>;
}
