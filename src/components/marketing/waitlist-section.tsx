"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, ArrowRight, Sparkles, Shield } from "lucide-react";

const interests = [
  { value: 'hotspots', label: 'Kosher Hotspots' },
  { value: 'events', label: 'Events & Calendar' },
  { value: 'simcha', label: 'Simcha Planning' },
  { value: 'nudges', label: 'Daily Nudges' },
  { value: 'scanner', label: 'Kosher Scanner' },
  { value: 'community', label: 'Community' },
];

export function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(value: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: fd.get('firstName'),
      lastName: fd.get('lastName'),
      email: fd.get('email'),
      city: fd.get('city'),
      interests: Array.from(selected),
      message: fd.get('message'),
      ts: new Date().toISOString(),
    };
    // Store locally for now
    const existing = JSON.parse(localStorage.getItem('kc_waitlist') || '[]');
    existing.push(data);
    localStorage.setItem('kc_waitlist', JSON.stringify(existing));
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="relative overflow-hidden bg-brand-navy px-6 py-24 sm:py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-brand-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-burgundy/5 blur-[100px]" />

      <div className="relative mx-auto max-w-xl">
        <div className="relative overflow-hidden rounded-brand border border-white/10 bg-white shadow-card-hover sm:p-0">
          {/* Top gradient accent */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-brand-gold via-brand-burgundy to-brand-navy" />

          <div className="p-8 sm:p-10">
            {!submitted ? (
              <>
                <p className="section-eyebrow mb-2 text-left">Join the Movement</p>
                <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
                  Get Early Access to
                  <br />
                  <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">Kosher Connect</span>
                </h2>
                <p className="mt-3 font-accent text-sm leading-relaxed text-brand-navy/50 sm:text-base">
                  Be among the first to experience the app. We&apos;ll send you a TestFlight invite when your spot opens up.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  {/* Name row */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="waitlist-firstName" className="mb-1.5 block font-ui text-xs font-semibold text-brand-navy">First Name</label>
                      <input
                        id="waitlist-firstName"
                        type="text"
                        name="firstName"
                        required
                        placeholder="Rachel"
                        className="w-full rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10"
                      />
                    </div>
                    <div>
                      <label htmlFor="waitlist-lastName" className="mb-1.5 block font-ui text-xs font-semibold text-brand-navy">Last Name</label>
                      <input
                        id="waitlist-lastName"
                        type="text"
                        name="lastName"
                        required
                        placeholder="Cohen"
                        className="w-full rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="waitlist-email" className="mb-1.5 block font-ui text-xs font-semibold text-brand-navy">Email Address</label>
                    <input
                      id="waitlist-email"
                      type="email"
                      name="email"
                      required
                      placeholder="rachel@example.com"
                      className="w-full rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="waitlist-city" className="mb-1.5 block font-ui text-xs font-semibold text-brand-navy">
                      City <span className="font-normal text-brand-navy/40">(optional)</span>
                    </label>
                    <input
                      id="waitlist-city"
                      type="text"
                      name="city"
                      placeholder="Los Angeles"
                      className="w-full rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10"
                    />
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="mb-2 block font-ui text-xs font-semibold text-brand-navy">
                      What excites you most?{' '}
                      <span className="font-normal text-brand-navy/40">(pick all that apply)</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((i) => (
                        <button
                          key={i.value}
                          type="button"
                          onClick={() => toggle(i.value)}
                          className={`flex items-center gap-1.5 rounded-brand-sm border-[1.5px] px-3 py-2 font-ui text-xs font-semibold transition-all duration-200 ${
                            selected.has(i.value)
                              ? 'border-brand-gold bg-brand-gold-pale text-brand-gold'
                              : 'border-brand-sand bg-white text-brand-navy hover:border-brand-gold/50'
                          }`}
                        >
                          <span
                            className={`grid h-4 w-4 place-items-center rounded border-2 transition-all ${
                              selected.has(i.value)
                                ? 'border-brand-gold bg-brand-gold'
                                : 'border-brand-sand'
                            }`}
                          >
                            {selected.has(i.value) && (
                              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </span>
                          {i.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="waitlist-message" className="mb-1.5 block font-ui text-xs font-semibold text-brand-navy">
                      Anything else? <span className="font-normal text-brand-navy/40">(optional)</span>
                    </label>
                    <textarea
                      id="waitlist-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us what would make this app perfect for you..."
                      className="w-full resize-y rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-pill bg-brand-burgundy py-4 font-ui text-base font-medium uppercase tracking-wider text-white shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-burgundy-light hover:shadow-lg"
                  >
                    <span className="relative inline-flex items-center gap-2">
                      Try 7 Days Free
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </button>

                  {/* Trust indicators */}
                  <div className="flex items-center justify-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 font-ui text-[11px] text-brand-navy/35">
                      <Shield className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span>No spam, ever</span>
                    </div>
                    <span className="h-3 w-px bg-brand-sand/60" />
                    <p className="font-ui text-[11px] text-brand-navy/35">
                      Community vibes only
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-10 text-center">
                <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-gold-pale to-brand-gold-pale/40">
                  <CheckCircle2 className="h-10 w-10 text-brand-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">You&apos;re In!</h3>
                <p className="mt-4 font-accent text-base leading-relaxed text-brand-navy/50">
                  Welcome to the Kosher Connect community.
                  <br />
                  We&apos;ll be in touch soon with your early access invite.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-pill bg-brand-gold-pale/40 px-5 py-2.5">
                  <Sparkles className="h-4 w-4 text-brand-gold" />
                  <span className="font-ui text-sm font-semibold text-brand-navy">Let&apos;s welcome Shabbat together.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
