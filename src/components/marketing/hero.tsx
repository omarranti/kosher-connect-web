export function HeroSection() {
  return (
    <section className="relative min-w-0 overflow-hidden bg-brand-navy py-16 sm:py-24 md:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-brand-burgundy/5 blur-3xl" />
      </div>

      <div className="relative mx-auto min-w-0 max-w-7xl px-4 text-center sm:px-6">
        <p className="section-eyebrow mb-6 text-brand-gold/70">
          Your Jewish Community Hub
        </p>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
          Bring your people.{" "}
          <span className="italic text-brand-gold">The table is set.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-accent text-lg italic text-white/50">
          Discover kosher restaurants, plan unforgettable simchas, find community
          events, and connect with your Jewish neighborhood.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="/download" className="btn-burgundy">
            Download Free
          </a>
          <a href="/features" className="btn-brand border border-white/20 text-white hover:bg-white/10">
            See Features
          </a>
        </div>
      </div>
    </section>
  );
}
