"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Mic, Send, MessageSquare, HelpCircle } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@petaccessgadgets.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "1-800-PET-ACCESS",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    value: "Available on website",
    description: "Instant support during business hours",
  },
]

const faqs = [
  {
    question: "Do your products work with screen readers?",
    answer: "Yes! All our apps are designed to work with VoiceOver, TalkBack, and other screen readers.",
  },
  {
    question: "What voice assistants are supported?",
    answer: "Our products work with Amazon Alexa, Google Assistant, and Apple Siri.",
  },
  {
    question: "Do you offer installation assistance?",
    answer: "Yes, we provide video guides with captions and can arrange remote or in-person installation help.",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-sky-blue/10 via-ivory to-clay-beige/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1
                className="text-4xl md:text-5xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                Get in Touch
              </h1>
              <p className="text-lg text-charcoal/70">
                Have questions? We're here to help with accessible support options.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 bg-white border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-ivory border border-border">
                  <div className="w-12 h-12 rounded-xl bg-sky-blue/20 flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-6 h-6 text-sky-blue" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-charcoal mb-1"
                      style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                    >
                      {method.title}
                    </h3>
                    <p className="text-charcoal font-medium">{method.value}</p>
                    <p className="text-sm text-charcoal/60">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2
                  className="text-2xl font-bold text-charcoal mb-6"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="bg-mint-green/20 rounded-2xl p-8 border border-mint-green/30 text-center">
                    <div className="w-16 h-16 rounded-full bg-mint-green/30 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-mint-green" />
                    </div>
                    <h3
                      className="text-xl font-semibold text-charcoal mb-2"
                      style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-charcoal/70">Thank you for reaching out. We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-charcoal">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                          className="bg-white border-charcoal/20 focus:border-sky-blue"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-charcoal">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                          className="bg-white border-charcoal/20 focus:border-sky-blue"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-charcoal">
                        Subject
                      </Label>
                      <Select
                        value={formState.subject}
                        onValueChange={(val) => setFormState({ ...formState, subject: val })}
                      >
                        <SelectTrigger className="bg-white border-charcoal/20">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product">Product Question</SelectItem>
                          <SelectItem value="accessibility">Accessibility Support</SelectItem>
                          <SelectItem value="order">Order Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="message" className="text-charcoal">
                          Your Message
                        </Label>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="text-sky-blue hover:text-sky-blue/80"
                        >
                          <Mic className="h-4 w-4 mr-1" />
                          Voice Input
                        </Button>
                      </div>
                      <Textarea
                        id="message"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        required
                        rows={6}
                        className="bg-white border-charcoal/20 focus:border-sky-blue resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-sky-blue hover:bg-sky-blue/90 text-charcoal font-semibold py-6 rounded-xl"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* FAQ */}
              <div>
                <h2
                  className="text-2xl font-bold text-charcoal mb-6"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 border border-border">
                      <div className="flex gap-3">
                        <HelpCircle className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-charcoal mb-2">{faq.question}</h3>
                          <p className="text-charcoal/70">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office Info */}
                <div className="mt-8 p-6 bg-charcoal rounded-2xl text-ivory">
                  <h3
                    className="font-semibold text-lg mb-4"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    Visit Our Office
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                      <p className="text-ivory/80">
                        123 Accessibility Lane, Suite 100
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                      <p className="text-ivory/80">
                        Monday - Friday: 9:00 AM - 6:00 PM EST
                        <br />
                        Saturday: 10:00 AM - 2:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
