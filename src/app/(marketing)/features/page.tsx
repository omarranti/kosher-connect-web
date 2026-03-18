import type { Metadata } from "next";
import { FeaturesSection } from "@/components/marketing/features";

export const metadata: Metadata = {
  title: "Features",
};

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      <section className="pb-8 pt-12 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="section-eyebrow mb-4">What&apos;s Inside</p>
          <h1 className="section-title mb-4">
            Everything You Need for
            <br />
            <span className="text-brand-gold">Jewish Life</span>
          </h1>
          <p className="mx-auto max-w-lg font-accent text-lg leading-relaxed text-brand-navy/60">
            Kosher Connect brings together the tools and content that make daily Jewish living richer and more connected.
          </p>
        </div>
      </section>
      <FeaturesSection />
    </div>
  );
}
