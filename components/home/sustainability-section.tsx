"use client"

import { Recycle, Sun, Leaf, Battery } from "lucide-react"

const stats = [
  {
    icon: Recycle,
    value: "92%",
    label: "Recyclable Materials",
    description: "Our devices are built with recyclable components",
  },
  {
    icon: Sun,
    value: "70%",
    label: "Renewable Energy",
    description: "Operate with renewable energy sources",
  },
]

export function SustainabilitySection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-mint-green/20 via-ivory to-sky-blue/10"
      aria-labelledby="sustainability-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-mint-green font-medium tracking-wide uppercase text-sm mb-3">
                Eco-Friendly Innovation
              </p>
              <h2
                id="sustainability-heading"
                className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                Smart, Safe, and Sustainable.
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                We believe technology should care for our planet as much as it cares for our pets. Every product is
                designed with sustainability in mind.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-mint-green/20 flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-mint-green" aria-hidden="true" />
                  </div>
                  <p
                    className="text-3xl font-bold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-charcoal mb-2">{stat.label}</p>
                  <p className="text-sm text-charcoal/60">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="/recycled-materials-pet-gadget-components-eco-frien.jpg"
                    alt="Pet gadgets made with recycled materials"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-xl p-4 border border-border flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-mint-green" />
                  <div>
                    <p className="font-medium text-charcoal text-sm">Carbon Neutral</p>
                    <p className="text-xs text-charcoal/60">Shipping & Production</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-xl p-4 border border-border flex items-center gap-3">
                  <Battery className="w-8 h-8 text-sky-blue" />
                  <div>
                    <p className="font-medium text-charcoal text-sm">Low Energy</p>
                    <p className="text-xs text-charcoal/60">Efficient Operation</p>
                  </div>
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="/solar-powered-pet-device-outdoor-smart-gadget.jpg"
                    alt="Solar-powered pet devices"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
