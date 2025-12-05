import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Terms of Service | PetAccessGadgets",
  description: "Terms and conditions for using PetAccessGadgets services and products.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
          >
            Terms of Service
          </h1>

          <p className="text-charcoal/60 mb-8">Last updated: January 1, 2025</p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-charcoal/80">
              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  1. Acceptance of Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing and using PetAccessGadgets.com ("the Website"), you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to abide by these terms, please do not use
                  this service.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  2. Use of Website
                </h2>
                <p className="leading-relaxed mb-4">
                  You agree to use the Website only for lawful purposes and in a way that does not infringe the rights
                  of, restrict or inhibit anyone else's use and enjoyment of the Website.
                </p>
                <p className="leading-relaxed">
                  Prohibited behavior includes harassing or causing distress or inconvenience to any other user,
                  transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our
                  Website.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  3. Products and Services
                </h2>
                <p className="leading-relaxed mb-4">
                  PetAccessGadgets provides information and links to third-party products. We are participants in the
                  Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means
                  for sites to earn advertising fees by advertising and linking to Amazon.com.
                </p>
                <p className="leading-relaxed">
                  Product availability, pricing, and specifications are subject to change without notice. We make every
                  effort to ensure accuracy but cannot guarantee all information is current or error-free.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  4. Intellectual Property
                </h2>
                <p className="leading-relaxed">
                  The content, layout, design, data, databases, and graphics on this Website are protected by
                  intellectual property laws. You may not reproduce, modify, copy, distribute, or use for commercial
                  purposes any content from this Website without our express written permission.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  5. Accessibility Commitment
                </h2>
                <p className="leading-relaxed">
                  We are committed to ensuring this Website is accessible to people with disabilities. We continuously
                  work to improve the accessibility of our content and welcome feedback. If you encounter any
                  accessibility barriers, please contact us at accessibility@petaccessgadgets.com.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  6. Disclaimer of Warranties
                </h2>
                <p className="leading-relaxed">
                  This Website is provided "as is" without any representations or warranties, express or implied. We
                  make no representations or warranties in relation to this Website or the information and materials
                  provided on this Website.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  7. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  We will not be liable to you in relation to the contents of, or use of, or otherwise in connection
                  with, this Website for any indirect, special or consequential loss; or for any business losses, loss
                  of revenue, income, profits or anticipated savings.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  8. Changes to Terms
                </h2>
                <p className="leading-relaxed">
                  We may revise these terms of service at any time without notice. By using this Website you are
                  agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2
                  className="text-2xl font-semibold text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  9. Contact Information
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Email: legal@petaccessgadgets.com</li>
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
