"use client"

import { Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Samantha",
    pet: "Bella",
    avatar: "/woman-smiling-portrait-headshot.jpg",
    quote: "My voice feeder changed everything — I can feed Bella without getting up, even on hard days.",
    image: "/golden-retriever-dog-happy-portrait.jpg",
  },
  {
    id: 2,
    name: "James",
    pet: "Luna",
    avatar: "/man-smiling-portrait-headshot.jpg",
    quote: "The automatic door gives Luna freedom while keeping my home secure. It's been life-changing.",
    image: "/black-cat-sitting-portrait.jpg",
  },
  {
    id: 3,
    name: "Ethan",
    pet: "Milo",
    avatar: "/man-casual-portrait-headshot.jpg",
    quote: "The health monitor helps me keep track of Milo's activity. I catch issues before they become problems.",
    image: "/beagle-dog-happy-portrait.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
          >
            Stories from Accessible Homes
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Real experiences from pet owners who found independence through our technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-clay-beige/20 rounded-2xl border border-clay-beige/30 relative overflow-hidden"
              aria-labelledby={`testimonial-${testimonial.id}-name`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.pet} the pet`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <blockquote className="mb-6">
                  <p className="text-charcoal/80 leading-relaxed italic">"{testimonial.quote}"</p>
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover"
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        id={`testimonial-${testimonial.id}-name`}
                        className="font-semibold text-charcoal"
                        style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                      >
                        {testimonial.name} & {testimonial.pet}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-sky-blue hover:bg-sky-blue/10"
                    aria-label={`Listen to ${testimonial.name}'s testimonial`}
                  >
                    <Volume2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
