"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

const categories = [
  { id: "feeding", label: "Feeding & Nutrition", icon: "🐶" },
  { id: "mobility", label: "Mobility & Access", icon: "🐾" },
  { id: "monitoring", label: "Monitoring & Health", icon: "🧠" },
  { id: "automation", label: "Automation Systems", icon: "🏡" },
]

const products = [
  {
    id: 1,
    slug: "voice-activated-smart-feeder",
    name: "Voice-Activated Smart Feeder",
    category: "feeding",
    price: 149.99,
    image: "/modern-automatic-pet-feeder-white-sleek-design-sma.jpg",
    features: ["Voice Control", "App Connected"],
  },
  {
    id: 2,
    slug: "automatic-pet-door-sensor",
    name: "Automatic Pet Door with Sensor",
    category: "mobility",
    price: 199.99,
    image: "/smart-pet-door-with-sensor-modern-white-design.jpg",
    features: ["Motion Sensor", "Size Adjustable"],
  },
  {
    id: 3,
    slug: "health-monitoring-collar",
    name: "Health Monitoring Smart Collar",
    category: "monitoring",
    price: 89.99,
    image: "/smart-pet-collar-health-monitor-sleek-modern-desig.jpg",
    features: ["Heart Rate", "Activity Tracking"],
  },
  {
    id: 4,
    slug: "smart-water-fountain",
    name: "Smart Water Fountain",
    category: "feeding",
    price: 79.99,
    image: "/automatic-pet-water-fountain-modern-design-stainle.jpg",
    features: ["Filter System", "Voice Alerts"],
  },
  {
    id: 5,
    slug: "automated-litter-box",
    name: "Self-Cleaning Litter Box",
    category: "automation",
    price: 299.99,
    image: "/automatic-self-cleaning-cat-litter-box-modern-slee.jpg",
    features: ["Auto Clean", "Odor Control"],
  },
  {
    id: 6,
    slug: "pet-camera-treat-dispenser",
    name: "Pet Camera & Treat Dispenser",
    category: "monitoring",
    price: 129.99,
    image: "/pet-camera-treat-dispenser-smart-home-device-moder.jpg",
    features: ["2-Way Audio", "Treat Toss"],
  },
]

export function ProductsSection() {
  return (
    <section className="py-20 bg-ivory" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2
              id="products-heading"
              className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
            >
              Top Accessible Gadgets
            </h2>
            <p className="text-lg text-charcoal/70">Curated selection of smart devices for accessible pet care.</p>
          </div>
          <Button asChild variant="outline" className="border-charcoal/20 hover:bg-charcoal/5 w-fit bg-transparent">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-10" role="list" aria-label="Product categories">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border hover:border-sky-blue/50 hover:bg-sky-blue/5 transition-colors text-sm font-medium text-charcoal"
            >
              <span aria-hidden="true">{cat.icon}</span>
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-sky-blue/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-sky-blue focus-within:ring-offset-2"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-charcoal"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3
                    className="font-semibold text-charcoal mb-2 group-hover:text-sky-blue transition-colors"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    
                    <span className="text-sm text-sky-blue flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
