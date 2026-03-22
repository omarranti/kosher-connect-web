"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    const entry = { email, ts: new Date().toISOString(), source: "email-signup" };
    const existing = JSON.parse(localStorage.getItem("kc_waitlist") || "[]");
    existing.push(entry);
    localStorage.setItem("kc_waitlist", JSON.stringify(existing));
    setSubmitted(true);
  }

  return (
    <section id="signup" className="relative border-y border-brand-sand/40 bg-brand-parchment py-16 sm:py-20">
      {/* Decorative gradient lines */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="mx-auto max-w-2xl px-6 text-center">
        {!submitted ? (
          <>
            <p className="font-ui text-xs font-light uppercase tracking-[0.2em] text-brand-gold">
              Be the First to Know
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-brand-navy sm:text-3xl">
              Get notified when we launch
            </h3>
            <p className="mt-3 font-accent text-sm leading-relaxed text-brand-navy/40 sm:text-base">
              Drop your email and we&apos;ll let you know the moment Kosher Connect is live.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 rounded-pill border-[1.5px] border-brand-sand bg-white px-5 py-3.5 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/10"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill bg-brand-burgundy px-6 py-3.5 font-ui text-sm font-medium uppercase tracking-wider text-white shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-burgundy-light"
              >
                Notify Me
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </form>

            <p className="mt-4 font-ui text-[11px] text-brand-navy/30">
              No spam. Unsubscribe anytime.
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-brand-gold" strokeWidth={1.5} />
            <p className="font-display text-lg font-bold text-brand-navy">
              You&apos;re on the list!
            </p>
            <p className="font-accent text-sm text-brand-navy/50">
              We&apos;ll notify you at <b className="text-brand-navy">{email}</b> when we launch.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
