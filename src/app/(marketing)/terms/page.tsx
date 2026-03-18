import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="section-eyebrow mb-4">Legal</p>
        <h1 className="section-title mb-2">Terms of Use</h1>
        <p className="mb-10 font-ui text-sm text-brand-navy/40">Last updated: March 18, 2026</p>

        <div className="prose-brand space-y-8 font-accent text-sm leading-relaxed text-brand-navy/70">
          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Kosher Connect application and website (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service. The Service is operated by Kosher Connect (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">2. Eligibility</h2>
            <p>
              You must be at least 13 years of age to use the Service. By using the Service, you represent and warrant that you meet this requirement. If you are under 18, you must have the consent of a parent or legal guardian.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">3. Account Registration</h2>
            <p>
              To access certain features, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information up to date. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">4. Waitlist &amp; Early Access</h2>
            <p>
              Joining our waitlist does not guarantee access to the Service by any specific date. Early access invitations are issued at our discretion. Waitlist data (name, email, city, and stated interests) is collected solely to notify you about launch availability and to improve the Service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">5. Subscriptions &amp; Billing</h2>
            <p>
              Kosher Connect offers subscription plans as described on our pricing page. All plans include a 7-day free trial. You will not be charged until the trial period ends. Subscriptions renew automatically unless cancelled before the renewal date. Pricing is subject to change with reasonable notice. Refunds are handled in accordance with Apple App Store policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">6. User Content &amp; Conduct</h2>
            <p>
              You may submit reviews, event listings, and other content through the Service. You retain ownership of your content but grant us a non-exclusive, worldwide license to display and distribute it within the Service. You agree not to post content that is false, misleading, defamatory, hateful, or that violates any law or the rights of others.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">7. Kosher Information Disclaimer</h2>
            <p>
              Kosher Connect aggregates information about kosher certifications, restaurants, and vendors from publicly available sources and user contributions. We do not independently verify kosher certification status. Always confirm current certification with the restaurant or a recognized kashrus authority before relying on any information from the Service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">8. Intellectual Property</h2>
            <p>
              The Service, including its design, branding, text, graphics, and software, is the property of Kosher Connect and is protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works from any part of the Service without our written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">9. Limitation of Liability</h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind. To the maximum extent permitted by law, Kosher Connect shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">10. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify registered users of material changes via email or in-app notification. Continued use of the Service after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">11. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
              <a href="mailto:hello@kosherconnect.com" className="text-brand-burgundy underline underline-offset-2 hover:text-brand-navy transition-colors">
                hello@kosherconnect.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
