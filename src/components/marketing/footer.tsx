import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="border-t border-brand-sand bg-brand-parchment px-6 py-10 text-center">
      <p className="font-display text-base font-bold text-brand-gold">Kosher Connect</p>
      <p className="mt-2 font-ui text-xs leading-loose text-brand-navy/30">
        &copy; {new Date().getFullYear()} Made with love for the community.
        <br />
        <Link href="/terms" className="text-brand-navy/40 transition-colors hover:text-brand-navy/60">
          Terms of Use
        </Link>
        {" · "}
        <Link href="/privacy" className="text-brand-navy/40 transition-colors hover:text-brand-navy/60">
          Privacy
        </Link>
        <br />
        <a href="mailto:hello@kosherconnect.com" className="text-brand-navy/40 transition-colors hover:text-brand-navy/60">
          hello@kosherconnect.com
        </a>
      </p>
    </footer>
  );
}
