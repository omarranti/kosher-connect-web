"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroEmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    const entry = { email, ts: new Date().toISOString(), source: "hero-signup" };
    const existing = JSON.parse(localStorage.getItem("kc_waitlist") || "[]");
    existing.push(entry);
    localStorage.setItem("kc_waitlist", JSON.stringify(existing));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-5 space-y-3 sm:mt-6">
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" strokeWidth={2} />
          <p className="font-ui text-sm text-brand-navy">
            You&apos;re on the list! We&apos;ll notify you at <b>{email}</b>.
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <a href="#features" className="btn-outline px-6 py-3 text-sm sm:px-8 sm:py-4">
            See What&apos;s Inside
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-5 flex max-w-md flex-col gap-2 sm:mt-6 sm:flex-row sm:gap-3 md:mx-0"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        className="flex-1 rounded-pill border-[1.5px] border-brand-sand bg-white/80 px-4 py-3 font-ui text-base text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10 sm:text-sm"
      />
      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill bg-brand-burgundy px-5 py-3 font-ui text-sm font-medium uppercase tracking-wider text-white shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-burgundy-light hover:shadow-lg sm:px-6"
      >
        <span>Get Early Access</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
