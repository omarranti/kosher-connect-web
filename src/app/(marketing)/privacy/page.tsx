import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="section-eyebrow mb-4">Legal</p>
        <h1 className="section-title mb-2">Privacy Policy</h1>
        <p className="mb-10 font-ui text-sm text-brand-navy/40">Last updated: March 18, 2026</p>

        <div className="prose-brand space-y-8 font-accent text-sm leading-relaxed text-brand-navy/70">
          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">1. Introduction</h2>
            <p>
              Kosher Connect (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application (collectively, the &ldquo;Service&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">2. Information We Collect</h2>
            <h3 className="mt-3 font-display text-base font-semibold text-brand-navy/80">Information You Provide</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Name, email address, and city when you join the waitlist</li>
              <li>Feature interests and feedback you share via the waitlist form</li>
              <li>Account information if you create an account (name, email)</li>
              <li>Content you post, such as reviews, event listings, or messages</li>
            </ul>

            <h3 className="mt-4 font-display text-base font-semibold text-brand-navy/80">Information Collected Automatically</h3>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Device type, operating system, and browser information</li>
              <li>IP address and approximate location (city-level)</li>
              <li>Usage data such as pages visited, features used, and interaction patterns</li>
              <li>Cookies and similar tracking technologies (see Section 6)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Provide, maintain, and improve the Service</li>
              <li>Send you early access invitations and product updates</li>
              <li>Personalize your experience, including local kosher listings and events</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Monitor usage patterns to improve features and fix issues</li>
              <li>Protect against fraud, abuse, and unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">4. How We Share Your Information</h2>
            <p>
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li><strong>Service providers:</strong> Third-party vendors who help us operate the Service (hosting, analytics, email delivery)</li>
              <li><strong>Legal requirements:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Safety:</strong> To protect the rights, property, or safety of Kosher Connect, our users, or the public</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed to provide the Service. Waitlist data is retained until you request removal or until the waitlist is no longer active. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">6. Cookies &amp; Tracking</h2>
            <p>
              We use cookies and similar technologies to remember your preferences, understand how you use the Service, and improve your experience. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of the Service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="ml-4 mt-2 list-disc space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Request a portable copy of your data</li>
            </ul>
            <p className="mt-2">
              <strong>California residents:</strong> Under the CCPA, you have additional rights including the right to know what personal information is collected, the right to delete, and the right to opt out of the sale of personal information. We do not sell personal information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">8. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">9. Children&apos;s Privacy</h2>
            <p>
              The Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-brand-navy">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at{" "}
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
