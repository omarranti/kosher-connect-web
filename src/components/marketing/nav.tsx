"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function MarketingNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/10 bg-brand-cream/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* TODO: Replace with SVG logo component */}
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-2xl font-bold tracking-wide text-brand-navy">
              KOSHER
            </span>
            <span className="font-accent text-2xl font-semibold italic text-brand-gold">
              Connect
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-ui text-sm font-medium tracking-wide text-brand-navy/70 transition-colors hover:text-brand-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/admin" className="btn-outline px-5 py-2 text-xs">
            Admin
          </Link>
          <Link href="/download" className="btn-burgundy px-5 py-2 text-xs">
            Download App
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-brand-gold/10 bg-brand-cream px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-ui text-base font-medium text-brand-navy"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/admin" className="btn-outline text-center text-xs">
                Admin
              </Link>
              <Link
                href="/download"
                className="btn-burgundy text-center text-xs"
              >
                Download App
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
