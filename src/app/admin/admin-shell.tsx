"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Users,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { signOutAction } from "./actions";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/listings", label: "Listings", icon: UtensilsCrossed },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/events", label: "Events", icon: CalendarDays },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
] as const;

type NavHref = (typeof navItems)[number]["href"];

function navItemActive(href: NavHref, pathname: string | null): boolean {
  if (!pathname) return false;
  if (href === "/admin/dashboard") {
    return pathname === "/admin" || pathname === "/admin/dashboard";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const NavBody = (
    <>
      <div className="px-6 py-6 border-b border-white/10">
        <div className="text-xl">
          <span className="font-display font-bold text-white tracking-wide">KOSHER</span>{" "}
          <span className="font-accent font-semibold italic text-brand-gold">Connect</span>
        </div>
        <p className="font-ui text-[9px] font-light tracking-[3px] uppercase text-white/40 mt-1">
          Admin Portal
        </p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const active = navItemActive(item.href, pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-[16px] text-sm font-ui transition-all duration-200 ${
                active ? "bg-white/10 text-brand-gold" : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={18} />
              <span className="tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-white/10 space-y-1 shrink-0">
        <Link
          href="/admin/settings"
          className="flex items-center gap-3 px-4 py-2.5 rounded-[16px] text-sm font-ui text-white/40 hover:text-white/70 transition-colors"
        >
          <Settings size={18} />
          <span>Settings</span>
        </Link>
        <form action={signOutAction} className="w-full">
          <button
            type="submit"
            className="flex items-center gap-3 px-4 py-2.5 rounded-[16px] text-sm font-ui text-white/40 hover:text-semantic-red transition-colors w-full text-left"
          >
            <LogOut size={18} />
            <span>Sign out</span>
          </button>
        </form>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-brand-cream">
      {/* Mobile top bar */}
      <header className="fixed top-0 left-0 right-0 z-30 flex h-14 items-center justify-between border-b border-brand-sand/30 bg-brand-navy px-4 md:hidden">
        <span className="font-display text-sm font-bold text-white">Kosher Connect</span>
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="rounded-lg p-2 text-white hover:bg-white/10"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      {/* Sidebar: drawer on mobile, fixed on desktop */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-64 flex-col bg-brand-navy transition-transform duration-200 ease-out md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } pt-14 md:pt-0`}
      >
        {NavBody}
      </aside>

      <main className="min-h-screen flex-1 w-full min-w-0 pt-14 md:ml-64 md:pt-0">
        <div className="p-4 sm:p-8">{children}</div>
      </main>
    </div>
  );
}
