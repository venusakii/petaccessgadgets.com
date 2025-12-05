"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-ivory via-ivory to-clay-beige/30"
      aria-labelledby="hero-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-mint-green/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sky-blue font-medium tracking-wide uppercase text-sm">
                Accessible Pet Care Technology
              </p>
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight text-balance"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                The Home That Cares for You and Your Pet.
              </h1>
              <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-xl text-pretty">
                Smart, sustainable gadgets for accessible pet care. Designed for independence, ease, and love —
                regardless of mobility.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sky-blue hover:bg-sky-blue/90 text-charcoal font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-sky-blue/20 transition-all hover:shadow-xl hover:shadow-sky-blue/30"
              >
                <Link href="/products?category=feeders">
                  Explore Smart Feeders
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-charcoal/20 hover:bg-charcoal/5 text-charcoal font-semibold px-8 py-6 text-base rounded-xl bg-transparent"
              >
                <Link href="/products">
                  <Home className="mr-2 h-5 w-5" />
                  See All Solutions
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/sunlit-cozy-living-room-with-person-in-wheelchair-.jpg"
                alt="A person in a wheelchair petting their dog in a sunlit, accessible home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-border max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-mint-green/30 flex items-center justify-center">
                  <span className="text-lg">🐾</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">Voice Activated</p>
                  <p className="text-xs text-charcoal/60">Feed with a command</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
