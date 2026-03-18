// TODO: Implement final CTA section with app store links
export function CtaSection() {
  return (
    <section className="bg-brand-burgundy py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-h1 text-white mb-4">Ready to Connect?</h2>
        <p className="font-accent text-subtitle italic text-white/70 mb-8">Download Kosher Connect and join thousands already plugged in.</p>
        <a href="/download" className="btn-gold">Try 7 Days Free</a>
      </div>
    </section>
  );
}
