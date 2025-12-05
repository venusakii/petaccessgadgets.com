import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AccessibilityToolbar } from "@/components/accessibility/accessibility-toolbar"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "PetAccessGadgets - Smart Accessible Pet Care Technology",
  description:
    "Technology that listens. Comfort that cares. Smart, sustainable gadgets for accessible pet care designed for independence, ease, and love.",
  keywords: [
    "accessible pet care",
    "smart pet gadgets",
    "voice-activated feeders",
    "pet technology",
    "disability-friendly",
  ],
  authors: [{ name: "PetAccessGadgets" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "PetAccessGadgets - Smart Accessible Pet Care Technology",
    description: "Smart, sustainable gadgets for accessible pet care",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#A5C7D9",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <AccessibilityToolbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
