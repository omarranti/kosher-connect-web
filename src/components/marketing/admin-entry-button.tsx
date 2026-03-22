"use client";

import { useState } from "react";
import { AdminPinForm } from "@/components/admin/admin-pin-form";

type Props = {
  variant?: "nav" | "footer";
};

export function AdminEntryButton({ variant = "nav" }: Props) {
  const [open, setOpen] = useState(false);

  const btnClass =
    variant === "footer"
      ? "font-ui text-xs text-white/35 hover:text-brand-gold/80 transition-colors underline-offset-2 hover:underline"
      : "rounded-pill border border-brand-navy/20 bg-white/80 px-3 py-1.5 font-ui text-xs font-medium text-brand-navy shadow-sm hover:border-brand-gold hover:bg-brand-cream transition-colors";

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={btnClass}>
        Admin
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="admin-pin-title"
        >
          <div className="relative w-full max-w-sm rounded-brand border border-gray-100 bg-white p-8 shadow-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 font-ui text-sm text-gray-400 hover:text-brand-navy"
              aria-label="Close"
            >
              ✕
            </button>
            <h2
              id="admin-pin-title"
              className="font-display text-xl font-bold text-brand-navy text-center"
            >
              Admin
            </h2>
            <p className="mt-1 text-center font-accent text-sm italic text-gray-500">
              Enter PIN to continue
            </p>
            <div className="mt-6">
              <AdminPinForm
                onSuccess={() => setOpen(false)}
                redirectTo="/admin/dashboard"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
