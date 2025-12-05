"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-border shadow-lg"
      role="dialog"
      aria-labelledby="cookie-banner-title"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Cookie className="h-6 w-6 text-clay-beige flex-shrink-0" aria-hidden="true" />
          <p id="cookie-banner-title" className="text-sm text-charcoal/80">
            This site uses cookies to enhance accessibility and personalize your experience. By continuing, you consent
            to our use of cookies.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Button variant="outline" size="sm" onClick={() => setVisible(false)} className="border-charcoal/20">
            Decline
          </Button>
          <Button size="sm" onClick={acceptCookies} className="bg-sky-blue hover:bg-sky-blue/90 text-charcoal">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
