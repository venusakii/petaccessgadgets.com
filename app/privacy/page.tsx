import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Privacy Policy | PetAccessGadgets",
  description: "How PetAccessGadgets collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
          >
            Privacy Policy
          </h1>

          <p className="text-charcoal/60 mb-8">Last updated: January 1, 2025</p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-charcoal/80">
              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  1. Information We Collect
                </h2>
                <p className="leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you create an account, make a
                  purchase, subscribe to our newsletter, or contact us for support.
                </p>
                <p className="leading-relaxed">
                  This information may include: name, email address, postal address, phone number, payment information,
                  and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  2. How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate about products, services, offers, and events</li>
                  <li>Improve our Website and personalize your experience</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                </ul>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  3. Cookies and Tracking
                </h2>
                <p className="leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to collect information about your browsing
                  activities. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent.
                </p>
                <p className="leading-relaxed">
                  We use cookies for accessibility preferences (such as font size and contrast settings), analytics, and
                  to remember your preferences across visits.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  4. Information Sharing
                </h2>
                <p className="leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except in
                  the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  5. Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  6. Your Rights
                </h2>
                <p className="leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  7. Accessibility Data
                </h2>
                <p className="leading-relaxed">
                  We may collect accessibility preference data (such as preferred font size, contrast settings, or voice
                  navigation preferences) to improve your experience. This data is stored locally on your device and is
                  not transmitted to our servers unless you explicitly save preferences to your account.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  8. Children's Privacy
                </h2>
                <p className="leading-relaxed">
                  Our Website is not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If we learn we have collected personal information from a child
                  under 13, we will delete that information.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  9. Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new privacy policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  10. Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Email: privacy@petaccessgadgets.com</li>
                  <li>Address: 123 Accessibility Lane, Suite 100, San Francisco, CA 94105</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
