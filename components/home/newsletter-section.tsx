"use client"

import type React from "react"

import { useState } from "react"
import { Mic, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 bg-charcoal" aria-labelledby="newsletter-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-sky-blue/20 flex items-center justify-center mx-auto mb-6">
            <div className="flex items-center">
              <span className="text-2xl" role="img" aria-label="paw print">
                🐾
              </span>
              <span className="text-2xl ml-[-8px]" role="img" aria-label="hand">
                🤚
              </span>
            </div>
          </div>

          <h2
            id="newsletter-heading"
            className="text-3xl md:text-4xl font-bold text-ivory mb-4"
            style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
          >
            Join the Community
          </h2>
          <p className="text-lg text-ivory/70 mb-8">
            Get accessibility tips, product updates, and exclusive offers delivered to your inbox.
          </p>

          {submitted ? (
            <div className="bg-mint-green/20 rounded-2xl p-6 border border-mint-green/30">
              <p className="text-mint-green font-medium text-lg">
                Thank you for joining! Check your inbox for 10% off your first order.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-14 pl-4 pr-12 rounded-xl bg-white/10 border-white/20 text-ivory placeholder:text-ivory/50 focus:border-sky-blue focus:ring-sky-blue"
                  aria-label="Email address"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-ivory/50 hover:text-ivory hover:bg-white/10"
                  aria-label="Use voice input for email"
                >
                  <Mic className="h-5 w-5" />
                </Button>
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 bg-sky-blue hover:bg-sky-blue/90 text-charcoal font-semibold rounded-xl"
              >
                Join & Get 10% Off
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}

          <p className="text-sm text-ivory/50 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
