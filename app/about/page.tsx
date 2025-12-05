import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Heart, Users, Lightbulb, Accessibility } from "lucide-react"

export const metadata = {
  title: "About Us | PetAccessGadgets - Our Mission & Story",
  description:
    "Learn about PetAccessGadgets - our mission to make pet care accessible for everyone through smart, sustainable technology.",
}

const timeline = [
  {
    year: "2019",
    title: "The Idea",
    description: "Founded by a pet owner with mobility challenges who couldn't find accessible pet care solutions.",
  },
  {
    year: "2020",
    title: "First Prototype",
    description: "Developed our first voice-activated feeder with input from accessibility consultants.",
  },
  {
    year: "2021",
    title: "Community Testing",
    description: "Partnered with disability advocacy groups for extensive real-world testing.",
  },
  {
    year: "2022",
    title: "Launch",
    description: "Officially launched with 5 accessibility-focused pet care products.",
  },
  {
    year: "2023",
    title: "Expansion",
    description: "Grew to 15+ products and served over 10,000 accessible homes.",
  },
  {
    year: "2024",
    title: "Innovation",
    description: "Introduced AI-powered health monitoring and expanded sustainability efforts.",
  },
]

const values = [
  {
    icon: Accessibility,
    title: "Accessibility First",
    description: "Every product is designed with accessibility as a core requirement, not an afterthought.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We work directly with users who have diverse abilities to shape our products.",
  },
  {
    icon: Lightbulb,
    title: "Purposeful Innovation",
    description: "We only add features that solve real problems for our community.",
  },
  {
    icon: Heart,
    title: "Empathy & Care",
    description: "We understand the bond between pets and their owners is irreplaceable.",
  },
]

const team = [
  {
    name: "Dr. Elena Rodriguez",
    role: "Founder & CEO",
    bio: "Former occupational therapist who experienced firsthand the challenges of pet care with limited mobility.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Marcus Chen",
    role: "Head of Product",
    bio: "10+ years in assistive technology, passionate about human-centered design.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Aisha Patel",
    role: "Accessibility Director",
    bio: "Disability rights advocate ensuring every product meets the highest accessibility standards.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-sky-blue/10 via-ivory to-clay-beige/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sky-blue font-medium tracking-wide uppercase text-sm mb-4">Our Story</p>
              <h1
                className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                Technology That Understands
              </h1>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                We believe comfort, dignity, and technology should coexist. Our mission is to make every home a caring,
                accessible space where pet owners can enjoy independence and connection with their companions —
                regardless of ability.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Image */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=1200"
                alt="A diverse group of pet owners with various abilities enjoying time with their pets"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent flex items-end">
                <div className="p-8 md:p-12 max-w-2xl">
                  <blockquote className="text-xl md:text-2xl text-white font-medium italic">
                    "Every pet owner deserves the tools to care for their companion with dignity and ease."
                  </blockquote>
                  <p className="text-white/80 mt-4">— Dr. Elena Rodriguez, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                Our Values
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                These principles guide every decision we make.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-sky-blue/20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-sky-blue" />
                  </div>
                  <h3
                    className="text-xl font-semibold text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-charcoal/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-ivory">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                Our Journey
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                From a personal challenge to a mission serving thousands.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-sky-blue/30 -translate-x-1/2" />

                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-sky-blue border-4 border-ivory -translate-x-1/2 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                    >
                      <span className="text-sky-blue font-bold text-lg">{item.year}</span>
                      <h3
                        className="text-xl font-semibold text-charcoal mt-1 mb-2"
                        style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-charcoal/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
              >
                Meet Our Team
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Passionate people dedicated to accessible pet care.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-sky-blue/20">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-xl font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-sky-blue font-medium mb-3">{member.role}</p>
                  <p className="text-charcoal/70 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10K+", label: "Accessible Homes Served" },
                { value: "15+", label: "Products Designed" },
                { value: "92%", label: "Customer Satisfaction" },
                { value: "50+", label: "Accessibility Partners" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p
                    className="text-4xl md:text-5xl font-bold text-sky-blue mb-2"
                    style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-ivory/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
