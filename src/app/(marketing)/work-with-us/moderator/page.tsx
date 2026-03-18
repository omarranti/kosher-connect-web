"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function ModeratorApplicationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name"),
      email: fd.get("email"),
      city: fd.get("city"),
      experience: fd.get("experience"),
      why: fd.get("why"),
      ts: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("kc_moderator_apps") || "[]");
    existing.push(data);
    localStorage.setItem("kc_moderator_apps", JSON.stringify(existing));

    setLoading(false);
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-base text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10 sm:text-sm";
  const labelClass = "mb-1.5 block font-ui text-xs font-semibold text-brand-navy";

  return (
    <section className="relative overflow-hidden bg-brand-cream px-5 py-20 sm:px-8 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-brand-burgundy/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-gold/5 blur-[100px]" />

      <div className="relative mx-auto max-w-xl">
        <div className="relative overflow-hidden rounded-brand border border-brand-sand/50 bg-white shadow-card-hover">
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-brand-burgundy via-brand-gold to-brand-navy" />

          <div className="p-5 sm:p-8 md:p-10">
            {!submitted ? (
              <>
                <Link
                  href="/work-with-us"
                  className="mb-4 inline-flex items-center gap-1 font-ui text-xs text-brand-gold hover:text-brand-navy transition-colors"
                >
                  &larr; Back
                </Link>

                <div className="mb-2 flex items-center gap-2">
                  <div className="grid h-10 w-10 place-items-center rounded-brand-sm bg-brand-burgundy/10">
                    <ShieldCheck className="h-5 w-5 text-brand-burgundy" />
                  </div>
                  <p className="section-eyebrow text-left">Community Team</p>
                </div>
                <h1 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
                  Apply as a{" "}
                  <span className="bg-gradient-to-r from-brand-burgundy to-brand-burgundy-light bg-clip-text text-transparent">
                    Moderator
                  </span>
                </h1>
                <p className="mt-3 font-accent text-sm leading-relaxed text-brand-navy/50 sm:text-base">
                  Help us build the most trusted kosher directory. Add vendors, verify listings, and shape the community.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="mod-name" className={labelClass}>
                        Full Name <span className="text-brand-burgundy">*</span>
                      </label>
                      <input id="mod-name" type="text" name="name" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="mod-email" className={labelClass}>
                        Email <span className="text-brand-burgundy">*</span>
                      </label>
                      <input id="mod-email" type="email" name="email" required placeholder="you@email.com" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mod-city" className={labelClass}>
                      City <span className="text-brand-burgundy">*</span>
                    </label>
                    <input id="mod-city" type="text" name="city" required placeholder="Los Angeles" className={inputClass} />
                  </div>

                  <div>
                    <label htmlFor="mod-experience" className={labelClass}>
                      Relevant Experience <span className="font-normal text-brand-navy/40">(optional)</span>
                    </label>
                    <textarea
                      id="mod-experience"
                      name="experience"
                      rows={3}
                      placeholder="Community management, content moderation, local food scene knowledge..."
                      className={inputClass + " resize-y"}
                    />
                  </div>

                  <div>
                    <label htmlFor="mod-why" className={labelClass}>
                      Why do you want to join? <span className="text-brand-burgundy">*</span>
                    </label>
                    <textarea
                      id="mod-why"
                      name="why"
                      rows={3}
                      required
                      placeholder="Tell us what excites you about Kosher Connect..."
                      className={inputClass + " resize-y"}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full overflow-hidden rounded-pill bg-brand-burgundy py-3.5 font-ui text-sm font-medium uppercase tracking-wider text-white shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-burgundy-light hover:shadow-lg disabled:opacity-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      {loading ? "Submitting..." : "Submit Application"}
                      {!loading && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
                    </span>
                  </button>
                </form>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-burgundy/10 to-brand-burgundy/5">
                  <CheckCircle2 className="h-10 w-10 text-brand-burgundy" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
                  Application Received!
                </h2>
                <p className="mt-4 font-accent text-base leading-relaxed text-brand-navy/50">
                  Thank you for your interest in joining our team.
                  <br />
                  We&apos;ll review your application and be in touch soon.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-pill bg-brand-burgundy/5 px-5 py-2.5">
                  <Sparkles className="h-4 w-4 text-brand-burgundy" />
                  <span className="font-ui text-sm font-semibold text-brand-navy">
                    Welcome to the mission.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
