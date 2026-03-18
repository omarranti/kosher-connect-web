import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-brand-burgundy/5 blur-[100px]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="section-eyebrow mb-4">Get in Touch</p>
        <h1 className="section-title mb-6">
          We&apos;d Love to
          <br />
          <span className="text-brand-gold">Hear From You</span>
        </h1>
        <p className="mx-auto max-w-md font-accent text-lg leading-relaxed text-brand-navy/60">
          Have questions, feedback, or partnership ideas? We&apos;re all ears. Reach out and let&apos;s talk.
        </p>

        <div className="mx-auto mt-10 max-w-sm rounded-brand border border-brand-sand bg-white p-8 shadow-card">
          <div className="flex flex-col items-center gap-5">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-gold-pale">
              <svg className="h-6 w-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <p className="font-ui text-sm font-semibold text-brand-navy">Email us at</p>
              <a href="mailto:hello@kosherconnect.com" className="font-accent text-base text-brand-burgundy underline-offset-2 hover:underline">
                hello@kosherconnect.com
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 font-ui text-xs text-brand-navy/50">
          We typically respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
