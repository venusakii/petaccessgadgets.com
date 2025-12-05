"use client"

import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BookOpen, Volume2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const guides = [
  {
    slug: "voice-commands-feeder-setup",
    title: "How to Set Up Voice Commands for Your Feeder",
    description:
      "Step-by-step guide to configuring voice activation with Alexa, Google, and Siri for hands-free feeding.",
    readTime: "5 min read",
    category: "Setup",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "accessibility-tips-small-apartments",
    title: "Accessibility Tips for Small Apartments",
    description: "Maximize pet care accessibility in compact living spaces with smart placement and device choices.",
    readTime: "7 min read",
    category: "Tips",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "remote-pet-health-monitoring",
    title: "How to Monitor Your Pet's Health Remotely",
    description: "Understanding health metrics and setting up alerts for peace of mind when you're away.",
    readTime: "6 min read",
    category: "Health",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "smart-home-integration-guide",
    title: "Complete Smart Home Integration Guide",
    description: "Connect all your pet gadgets into one seamless system with routines and automation.",
    readTime: "10 min read",
    category: "Setup",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "choosing-right-feeder-mobility",
    title: "Choosing the Right Feeder for Your Mobility Needs",
    description: "A comprehensive comparison of feeders based on different accessibility requirements.",
    readTime: "8 min read",
    category: "Buying Guide",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    slug: "pet-door-installation-accessibility",
    title: "Installing Pet Doors for Accessible Homes",
    description: "Professional tips for installing smart pet doors in various door types and walls.",
    readTime: "12 min read",
    category: "Setup",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export function GuidesClientPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
          >
            Guides & Tutorials
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl">
            Learn how to get the most from your accessible pet care gadgets with our step-by-step guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-sky-blue/30 transition-all duration-300"
            >
              <Link href={`/guides/${guide.slug}`} className="block">
                <div className="aspect-[5/3] bg-muted relative overflow-hidden">
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    aria-hidden="true"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-charcoal">
                    {guide.category}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white text-sky-blue"
                    aria-label={`Listen to ${guide.title}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-3">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      Guide
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h2
                    className="text-xl font-semibold text-charcoal mb-2 group-hover:text-sky-blue transition-colors line-clamp-2"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    {guide.title}
                  </h2>
                  <p className="text-charcoal/70 line-clamp-2">{guide.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
