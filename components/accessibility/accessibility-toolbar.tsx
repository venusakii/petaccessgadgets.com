"use client"

import { useState, useEffect } from "react"
import { ZoomIn, ZoomOut, Contrast, Volume2, VolumeX, Eye, RotateCcw, X, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AccessibilitySettings {
  fontSize: number
  highContrast: boolean
  reducedMotion: boolean
  screenReaderMode: boolean
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  reducedMotion: false,
  screenReaderMode: false,
}

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings)

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibility-settings")
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings)
      setSettings(parsed)
      applySettings(parsed)
    }
  }, [])

  // Apply settings to document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const root = document.documentElement

    // Font size
    root.style.fontSize = `${newSettings.fontSize}%`

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add("high-contrast")
    } else {
      root.classList.remove("high-contrast")
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add("reduce-motion")
    } else {
      root.classList.remove("reduce-motion")
    }

    // Screen reader mode
    if (newSettings.screenReaderMode) {
      root.classList.add("sr-enhanced")
    } else {
      root.classList.remove("sr-enhanced")
    }
  }

  const updateSetting = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    localStorage.setItem("accessibility-settings", JSON.stringify(newSettings))
    applySettings(newSettings)
  }

  const increaseFontSize = () => {
    if (settings.fontSize < 150) {
      updateSetting("fontSize", settings.fontSize + 10)
    }
  }

  const decreaseFontSize = () => {
    if (settings.fontSize > 80) {
      updateSetting("fontSize", settings.fontSize - 10)
    }
  }

  const resetSettings = () => {
    setSettings(defaultSettings)
    localStorage.removeItem("accessibility-settings")
    applySettings(defaultSettings)
  }

  return (
    <>
      {/* Toolbar Panel */}
      <div
        id="accessibility-panel"
        className={cn(
          "fixed left-4 bottom-24 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-border transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
        role="dialog"
        aria-label="Accessibility settings"
        aria-hidden={!isOpen}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2
            className="text-lg font-semibold text-charcoal"
            style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
          >
            Accessibility
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close accessibility panel"
          >
            <X className="w-5 h-5 text-charcoal/60" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {/* Font Size */}
          <div>
            <label className="text-sm font-medium text-charcoal mb-3 block">Text Size: {settings.fontSize}%</label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={decreaseFontSize}
                disabled={settings.fontSize <= 80}
                aria-label="Decrease text size"
                className="border-charcoal/20 bg-transparent"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <div className="flex-1 h-2 bg-muted rounded-full relative">
                <div
                  className="h-full bg-sky-blue rounded-full transition-all"
                  style={{ width: `${((settings.fontSize - 80) / 70) * 100}%` }}
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={increaseFontSize}
                disabled={settings.fontSize >= 150}
                aria-label="Increase text size"
                className="border-charcoal/20"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-charcoal/10 flex items-center justify-center">
                <Contrast className="w-5 h-5 text-charcoal" />
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">High Contrast</p>
                <p className="text-xs text-charcoal/60">Increase color contrast</p>
              </div>
            </div>
            <button
              role="switch"
              aria-checked={settings.highContrast}
              onClick={() => updateSetting("highContrast", !settings.highContrast)}
              className={cn(
                "w-12 h-7 rounded-full transition-colors relative",
                settings.highContrast ? "bg-sky-blue" : "bg-charcoal/20",
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform",
                  settings.highContrast ? "translate-x-6" : "translate-x-1",
                )}
              />
            </button>
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-charcoal/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-charcoal" />
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">Reduce Motion</p>
                <p className="text-xs text-charcoal/60">Minimize animations</p>
              </div>
            </div>
            <button
              role="switch"
              aria-checked={settings.reducedMotion}
              onClick={() => updateSetting("reducedMotion", !settings.reducedMotion)}
              className={cn(
                "w-12 h-7 rounded-full transition-colors relative",
                settings.reducedMotion ? "bg-sky-blue" : "bg-charcoal/20",
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform",
                  settings.reducedMotion ? "translate-x-6" : "translate-x-1",
                )}
              />
            </button>
          </div>

          {/* Screen Reader Mode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-charcoal/10 flex items-center justify-center">
                {settings.screenReaderMode ? (
                  <Volume2 className="w-5 h-5 text-charcoal" />
                ) : (
                  <VolumeX className="w-5 h-5 text-charcoal" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">Screen Reader</p>
                <p className="text-xs text-charcoal/60">Enhanced SR support</p>
              </div>
            </div>
            <button
              role="switch"
              aria-checked={settings.screenReaderMode}
              onClick={() => updateSetting("screenReaderMode", !settings.screenReaderMode)}
              className={cn(
                "w-12 h-7 rounded-full transition-colors relative",
                settings.screenReaderMode ? "bg-sky-blue" : "bg-charcoal/20",
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform",
                  settings.screenReaderMode ? "translate-x-6" : "translate-x-1",
                )}
              />
            </button>
          </div>

          {/* Reset Button */}
          <Button
            variant="outline"
            onClick={resetSettings}
            className="w-full border-charcoal/20 text-charcoal/70 hover:text-charcoal bg-transparent"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
        </div>
      </div>

      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sky-blue focus:text-charcoal focus:rounded-lg focus:font-medium"
      >
        Skip to main content
      </a>

      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  )
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-4 bottom-4 z-50 w-12 h-12 rounded-full bg-charcoal text-ivory shadow-lg hover:bg-charcoal/90 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-charcoal/30"
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}
