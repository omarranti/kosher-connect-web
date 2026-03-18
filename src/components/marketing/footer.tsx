import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Features", href: "/#features" as const },
    { label: "Pricing", href: "/#pricing" as const },
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
    <footer className="border-t border-brand-sand bg-brand-navy">
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-14">
        {/* Top section: brand + columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-[11px] bg-brand-gold/20">
                <svg className="h-5 w-5 fill-brand-gold" viewBox="0 0 24 24">
                  <path d="M12 2L9 9H2l5.5 4.5L5 21l7-5 7 5-2.5-7.5L22 9h-7z" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-brand-gold-pale">
                Kosher Connect
              </span>
            </div>
            <p className="mt-3 max-w-[240px] font-accent text-sm leading-relaxed text-white/50">
              Your Jewish community hub. From Shabbat to simchas — find your people, one tap away.
            </p>
            {/* Launch cities */}
            <p className="mt-3 font-ui text-xs text-brand-gold/60">
              Launching first in LA, NYC &amp; Miami
            </p>
            {/* Email */}
            <a
              href="mailto:hello@kosherconnect.com"
              className="mt-3 inline-flex items-center gap-2 font-ui text-xs text-brand-gold/80 transition-colors hover:text-brand-gold"
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
            <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Product
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-ui text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="font-ui text-xs text-white/40">
              &copy; {new Date().getFullYear()} Kosher Connect. Made with love for the community.
            </p>
            <a
              href="#"
              className="btn-ghost px-4 py-1.5 text-[11px]"
              aria-label="Back to top"
            >
              Back to top
              <svg className="ml-1 inline-block h-3 w-3 -rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
