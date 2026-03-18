import Link from "next/link";
import { AdminEntryButton } from "@/components/marketing/admin-entry-button";

const footerLinks = {
  product: [
    { label: "Features", href: "/#features" as const },
    { label: "Pricing", href: "/#pricing" as const },
    { label: "Add Your Business", href: "/add-business" as const },
    { label: "Join Waitlist", href: "/#waitlist" as const },
  ],
  company: [
    { label: "About", href: "/about" as const },
    { label: "Contact", href: "/contact" as const },
  ],
  legal: [
    { label: "Terms of Use", href: "/terms" as const },
    { label: "Privacy Policy", href: "/privacy" as const },
  ],
};

export function MarketingFooter() {
  return (
    <footer className="relative border-t border-white/5 bg-brand-navy">
      {/* Decorative gold gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 pb-8 pt-12 sm:px-8 sm:pt-16">
        {/* Top section: brand + columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-[11px] bg-brand-gold/15">
                <svg className="h-5 w-5 fill-brand-gold" viewBox="0 0 24 24">
                  <path d="M12 2L9 9H2l5.5 4.5L5 21l7-5 7 5-2.5-7.5L22 9h-7z" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-brand-gold-pale">
                Kosher Connect
              </span>
            </div>
            <p className="mt-4 max-w-[240px] font-accent text-sm leading-relaxed text-white/35">
              Your Jewish community hub. From Shabbat to simchas — find your people, one tap away.
            </p>
            {/* Launch cities */}
            <div className="mt-4 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-brand-gold/40" />
              <p className="font-ui text-xs text-brand-gold/50">
                Launching in LA, NYC &amp; Miami
              </p>
            </div>
            {/* Email */}
            <a
              href="mailto:hello@kosherconnect.com"
              className="mt-3 inline-flex items-center gap-2 font-ui text-xs text-brand-gold/60 transition-colors hover:text-brand-gold"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              hello@kosherconnect.com
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-brand-gold/80">
              Product
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-brand-gold/80">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-brand-gold/80">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/[0.06] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="font-ui text-xs text-white/30 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span>
                &copy; {new Date().getFullYear()} Kosher Connect. Made with love for the community.
              </span>
              <AdminEntryButton variant="footer" />
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 rounded-pill bg-white/5 px-4 py-2 font-ui text-[11px] font-medium uppercase tracking-wide text-white/40 transition-all hover:bg-white/10 hover:text-white/60"
              aria-label="Back to top"
            >
              Back to top
              <svg className="h-3 w-3 -rotate-90 transition-transform group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
