"use client"

import { Mic, DoorOpen, Heart } from "lucide-react"

const features = [
  {
    icon: Mic,
    title: "Voice-Activated Feeders",
    description: "Feed your pet with simple voice commands. No bending, reaching, or physical effort required.",
  },
  {
    icon: DoorOpen,
    title: "Automated Pet Doors",
    description: "Smart doors that recognize your pet and open automatically. Safe, secure, and effortless.",
  },
  {
    icon: Heart,
    title: "Remote Health Monitors",
    description: "Track your pet's health metrics from anywhere. Get alerts and insights on your phone.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
          >
            Designed for Independence.
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Our technology adapts to your needs, not the other way around.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-ivory border border-transparent hover:border-sky-blue/30 transition-all duration-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-sky-blue focus-within:ring-offset-2"
              tabIndex={0}
              role="article"
              aria-labelledby={`feature-${index}-title`}
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-blue/20 flex items-center justify-center mb-6 group-hover:bg-sky-blue/30 transition-colors">
                <feature.icon className="w-8 h-8 text-sky-blue" aria-hidden="true" />
              </div>
              <h3
                id={`feature-${index}-title`}
                className="text-xl font-semibold text-charcoal mb-3"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                {feature.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
