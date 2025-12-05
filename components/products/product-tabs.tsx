"use client"

import { useState } from "react"
import { Mic, Leaf, Settings, Star, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

interface ProductTabsProps {
  product: Product
}

const tabs = [
  { id: "accessibility", label: "Accessibility Features", icon: Mic },
  { id: "eco", label: "Eco Impact", icon: Leaf },
  { id: "specs", label: "Specifications", icon: Settings },
  { id: "reviews", label: "Reviews", icon: Star },
]

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("accessibility")

  return (
    <section className="mb-16" aria-labelledby="product-details-heading">
      <h2 id="product-details-heading" className="sr-only">
        Product Details
      </h2>

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto border-b border-border mb-8 -mx-4 px-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-sky-blue text-sky-blue"
                : "border-transparent text-charcoal/60 hover:text-charcoal"
            }`}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl p-8 border border-border">
        {activeTab === "accessibility" && (
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h3
                  className="text-xl font-semibold text-charcoal mb-2"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  Accessibility Features
                </h3>
                <p className="text-charcoal/70">Designed with input from users with diverse accessibility needs.</p>
              </div>
              <Button variant="ghost" className="text-sky-blue">
                <Volume2 className="h-4 w-4 mr-2" />
                Read Aloud
              </Button>
            </div>

            <ul className="grid md:grid-cols-2 gap-4">
              {product.accessibilityFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-sky-blue/5 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-sky-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mic className="w-3 h-3 text-sky-blue" />
                  </div>
                  <span className="text-charcoal/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "eco" && (
          <div className="space-y-6">
            <div>
              <h3
                className="text-xl font-semibold text-charcoal mb-2"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                Environmental Impact
              </h3>
              <p className="text-charcoal/70">We're committed to sustainable pet care technology.</p>
            </div>

            <ul className="space-y-4">
              {product.ecoFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 p-4 bg-mint-green/10 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-mint-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="w-3 h-3 text-mint-green" />
                  </div>
                  <span className="text-charcoal/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="space-y-6">
            <h3
              className="text-xl font-semibold text-charcoal mb-2"
              style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
            >
              Technical Specifications
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex justify-between p-4 bg-ivory rounded-xl border border-border">
                  <span className="text-charcoal/60">{spec.label}</span>
                  <span className="font-medium text-charcoal">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-xl font-semibold text-charcoal mb-2"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  Customer Reviews
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating} out of 5</span>
                  <span className="text-charcoal/60">({product.reviewCount} reviews)</span>
                </div>
              </div>
              <Button className="bg-sky-blue hover:bg-sky-blue/90 text-charcoal">Write a Review</Button>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-4">
              {[
                {
                  name: "Sarah M.",
                  rating: 5,
                  date: "2 weeks ago",
                  comment:
                    "This has been a game-changer for me. I can feed my cat without getting out of bed on bad days. The voice commands work perfectly with Alexa.",
                },
                {
                  name: "Michael R.",
                  rating: 4,
                  date: "1 month ago",
                  comment:
                    "Great product, easy setup. Only giving 4 stars because the app could use some accessibility improvements, but the device itself is excellent.",
                },
              ].map((review, i) => (
                <div key={i} className="p-4 bg-ivory rounded-xl border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-clay-beige/50 flex items-center justify-center font-medium text-charcoal">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-charcoal">{review.name}</p>
                        <p className="text-sm text-charcoal/60">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${
                            j < review.rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-charcoal/80">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
