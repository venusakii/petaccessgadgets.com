import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ProductsSection } from "@/components/home/products-section"
import { DemoSection } from "@/components/home/demo-section"
import { SustainabilitySection } from "@/components/home/sustainability-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { GuidesSection } from "@/components/home/guides-section"
import { AboutSection } from "@/components/home/about-section"
import { NewsletterSection } from "@/components/home/newsletter-section"
import { CookieBanner } from "@/components/cookie-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <DemoSection />
        <SustainabilitySection />
        <TestimonialsSection />
        <GuidesSection />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
