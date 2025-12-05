"use client"

import { Heart, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-sky-blue/10 via-white to-clay-beige/20"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about-home-ecosystem.jpg"
                alt="A home ecosystem showing human, pet, and technology coexisting harmoniously"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-mint-green/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-mint-green" />
                </div>
                <div>
                  <p
                    className="text-2xl font-bold text-charcoal"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    10K+
                  </p>
                  <p className="text-xs text-charcoal/60">Happy Homes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sky-blue font-medium tracking-wide uppercase text-sm mb-3">Our Mission</p>
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                About PetAccessGadgets
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                We believe comfort, dignity, and technology should coexist. Our mission is to make every home a caring,
                accessible space where pet owners can enjoy independence and connection with their companions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-blue/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-sky-blue" />
                </div>
                <div>
                  <h3
                    className="font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    Designed with Users
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    Every product is developed in collaboration with pet owners who have diverse accessibility needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-mint-green/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-mint-green" />
                </div>
                <div>
                  <h3
                    className="font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    Innovation with Purpose
                  </h3>
                  <p className="text-charcoal/70 text-sm">
                    We don't add technology for its own sake — every feature serves a real accessibility need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
