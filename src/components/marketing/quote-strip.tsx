export function QuoteStrip() {
  return (
    <div className="relative overflow-hidden bg-brand-navy px-5 py-14 text-center sm:px-8 sm:py-24">
      {/* Layered background effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/5 blur-[100px]" />
      {/* Subtle star pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 28l1 2h2l-1.5 1.5.5 2-2-1-2 1 .5-2L27 30h2l1-2z' fill='%23C5A55A' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-2xl">
        {/* Top ornament */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/30" />
          <svg className="h-6 w-6 text-brand-gold/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .963L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/30" />
        </div>

        {/* Opening quote mark */}
        <span className="mb-4 block font-display text-5xl leading-none text-brand-gold/20">&ldquo;</span>

        <p className="font-display text-lg font-semibold leading-relaxed text-brand-gold-pale sm:text-2xl md:text-[1.75rem] md:leading-relaxed">
          Even an ordinary meal can become holy when it gathers people with intention.
        </p>

        {/* Bottom ornament */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-brand-gold/15" />
          <span className="h-1 w-1 rounded-full bg-brand-gold/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold/40" />
          <span className="h-1 w-1 rounded-full bg-brand-gold/30" />
          <span className="h-px w-10 bg-brand-gold/15" />
        </div>

        <p className="mt-5 font-ui text-sm tracking-wide text-white/30">
          A Daily Nudge from Kosher Connect
        </p>
      </div>
    </div>
  );
}
