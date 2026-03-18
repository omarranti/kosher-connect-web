"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Users,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { signOutAction } from "./actions";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/listings", label: "Listings", icon: UtensilsCrossed },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/events", label: "Events", icon: CalendarDays },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
] as const;

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-brand-cream">
      <aside className="w-64 bg-brand-navy flex flex-col fixed h-full">
        <div className="px-6 py-6 border-b border-white/10">
          <div className="text-xl">
            <span className="font-display font-bold text-white tracking-wide">KOSHER</span>{" "}
            <span className="font-accent font-semibold italic text-brand-gold">Connect</span>
          </div>
          <p className="font-ui text-[9px] font-light tracking-[3px] uppercase text-white/40 mt-1">
            Admin Portal
          </p>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href as "/admin" | "/admin/listings" | "/admin/users" | "/admin/events" | "/admin/analytics"}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-[16px] text-sm font-ui transition-all duration-200 ${
                  isActive ? "bg-white/10 text-brand-gold" : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={18} />
                <span className="tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-white/10 space-y-1">
          <Link
            href={"/admin/settings"}
            className="flex items-center gap-3 px-4 py-2.5 rounded-[16px] text-sm font-ui text-white/40 hover:text-white/70 transition-colors"
          >
            <Settings size={18} />
            <span>Settings</span>
          </Link>
          <form action={signOutAction} className="w-full">
            <button
              type="submit"
              className="flex items-center gap-3 px-4 py-2.5 rounded-[16px] text-sm font-ui text-white/40 hover:text-semantic-red transition-colors w-full"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 ml-64">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
