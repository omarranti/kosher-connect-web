import Link from "next/link";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Download", href: "/download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="bg-brand-navy">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid min-w-0 grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-baseline gap-1.5">
              <span className="font-display text-xl font-bold tracking-wide text-white">
                KOSHER
              </span>
              <span className="font-accent text-xl font-semibold italic text-brand-gold">
                Connect
              </span>
            </div>
            <p className="font-accent text-sm italic text-white/40 leading-relaxed">
              Your Jewish Community Hub. From Shabbat to simchas, we connect you
              to what matters.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-ui text-xs font-medium uppercase tracking-[0.2em] text-brand-gold">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href as any}
                      className="font-ui text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="font-ui text-xs tracking-wide text-white/25">
            &copy; {new Date().getFullYear()} Kosher Connect. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
