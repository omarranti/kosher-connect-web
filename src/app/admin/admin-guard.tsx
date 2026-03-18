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

  useEffect(() => {
    if (!session && !isLoginPage) {
      const callbackUrl = encodeURIComponent(pathname ?? "/admin");
      router.replace(`/admin/login?callbackUrl=${callbackUrl}`);
      return;
    }
    if (session && isLoginPage) {
      router.replace("/admin");
    }
  }, [session, isLoginPage, pathname, router]);

  if (!session && !isLoginPage) {
    return null;
  }
  if (session && isLoginPage) {
    return null;
  }
  if (isLoginPage) {
    return <>{children}</>;
  }
  return <AdminShell>{children}</AdminShell>;
}
