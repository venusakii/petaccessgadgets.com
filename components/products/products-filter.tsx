"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { categories } from "@/lib/products"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductsFilterProps {
  currentCategory: string
  currentSort: string
  voiceOnly: boolean
}

export function ProductsFilter({ currentCategory, currentSort, voiceOnly }: ProductsFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilters = (key: string, value: string | boolean) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "all" || value === "featured" || value === false) {
      params.delete(key)
    } else {
      params.set(key, String(value))
    }
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="space-y-8 bg-white rounded-2xl p-6 border border-border sticky top-24">
      <div>
        <h2
          className="text-lg font-semibold text-charcoal mb-4"
          style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
        >
          Categories
        </h2>
        <RadioGroup
          value={currentCategory}
          onValueChange={(val) => updateFilters("category", val)}
          className="space-y-3"
        >
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center gap-3">
              <RadioGroupItem value={cat.id} id={`cat-${cat.id}`} className="border-charcoal/30 text-sky-blue" />
              <Label
                htmlFor={`cat-${cat.id}`}
                className="text-sm text-charcoal/80 cursor-pointer flex items-center gap-2"
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h2
          className="text-lg font-semibold text-charcoal mb-4"
          style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
        >
          Sort By
        </h2>
        <Select value={currentSort} onValueChange={(val) => updateFilters("sort", val)}>
          <SelectTrigger className="w-full bg-ivory border-charcoal/20">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h2
          className="text-lg font-semibold text-charcoal mb-4"
          style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
        >
          Accessibility
        </h2>
        <div className="flex items-center gap-3">
          <Checkbox
            id="voice-compatible"
            checked={voiceOnly}
            onCheckedChange={(checked) => updateFilters("voice", checked as boolean)}
            className="border-charcoal/30 data-[state=checked]:bg-sky-blue data-[state=checked]:border-sky-blue"
          />
          <Label htmlFor="voice-compatible" className="text-sm text-charcoal/80 cursor-pointer">
            Voice Compatible Only
          </Label>
        </div>
      </div>
    </div>
  )
}
