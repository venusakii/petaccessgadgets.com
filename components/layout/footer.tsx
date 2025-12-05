import Link from "next/link"

const footerLinks = {
  shop: [
    { href: "/products", label: "All Products" },
    { href: "/products?category=feeders", label: "Smart Feeders" },
    { href: "/products?category=monitors", label: "Health Monitors" },
    { href: "/products?category=doors", label: "Pet Doors" },
  ],
  support: [
    { href: "/guides", label: "Guides & Tutorials" },
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-sky-blue/20 to-mint-green/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-xl font-bold text-charcoal"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                Pet<span className="text-sky-blue">A</span>ccess
              </span>
              <span
                className="text-xl font-light text-charcoal/80"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                Gadgets
              </span>
            </Link>
            <p className="text-base text-charcoal/70 leading-relaxed">Technology that listens. Comfort that cares.</p>
          </div>

          {/* Shop Links */}
          <div>
            <h3
              className="text-lg font-semibold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
            >
              Shop
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-charcoal/70 hover:text-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3
              className="text-lg font-semibold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
            >
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-charcoal/70 hover:text-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3
              className="text-lg font-semibold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-charcoal/70 hover:text-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-charcoal/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-charcoal/60">
            <p>&copy; {new Date().getFullYear()} PetAccessGadgets.com — All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
