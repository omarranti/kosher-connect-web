import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download",
};

export default function DownloadPage() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-brand-gold-pale/40 blur-[100px]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-brand-navy">
          <svg className="h-8 w-8 text-brand-gold-pale" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 15V3m0 12l-4-4m4 4l4-4" />
            <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
          </svg>
        </div>

        <p className="section-eyebrow mb-4">Download</p>
        <h1 className="section-title mb-6">
          Coming Soon to the
          <br />
          <span className="text-brand-gold">App Store</span>
        </h1>
        <p className="mx-auto max-w-md font-accent text-lg leading-relaxed text-brand-navy/60">
          We&apos;re putting the finishing touches on Kosher Connect. Join the waitlist and be the first to download when we launch.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-pill border border-brand-sand bg-white px-5 py-2.5 shadow-card">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand-burgundy" />
          <span className="font-ui text-sm font-medium text-brand-navy">iOS beta coming soon via TestFlight</span>
        </div>

        <div className="mt-8">
          <Link href="/#waitlist" className="btn-burgundy px-8 py-3.5 text-sm">
            Join the Waitlist
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
