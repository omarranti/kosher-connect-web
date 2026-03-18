import { HeroSection } from "@/components/marketing/hero";
import { FeaturesSection } from "@/components/marketing/features";
import { QuoteStrip } from "@/components/marketing/quote-strip";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PricingPreview } from "@/components/marketing/pricing-preview";
import { WaitlistSection } from "@/components/marketing/waitlist-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <QuoteStrip />
      <HowItWorks />
      <PricingPreview />
      <WaitlistSection />
    </>
  );
}
