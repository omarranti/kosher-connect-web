import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-brand-gold-pale/40 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="section-eyebrow mb-4">Our Story</p>
        <h1 className="section-title mb-6">
          Built for the <span className="text-brand-gold">Community,</span>
          <br />
          by the Community
        </h1>
        <p className="mx-auto max-w-xl font-accent text-lg leading-relaxed text-brand-navy/60">
          Kosher Connect was born from a simple idea — that Jewish life should be easier to navigate and more joyful to share. We&apos;re building the go-to hub for kosher dining, community events, and everyday Jewish moments.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { value: "200+", label: "Waitlist members" },
            { value: "4", label: "Cities at launch" },
            { value: "1", label: "Mission: connection" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-brand border border-brand-sand bg-white p-6 shadow-card">
              <p className="font-display text-3xl font-bold text-brand-burgundy">{stat.value}</p>
              <p className="mt-1 font-ui text-xs font-medium text-brand-navy/50">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/#waitlist" className="btn-burgundy px-8 py-3.5 text-sm">
            Join the Waitlist
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
