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
    <section className="relative border-y border-brand-sand/50 bg-brand-parchment py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-6 text-center">
        {!submitted ? (
          <>
            <p className="font-ui text-xs font-light uppercase tracking-[0.2em] text-brand-gold">
              Be the First to Know
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-brand-navy sm:text-2xl">
              Get notified when we launch
            </h3>
            <p className="mt-2 font-accent text-sm leading-relaxed text-brand-navy/40">
              Drop your email and we&apos;ll let you know the moment Kosher Connect is live.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-pill border-[1.5px] border-brand-sand bg-white px-5 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/10"
              />
              <button
                type="submit"
                className="btn-burgundy inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-3"
              >
                Notify Me
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-3 font-ui text-[11px] text-brand-navy/30">
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
