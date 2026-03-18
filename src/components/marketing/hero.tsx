export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-cream py-24 sm:py-32 md:py-0">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-48 h-[500px] w-[500px] rounded-full bg-brand-gold-pale/60 blur-[100px] animate-soft-breathe" />
        <div className="absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-brand-burgundy/5 blur-[100px] animate-soft-breathe" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/3 top-1/3 h-[250px] w-[250px] rounded-full bg-brand-gold/10 blur-[80px] animate-soft-breathe" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative mx-auto grid min-w-0 max-w-7xl items-center gap-12 px-6 md:min-h-screen md:grid-cols-2 md:gap-10 md:px-10">
        {/* Left — Copy */}
        <div className="order-2 text-center md:order-1 md:text-left">
          {/* Confetti accent */}
          <div className="mb-5 flex justify-center gap-2 md:justify-start">
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className={`block rounded-sm ${i % 2 === 0 ? 'h-[3px] w-[18px] bg-brand-gold' : 'h-[3px] w-[9px] bg-brand-sand'}`}
                style={{ transform: `rotate(${[-10, 22, 5, 38, -18, 30, 12, -25][i]}deg)` }}
              />
            ))}
          </div>

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-pill border border-brand-sand bg-white/90 px-4 py-1.5 shadow-card">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-burgundy" />
            <span className="font-ui text-xs font-medium text-brand-navy/70">Coming soon to iOS</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-brand-gold">What&apos;s up,</span>
            <br />
            <em className="text-brand-burgundy">friends?</em>
          </h1>

          <p className="mx-auto mt-5 max-w-md font-accent text-base leading-relaxed text-brand-navy/50 sm:text-lg md:mx-0">
            Here&apos;s what&apos;s popping in your neighborhood. Kosher spots, events, daily nudges, and your people — one tap away.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#waitlist" className="btn-gold inline-flex items-center gap-2">
              Try 7 Days Free
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#features" className="btn-outline">
              See What&apos;s Inside
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            <div className="flex -space-x-1.5">
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-brand-cream bg-brand-navy font-ui text-[11px] font-bold text-brand-gold-pale">R</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-brand-cream bg-brand-burgundy/10 font-ui text-[11px] font-bold text-brand-burgundy">D</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-brand-cream bg-brand-gold-pale font-ui text-[11px] font-bold text-brand-gold">M</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-brand-cream bg-brand-gold font-ui text-[9px] font-bold text-white">+6</span>
            </div>
            <p className="font-ui text-sm text-brand-navy/50">
              <b className="text-brand-navy">200+</b> already on the waitlist
            </p>
          </div>
        </div>

        {/* Right — Phone mockup */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="animate-gentle-float">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="w-[240px] overflow-hidden rounded-[36px] border-[3px] border-brand-sand bg-white shadow-card-hover sm:w-[280px]">
      {/* Header */}
      <div className="bg-gradient-to-b from-brand-cream to-brand-parchment px-5 pb-4 pt-10 text-center">
        <h3 className="font-display text-lg font-bold text-brand-gold">What&apos;s up, friends?</h3>
        <p className="font-ui text-[10px] font-semibold text-brand-navy">Here&apos;s what&apos;s popping in your neighborhood.</p>
      </div>

      {/* Body */}
      <div className="bg-brand-cream/50 px-4 py-3">
        {/* Mood pills */}
        <div className="mb-3 grid grid-cols-2 gap-1.5">
          {[
            { emoji: '🌧', label: 'Rough Day', on: false },
            { emoji: '💨', label: 'Feeling Off', on: false },
            { emoji: '☀️', label: 'Pretty Good', on: false },
            { emoji: '✨', label: 'So Great ✓', on: true },
          ].map((m) => (
            <div
              key={m.label}
              className={`flex items-center gap-1 rounded-xl border px-2.5 py-2 font-ui text-[10px] font-semibold ${
                m.on
                  ? 'border-brand-gold bg-brand-gold text-white'
                  : 'border-brand-sand bg-white text-brand-navy'
              }`}
            >
              <span className="text-xs">{m.emoji}</span> {m.label}
            </div>
          ))}
        </div>

        <p className="mb-2 font-ui text-[10px] font-bold text-brand-navy">Events You&apos;ll Wanna Hit</p>

        {/* Event cards */}
        {[
          { emoji: '🕯️', title: "Shabbat Dinner Rachel's", meta: 'Friday · 7:30 PM · 0.8 mi' },
          { emoji: '🍞', title: 'Challah Bake Workshop', meta: 'Sunday · 2:00 PM · 1.2 mi' },
        ].map((e) => (
          <div key={e.title} className="mb-2 flex gap-2 rounded-xl border border-brand-sand bg-white p-2">
            <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-brand-parchment text-sm">{e.emoji}</div>
            <div>
              <p className="font-ui text-[10px] font-bold text-brand-navy">{e.title}</p>
              <p className="font-ui text-[8px] text-brand-navy/40">{e.meta}</p>
            </div>
          </div>
        ))}

        <p className="mb-1.5 mt-3 font-ui text-[10px] font-bold text-brand-navy">Today&apos;s Torah Insight</p>
        <div className="rounded-lg border border-brand-sand bg-brand-parchment p-2">
          <p className="font-accent text-[9px] italic leading-snug text-brand-navy/60">
            Even an ordinary meal can become holy when it gathers people with intention.
          </p>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex items-end border-t border-brand-sand/50 bg-white/95 px-1 pb-2 pt-1.5">
        {[
          { label: 'Home', active: true, icon: 'M3 12l9-9 9 9v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z' },
          { label: 'Hotspots', active: false, icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z' },
        ].map((t) => (
          <div key={t.label} className={`flex flex-1 flex-col items-center gap-0.5 font-ui text-[7px] font-semibold ${t.active ? 'text-brand-navy' : 'text-brand-sand'}`}>
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d={t.icon} /></svg>
            {t.label}
          </div>
        ))}
        {/* Center tab */}
        <div className="-mt-3 flex flex-1 flex-col items-center">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-gold font-ui text-[6px] font-bold text-brand-navy shadow-gold">
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" /></svg>
            Daily
          </div>
        </div>
        {[
          { label: 'Events', icon: 'M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z' },
          { label: 'Profile', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
        ].map((t) => (
          <div key={t.label} className="flex flex-1 flex-col items-center gap-0.5 font-ui text-[7px] font-semibold text-brand-sand">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d={t.icon} /></svg>
            {t.label}
          </div>
        ))}
      </div>
    </div>
  );
}
