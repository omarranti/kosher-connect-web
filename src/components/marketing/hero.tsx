import { HeroEmailSignup } from "./hero-email-signup";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-cream pt-16 sm:pt-24 md:pt-0">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-48 h-[400px] w-[400px] rounded-full bg-brand-gold-pale/50 blur-[100px] animate-soft-breathe sm:h-[600px] sm:w-[600px]" />
        <div className="absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-burgundy/5 blur-[100px] animate-soft-breathe" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 0.5px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 md:grid md:min-h-screen md:grid-cols-2 md:items-center md:gap-16 md:py-0">
        {/* Copy + Email */}
        <div className="text-center md:text-left">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-pill border border-brand-sand bg-white/80 px-3.5 py-1.5 shadow-card backdrop-blur-sm sm:mb-6 sm:gap-2.5 sm:px-5 sm:py-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-burgundy/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-burgundy" />
            </span>
            <span className="font-ui text-[11px] font-medium tracking-wide text-brand-navy/70">Coming soon to iOS</span>
          </div>

          <h1 className="font-display text-[2.25rem] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            <span className="text-brand-navy">What&apos;s up,</span>
            <br />
            <span className="bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold bg-clip-text text-transparent">friends?</span>
          </h1>

          <p className="mx-auto mt-3 max-w-sm font-accent text-[15px] leading-relaxed text-brand-navy/50 sm:mt-5 sm:max-w-md sm:text-lg md:mx-0">
            Kosher spots, events, daily nudges, and your people — one tap away.
          </p>

          <HeroEmailSignup />

          {/* Social proof */}
          <div className="mt-5 flex items-center justify-center gap-2.5 sm:mt-8 md:justify-start">
            <div className="flex -space-x-2">
              {[
                { letter: 'R', bg: 'bg-brand-navy', text: 'text-brand-gold-pale' },
                { letter: 'D', bg: 'bg-brand-burgundy/10', text: 'text-brand-burgundy' },
                { letter: 'M', bg: 'bg-brand-gold-pale', text: 'text-brand-gold' },
                { letter: '+6', bg: 'bg-brand-gold', text: 'text-white' },
              ].map((a) => (
                <span
                  key={a.letter}
                  className={`grid h-7 w-7 place-items-center rounded-full border-2 border-brand-cream ${a.bg} font-ui text-[9px] font-bold ${a.text} sm:h-9 sm:w-9 sm:text-[11px]`}
                >
                  {a.letter}
                </span>
              ))}
            </div>
            <div>
              <p className="font-ui text-xs font-semibold text-brand-navy sm:text-sm">200+ on the waitlist</p>
              <p className="font-ui text-[10px] text-brand-navy/40">Join the community</p>
            </div>
          </div>
        </div>

        {/* Phone mockup — tablet+ only */}
        <div className="hidden justify-center md:flex">
          <div className="relative animate-gentle-float">
            <div className="absolute -inset-10 rounded-[48px] bg-gradient-to-b from-brand-gold/20 via-brand-gold-pale/10 to-transparent blur-3xl animate-glow-pulse" />
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="block h-8 w-full sm:h-[60px]">
          <path d="M0 60V30C240 5 480 0 720 15C960 30 1200 45 1440 30V60H0Z" fill="#F8F0E3" />
        </svg>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[280px] overflow-hidden rounded-[40px] border-[3px] border-brand-sand/60 bg-white shadow-card-hover">
      <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-brand-navy/5" />
      <div className="bg-gradient-to-b from-brand-cream to-brand-parchment px-5 pb-5 pt-12 text-center">
        <h3 className="font-display text-lg font-bold text-brand-navy">What&apos;s up, friends?</h3>
        <p className="mt-0.5 font-ui text-[10px] font-semibold text-brand-navy/50">Here&apos;s what&apos;s popping in your neighborhood.</p>
      </div>
      <div className="bg-brand-cream/40 px-4 py-3">
        <div className="mb-3 grid grid-cols-2 gap-1.5">
          {[
            { label: 'Rough Day', on: false },
            { label: 'Feeling Off', on: false },
            { label: 'Pretty Good', on: false },
            { label: 'So Great', on: true },
          ].map((m) => (
            <div key={m.label} className={`rounded-xl border px-2.5 py-2 font-ui text-[10px] font-semibold ${m.on ? 'border-brand-gold bg-brand-gold text-white' : 'border-brand-sand bg-white text-brand-navy/70'}`}>
              {m.label}
            </div>
          ))}
        </div>
        <p className="mb-2 font-ui text-[10px] font-bold text-brand-navy">Events You&apos;ll Wanna Hit</p>
        {[
          { title: "Shabbat Dinner Rachel's", meta: 'Friday · 7:30 PM', color: 'bg-brand-burgundy/10 text-brand-burgundy' },
          { title: 'Challah Bake Workshop', meta: 'Sunday · 2:00 PM', color: 'bg-brand-gold-pale text-brand-gold' },
        ].map((e) => (
          <div key={e.title} className="mb-2 flex gap-2.5 rounded-xl border border-brand-sand/60 bg-white p-2.5">
            <div className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg ${e.color}`}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" /></svg>
            </div>
            <div>
              <p className="font-ui text-[10px] font-bold text-brand-navy">{e.title}</p>
              <p className="font-ui text-[8px] text-brand-navy/40">{e.meta}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center border-t border-brand-sand/40 bg-white pb-3 pt-2">
        <div className="h-1 w-20 rounded-full bg-brand-navy/10" />
      </div>
    </div>
  );
}
