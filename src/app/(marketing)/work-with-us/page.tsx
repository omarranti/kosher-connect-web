import Link from "next/link";
import type { Metadata } from "next";
import { Store, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work With Us",
  description: "Join Kosher Connect as a vendor or help moderate and grow our listings.",
};

const paths = [
  {
    Icon: Store,
    iconBg: "bg-brand-gold-pale",
    iconColor: "text-brand-gold",
    title: "List Your Business",
    subtitle: "For vendors & business owners",
    description:
      "Get discovered by thousands of kosher consumers. Add your restaurant, bakery, catering service, or event venue to Kosher Connect. Our team reviews every submission within 48 hours.",
    features: [
      "Free to list",
      "Reach kosher consumers in your city",
      "Manage your listing anytime",
      "Get reviews and ratings",
    ],
    cta: "Apply as a Vendor",
    href: "/add-business" as const,
    accent: "from-brand-gold to-brand-gold-light",
    border: "border-brand-gold/30 hover:border-brand-gold",
  },
  {
    Icon: ShieldCheck,
    iconBg: "bg-brand-burgundy/10",
    iconColor: "text-brand-burgundy",
    title: "Join Our Team",
    subtitle: "For moderators & community builders",
    description:
      "Help us grow and maintain the most trusted kosher directory. Add new vendors, verify listings, moderate reviews, and ensure quality across the platform.",
    features: [
      "Add & verify vendor listings",
      "Moderate reviews and content",
      "Help expand to new cities",
      "Shape the community experience",
    ],
    cta: "Apply as a Moderator",
    href: "/work-with-us/moderator" as const,
    accent: "from-brand-burgundy to-brand-burgundy-light",
    border: "border-brand-burgundy/30 hover:border-brand-burgundy",
  },
] as const;

export default function WorkWithUsPage() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-5 py-20 sm:px-8 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-brand-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-burgundy/5 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <p className="section-eyebrow mb-3">Join Us</p>
          <h1 className="font-display text-3xl font-bold text-brand-navy sm:text-4xl md:text-5xl">
            Work With{" "}
            <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">
              Kosher Connect
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg font-accent text-sm leading-relaxed text-brand-navy/50 sm:text-base">
            Whether you own a business or want to help build the community, there&apos;s a place for you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {paths.map((path) => (
            <Link
              key={path.title}
              href={path.href}
              className={`group relative rounded-brand border-2 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-8 ${path.border}`}
            >
              <div className="absolute left-0 right-0 top-0 h-1 rounded-t-brand bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />

              <div className={`mb-4 grid h-12 w-12 place-items-center rounded-brand-sm ${path.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                <path.Icon className={`h-6 w-6 ${path.iconColor}`} strokeWidth={1.8} />
              </div>

              <p className="font-ui text-[11px] font-medium uppercase tracking-wider text-brand-navy/40">
                {path.subtitle}
              </p>
              <h2 className="mt-1 font-display text-xl font-bold text-brand-navy sm:text-2xl">
                {path.title}
              </h2>
              <p className="mt-3 font-accent text-sm leading-relaxed text-brand-navy/50">
                {path.description}
              </p>

              <ul className="mt-5 space-y-2">
                {path.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={`grid h-5 w-5 flex-shrink-0 place-items-center rounded-full ${path.iconBg}`}>
                      <svg className={`h-3 w-3 ${path.iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="font-ui text-xs text-brand-navy/60">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 inline-flex items-center gap-2 font-ui text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-burgundy">
                {path.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
