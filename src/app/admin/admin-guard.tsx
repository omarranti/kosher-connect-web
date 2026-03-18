"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import type { Session } from "next-auth";
import { AdminShell } from "./admin-shell";

export function AdminGuard({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/admin/login";

  // No sign-in required: /admin is open. Redirect /admin/login to /admin.
  useEffect(() => {
    if (isLoginPage) {
      router.replace("/admin");
    }
  }, [isLoginPage, router]);

  if (isLoginPage) {
    return null;
  }
  return <AdminShell>{children}</AdminShell>;
}
