export function QuoteStrip() {
  return (
    <div className="relative overflow-hidden bg-brand-navy px-6 py-16 sm:py-20 text-center">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold/5 blur-[100px]" />

      <div className="relative mx-auto max-w-2xl">
        {/* Top ornament */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/40" />
          <svg className="h-5 w-5 text-brand-gold/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .963L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/40" />
        </div>

        <p className="font-display text-xl font-semibold leading-snug text-brand-gold-pale sm:text-2xl md:text-3xl">
          <em className="text-brand-gold">&ldquo;Even an ordinary meal can become holy</em>{' '}
          when it gathers people with intention.&rdquo;
        </p>

        {/* Bottom ornament */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-brand-gold/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold/40" />
          <span className="h-px w-8 bg-brand-gold/20" />
        </div>

        <p className="mt-4 font-ui text-sm text-white/40">
          — A Daily Nudge from Kosher Connect
        </p>
      </div>
    </div>
  );
}
