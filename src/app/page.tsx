import { MarketingNav } from "@/components/marketing/nav";
import { HeroSection } from "@/components/marketing/hero";
import { FeaturesSection } from "@/components/marketing/features";
import { AppShowcase } from "@/components/marketing/app-showcase";
import { TestimonialsSection } from "@/components/marketing/testimonials";
import { PricingPreview } from "@/components/marketing/pricing-preview";
import { CtaSection } from "@/components/marketing/cta-section";
import { MarketingFooter } from "@/components/marketing/footer";

export default function HomePage() {
  return (
    <>
      <MarketingNav />
      <HeroSection />
      <FeaturesSection />
      <AppShowcase />
      <TestimonialsSection />
      <PricingPreview />
      <CtaSection />
      <MarketingFooter />
    </>
  );
}
