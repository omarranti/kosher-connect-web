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
      <div className="mt-8 flex items-center gap-2.5 justify-center md:justify-start">
        <CheckCircle2 className="h-5 w-5 text-brand-gold" strokeWidth={1.5} />
        <p className="font-ui text-sm text-brand-navy">
          You&apos;re on the list! We&apos;ll notify you at <b>{email}</b>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row md:mx-0"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        className="flex-1 rounded-pill border-[1.5px] border-brand-sand bg-white/80 px-5 py-3.5 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10"
      />
      <button
        type="submit"
        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-pill bg-gradient-to-r from-brand-gold to-brand-gold-light px-7 py-3.5 font-ui text-sm font-medium uppercase tracking-wider text-brand-navy shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/25 to-transparent" style={{ backgroundSize: "200% 100%" }} />
        <span className="relative">Get Early Access</span>
        <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
