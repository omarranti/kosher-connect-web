"use client";

import { useState, type FormEvent } from "react";

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
    <section id="waitlist" className="px-6 pb-28 pt-10">
      <div className="relative mx-auto max-w-xl overflow-hidden rounded-brand border border-brand-sand bg-white p-8 shadow-card sm:p-10">
        {/* Top gradient accent */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-brand-gold via-brand-burgundy to-brand-navy" />

        {!submitted ? (
          <>
            <p className="section-eyebrow mb-2 text-left">Join the Movement</p>
            <h2 className="font-display text-2xl font-bold text-brand-gold sm:text-3xl">
              Get Early Access to
              <br />
              Kosher Connect
            </h2>
            <p className="mt-2 font-accent text-sm leading-relaxed text-brand-navy/50">
              Be among the first to experience the app. We&apos;ll send you a TestFlight invite when your spot opens up.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              {/* Name row */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-ui text-xs font-semibold text-brand-navy">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Rachel"
                    className="w-full rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-ui text-xs font-semibold text-brand-navy">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Cohen"
                    className="w-full rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block font-ui text-xs font-semibold text-brand-navy">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="rachel@example.com"
                  className="w-full rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10"
                />
              </div>

              <div>
                <label className="mb-1 block font-ui text-xs font-semibold text-brand-navy">
                  City <span className="font-normal text-brand-navy/40">(optional)</span>
                </label>
                <input
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
                      className={`flex items-center gap-1.5 rounded-brand-sm border-[1.5px] px-3 py-2 font-ui text-xs font-semibold transition-all ${
                        selected.has(i.value)
                          ? 'border-brand-gold bg-brand-gold-pale text-brand-gold'
                          : 'border-brand-sand bg-white text-brand-navy hover:border-brand-gold'
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
                <label className="mb-1 block font-ui text-xs font-semibold text-brand-navy">
                  Anything else? <span className="font-normal text-brand-navy/40">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us what would make this app perfect for you..."
                  className="w-full resize-y rounded-brand-sm border-[1.5px] border-brand-sand bg-brand-parchment px-4 py-3 font-ui text-sm text-brand-navy outline-none transition-all placeholder:text-brand-sand focus:border-brand-gold focus:bg-white focus:ring-2 focus:ring-brand-gold/10"
                />
              </div>

              <button type="submit" className="btn-burgundy w-full py-4 text-base">
                Try 7 Days Free ✡
              </button>

              <p className="text-center font-ui text-[11px] text-brand-navy/30">
                No spam, ever. Just community vibes and your early access invite.
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto mb-5 grid h-[72px] w-[72px] place-items-center rounded-full bg-brand-gold-pale text-3xl">
              🕯️
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-gold">You&apos;re In!</h3>
            <p className="mt-3 font-accent text-sm leading-relaxed text-brand-navy/50">
              Welcome to the Kosher Connect community.
              <br />
              We&apos;ll be in touch soon with your early access invite.
              <br />
              <b className="text-brand-navy">Let&apos;s welcome Shabbat together.</b>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
