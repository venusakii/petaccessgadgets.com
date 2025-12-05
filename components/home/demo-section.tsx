"use client"

import { useState } from "react"
import { Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const demos = [
  {
    id: 1,
    title: "Voice-Command Feeder in Action",
    description: "See how easy it is to feed your pet with just your voice.",
    thumbnail: "/smart-pet-feeder-demonstration-voice-control-moder.jpg",
  },
  {
    id: 2,
    title: "Automatic Litter Box Demo",
    description: "Self-cleaning technology that keeps your home fresh.",
    thumbnail: "/automatic-cat-litter-box-demonstration-cleaning-cy.jpg",
  },
  {
    id: 3,
    title: "Smart Door for Guide Dogs",
    description: "Watch how the sensor recognizes and opens for service animals.",
    thumbnail: "/smart-pet-door-opening-for-guide-dog-service-anima.jpg",
  },
]

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState(0)
  const [audioEnabled, setAudioEnabled] = useState(false)

  const nextDemo = () => setActiveDemo((prev) => (prev + 1) % demos.length)
  const prevDemo = () => setActiveDemo((prev) => (prev - 1 + demos.length) % demos.length)

  return (
    <section className="py-20 bg-charcoal" aria-labelledby="demo-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="demo-heading"
            className="text-3xl md:text-4xl font-bold text-ivory mb-4"
            style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
          >
            See How They Work
          </h2>
          <p className="text-lg text-ivory/70 max-w-2xl mx-auto">
            Interactive demonstrations of our accessibility-focused pet gadgets.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Player */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-charcoal/50 mb-6">
            <img
              src={demos[activeDemo].thumbnail || "/placeholder.svg"}
              alt={demos[activeDemo].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30">
              
            </div>

            {/* Audio Toggle */}
            

            {/* Navigation */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                className="bg-charcoal/50 hover:bg-charcoal/70 text-ivory"
                onClick={prevDemo}
                aria-label="Previous demo"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {demos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDemo(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeDemo ? "bg-sky-blue" : "bg-ivory/30"
                    }`}
                    aria-label={`Go to demo ${index + 1}`}
                    aria-current={index === activeDemo ? "true" : "false"}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="bg-charcoal/50 hover:bg-charcoal/70 text-ivory"
                onClick={nextDemo}
                aria-label="Next demo"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Demo Info */}
          <div className="text-center">
            <h3
              className="text-xl font-semibold text-ivory mb-2"
              style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
            >
              {demos[activeDemo].title}
            </h3>
            <p className="text-ivory/70">{demos[activeDemo].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
