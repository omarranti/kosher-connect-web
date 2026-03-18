"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export function MarketingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-brand-sand/40 bg-brand-cream/70 shadow-card backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-[11px] bg-brand-navy shadow-sm">
            <svg className="h-5 w-5 fill-brand-gold-pale" viewBox="0 0 24 24">
              <path d="M12 2L9 9H2l5.5 4.5L5 21l7-5 7 5-2.5-7.5L22 9h-7z" />
            </svg>
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-brand-navy">
            Kosher Connect
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-ui text-sm font-medium text-brand-navy/50 transition-colors duration-200 hover:text-brand-navy"
            >
              {link.label}
            </a>
          ))}
          <a href="#waitlist" className="btn-burgundy px-5 py-2 text-xs">
            Join Waitlist
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="grid h-10 w-10 place-items-center rounded-brand-sm transition-colors hover:bg-brand-sand/30 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-brand-sand/30 bg-brand-cream/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-ui text-base font-medium text-brand-navy transition-colors hover:text-brand-burgundy"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="btn-burgundy mt-2 text-center text-xs"
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
