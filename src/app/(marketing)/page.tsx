import { HeroSection } from "@/components/marketing/hero";
import { EmailSignup } from "@/components/marketing/email-signup";
import { FeaturesSection } from "@/components/marketing/features";
import { QuoteStrip } from "@/components/marketing/quote-strip";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PricingPreview } from "@/components/marketing/pricing-preview";
import { WaitlistSection } from "@/components/marketing/waitlist-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EmailSignup />
      <FeaturesSection />
      <QuoteStrip />
      <HowItWorks />
      <PricingPreview />
      <WaitlistSection />
    </>
  );
}
