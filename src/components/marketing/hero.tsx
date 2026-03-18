import { HeroEmailSignup } from "./hero-email-signup";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-brand-cream py-24 sm:py-32 md:py-0">
      {/* Background orbs — layered depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-48 h-[600px] w-[600px] rounded-full bg-brand-gold-pale/50 blur-[120px] animate-soft-breathe" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-burgundy/5 blur-[120px] animate-soft-breathe" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-brand-gold/8 blur-[100px] animate-soft-breathe" style={{ animationDelay: '4s' }} />
        <div className="absolute right-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-brand-navy/[0.02] blur-[80px]" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 0.5px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto grid min-w-0 max-w-7xl items-center gap-12 px-6 md:min-h-screen md:grid-cols-2 md:gap-16 md:px-10">
        {/* Left — Copy */}
        <div className="order-2 text-center md:order-1 md:text-left">
          {/* Decorative accent line */}
          <div className="mb-8 flex justify-center gap-1.5 md:justify-start">
            <span className="h-[2px] w-8 rounded-full bg-brand-gold" />
            <span className="h-[2px] w-4 rounded-full bg-brand-gold/40" />
            <span className="h-[2px] w-2 rounded-full bg-brand-gold/20" />
          </div>

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-pill border border-brand-sand bg-white/80 px-5 py-2.5 shadow-card backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-burgundy/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-burgundy" />
            </span>
            <span className="font-ui text-xs font-medium tracking-wide text-brand-navy/70">Coming soon to iOS</span>
          </div>

          <h1 className="font-display text-[2.75rem] font-bold leading-[1.04] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            <span className="text-brand-navy">What&apos;s up,</span>
            <br />
            <span className="bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold bg-clip-text text-transparent">friends?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md font-accent text-base leading-relaxed text-brand-navy/50 sm:text-lg md:mx-0 md:text-xl">
            Here&apos;s what&apos;s popping in your neighborhood. Kosher spots, events, daily nudges, and your people — one tap away.
          </p>

          <HeroEmailSignup />

          {/* Social proof */}
          <div className="mt-10 flex items-center justify-center gap-3 md:justify-start">
            <div className="flex -space-x-2.5">
              {[
                { letter: 'R', bg: 'bg-brand-navy', text: 'text-brand-gold-pale' },
                { letter: 'D', bg: 'bg-brand-burgundy/10', text: 'text-brand-burgundy' },
                { letter: 'M', bg: 'bg-brand-gold-pale', text: 'text-brand-gold' },
                { letter: '+6', bg: 'bg-brand-gold', text: 'text-white' },
              ].map((a) => (
                <span
                  key={a.letter}
                  className={`grid h-9 w-9 place-items-center rounded-full border-[2.5px] border-brand-cream ${a.bg} font-ui text-[11px] font-bold ${a.text} shadow-sm`}
                >
                  {a.letter}
                </span>
              ))}
            </div>
            <div>
              <p className="font-ui text-sm font-semibold text-brand-navy">200+ on the waitlist</p>
              <p className="font-ui text-[11px] text-brand-navy/40">Join the community</p>
            </div>
          </div>
        </div>

        {/* Right — Phone mockup */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative animate-gentle-float">
            {/* Glow behind phone */}
            <div className="absolute -inset-10 rounded-[48px] bg-gradient-to-b from-brand-gold/20 via-brand-gold-pale/10 to-transparent blur-3xl animate-glow-pulse" />
            {/* Rotating ring accent */}
            <div className="absolute -inset-4 animate-spin-slow rounded-[48px] bg-gradient-conic from-brand-gold/10 via-transparent to-brand-gold/10 opacity-50 blur-xl" style={{ background: 'conic-gradient(from 0deg, rgba(197,165,90,0.1), transparent, rgba(197,165,90,0.1))' }} />
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="block h-[40px] w-full sm:h-[60px]">
          <path d="M0 60V30C240 5 480 0 720 15C960 30 1200 45 1440 30V60H0Z" fill="#F8F0E3" />
        </svg>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[260px] overflow-hidden rounded-[40px] border-[3px] border-brand-sand/60 bg-white shadow-card-hover sm:w-[300px]">
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-brand-navy/5" />

      {/* Header */}
      <div className="bg-gradient-to-b from-brand-cream to-brand-parchment px-5 pb-5 pt-12 text-center">
        <h3 className="font-display text-lg font-bold text-brand-navy">What&apos;s up, friends?</h3>
        <p className="mt-0.5 font-ui text-[10px] font-semibold text-brand-navy/50">Here&apos;s what&apos;s popping in your neighborhood.</p>
      </div>

      {/* Body */}
      <div className="bg-brand-cream/40 px-4 py-3">
        {/* Mood pills */}
        <div className="mb-3 grid grid-cols-2 gap-1.5">
          {[
            { icon: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7z', label: 'Rough Day', on: false },
            { icon: 'M17.7 7.7a7.5 7.5 0 1 0 0 10.6M9 12h12', label: 'Feeling Off', on: false },
            { icon: 'M12 2v4m0 12v4m-7.07-3.93l2.83-2.83m8.48-8.48l2.83-2.83M2 12h4m12 0h4m-3.93 7.07l-2.83-2.83M7.76 7.76L4.93 4.93', label: 'Pretty Good', on: false },
            { icon: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .963L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z', label: 'So Great', on: true },
          ].map((m) => (
            <div
              key={m.label}
              className={`flex items-center gap-1 rounded-xl border px-2.5 py-2 font-ui text-[10px] font-semibold transition-colors ${
                m.on
                  ? 'border-brand-gold bg-brand-gold text-white shadow-sm'
                  : 'border-brand-sand bg-white text-brand-navy/70'
              }`}
            >
              <svg className="h-3 w-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={m.icon} /></svg>
              {m.label}
              {m.on && <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
            </div>
          ))}
        </div>

        <p className="mb-2 font-ui text-[10px] font-bold text-brand-navy">Events You&apos;ll Wanna Hit</p>

        {/* Event cards */}
        {[
          { icon: 'M12 2c.5 0 1 .2 1.4.5l3.6 3a1 1 0 0 1 .4.8v4.4a1 1 0 0 1-.4.8l-3.6 3a2 2 0 0 1-2.8 0l-3.6-3A1 1 0 0 1 6.6 10.7V6.3a1 1 0 0 1 .4-.8l3.6-3c.4-.3.9-.5 1.4-.5z', title: "Shabbat Dinner Rachel's", meta: 'Friday · 7:30 PM · 0.8 mi', color: 'bg-brand-burgundy/10 text-brand-burgundy' },
          { icon: 'M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z', title: 'Challah Bake Workshop', meta: 'Sunday · 2:00 PM · 1.2 mi', color: 'bg-brand-gold-pale text-brand-gold' },
        ].map((e) => (
          <div key={e.title} className="mb-2 flex gap-2.5 rounded-xl border border-brand-sand/60 bg-white p-2.5 shadow-sm">
            <div className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg ${e.color}`}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={e.icon} /></svg>
            </div>
            <div>
              <p className="font-ui text-[10px] font-bold text-brand-navy">{e.title}</p>
              <p className="font-ui text-[8px] text-brand-navy/40">{e.meta}</p>
            </div>
          </div>
        ))}

        <p className="mb-1.5 mt-3 font-ui text-[10px] font-bold text-brand-navy">Today&apos;s Torah Insight</p>
        <div className="rounded-xl border border-brand-gold-pale bg-gradient-to-br from-brand-parchment to-brand-cream-deep p-2.5">
          <p className="font-accent text-[9px] italic leading-snug text-brand-navy/60">
            Even an ordinary meal can become holy when it gathers people with intention.
          </p>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex items-end border-t border-brand-sand/40 bg-white px-1 pb-2.5 pt-2">
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
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-b from-brand-gold to-brand-gold-light font-ui text-[6px] font-bold text-brand-navy shadow-gold">
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

      {/* Home indicator */}
      <div className="flex justify-center bg-white pb-2 pt-1">
        <div className="h-1 w-24 rounded-full bg-brand-navy/10" />
      </div>
    </div>
  );
}
