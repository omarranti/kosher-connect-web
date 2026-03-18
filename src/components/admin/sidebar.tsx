"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Store,
  Users,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Listings", href: "/admin/listings", icon: Store },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Events", href: "/admin/events", icon: CalendarDays },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-shrink-0 border-r border-gray-200 bg-white lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex items-baseline gap-1.5 border-b border-gray-100 px-6 py-5">
          <span className="font-display text-lg font-bold tracking-wide text-brand-navy">
            KOSHER
          </span>
          <span className="font-accent text-lg font-semibold italic text-brand-gold">
            Connect
          </span>
          <span className="ml-2 rounded-pill bg-brand-navy px-2 py-0.5 font-ui text-[9px] font-medium uppercase tracking-wider text-white">
            Admin
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 font-ui text-sm transition-colors",
                  isActive
                    ? "bg-brand-navy text-white"
                    : "text-gray-600 hover:bg-gray-50 hover:text-brand-navy"
                )}
              >
                <link.icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-gray-100 p-3">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 font-ui text-sm text-gray-400 transition-colors hover:text-red-500">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}
