import type { Metadata } from "next";
import { PricingPreview } from "@/components/marketing/pricing-preview";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingPreview />
    </div>
  );
}
