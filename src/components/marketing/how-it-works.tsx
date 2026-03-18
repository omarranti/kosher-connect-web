const steps = [
  {
    num: 1,
    title: 'Join the Waitlist',
    description: "Sign up below and be the first to know when we launch on the App Store.",
  },
  {
    num: 2,
    title: 'Get Early Access',
    description: "We'll invite you to the beta via TestFlight so you can explore before everyone else.",
  },
  {
    num: 3,
    title: 'Plug Into Your Community',
    description: "Discover what's popping around you — kosher spots, events, people, and vibes.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 sm:py-28">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="section-eyebrow mb-3 !text-brand-gold">How It Works</p>
        <h2 className="font-display text-3xl font-bold text-brand-parchment sm:text-4xl">
          Three Steps to
          <br />
          Community Vibes
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border-2 border-brand-gold bg-brand-gold/10 font-display text-lg font-bold text-brand-gold">
                {s.num}
              </div>
              <h3 className="font-display text-base font-semibold text-brand-parchment sm:text-lg">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[240px] font-accent text-sm leading-relaxed text-white/60">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
