"use client";

import { Bell, Search } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      {/* Search */}
      <div className="relative max-w-md flex-1">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search listings, users, events..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 font-ui text-sm text-gray-700 outline-none transition-colors focus:border-brand-gold focus:bg-white"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="relative rounded-xl p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-brand-navy">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-burgundy" />
        </button>
        <div className="h-8 w-8 rounded-full bg-brand-gold/20 flex items-center justify-center">
          <span className="font-ui text-xs font-semibold text-brand-navy">
            KC
          </span>
        </div>
      </div>
    </header>
  );
}
