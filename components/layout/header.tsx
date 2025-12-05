"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm"
          aria-label="PetAccessGadgets Home"
        >
          <div className="flex items-center">
            <span
              className="text-xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
            >
              Pet<span className="text-sky-blue">A</span>ccess
            </span>
            <span
              className="text-xl font-light text-charcoal/80"
              style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
            >
              Gadgets
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div
            className={cn("hidden md:flex items-center transition-all duration-300", searchOpen ? "w-64" : "w-auto")}
          >
            {searchOpen ? (
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pr-8 bg-white border-clay-beige focus:border-sky-blue"
                  aria-label="Search products"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Close search"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="text-charcoal hover:bg-clay-beige/30"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Shopping cart"
            className="relative text-charcoal hover:bg-clay-beige/30"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-mint-green text-[10px] font-medium flex items-center justify-center text-charcoal">
              0
            </span>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-charcoal hover:bg-clay-beige/30"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav id="mobile-menu" className="md:hidden border-t border-border bg-ivory" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <div className="relative mb-4">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full bg-white border-clay-beige"
                aria-label="Search products"
              />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-base font-medium text-charcoal hover:text-sky-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
