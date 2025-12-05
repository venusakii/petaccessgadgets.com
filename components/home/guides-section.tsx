"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const guides = [
  {
    slug: "voice-commands-feeder-setup",
    title: "How to Set Up Voice Commands for Your Feeder",
    description: "Step-by-step guide to configuring voice activation for hands-free feeding.",
    readTime: "5 min read",
    image: "/guides/voice-commands-feeder.jpg",
  },
  {
    slug: "accessibility-tips-small-apartments",
    title: "Accessibility Tips for Small Apartments",
    description: "Maximize pet care accessibility in compact living spaces.",
    readTime: "7 min read",
    image: "/guides/small-apartment-pets.jpg",
  },
  {
    slug: "remote-pet-health-monitoring",
    title: "How to Monitor Your Pet's Health Remotely",
    description: "Understanding health metrics and setting up alerts for peace of mind.",
    readTime: "6 min read",
    image: "/guides/pet-health-monitoring.jpg",
  },
]

export function GuidesSection() {
  return (
    <section className="py-20 bg-ivory" aria-labelledby="guides-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2
              id="guides-heading"
              className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
            >
              Guides & Tutorials
            </h2>
            <p className="text-lg text-charcoal/70">Learn how to get the most from your accessible pet care gadgets.</p>
          </div>
          <Button asChild variant="outline" className="border-charcoal/20 hover:bg-charcoal/5 w-fit bg-transparent">
            <Link href="/guides">
              All Guides
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-sky-blue/30 transition-all duration-300"
            >
              <Link href={`/guides/${guide.slug}`} className="block">
                <div className="aspect-[3/2] bg-muted relative overflow-hidden">
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3 right-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-white/90 backdrop-blur-sm hover:bg-white text-sky-blue"
                      aria-label={`Listen to ${guide.title}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-charcoal/60 mb-3">
                    <BookOpen className="h-4 w-4" />
                    <span>{guide.readTime}</span>
                  </div>
                  <h3
                    className="font-semibold text-charcoal mb-2 group-hover:text-sky-blue transition-colors line-clamp-2"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    {guide.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 line-clamp-2">{guide.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
