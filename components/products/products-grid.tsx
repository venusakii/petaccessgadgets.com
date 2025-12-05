import Link from "next/link"
import { getProductsByCategory } from "@/lib/products"
import { Star, Mic, ExternalLink } from "lucide-react"

interface ProductsGridProps {
  category: string
  sort: string
  voiceOnly: boolean
}

export function ProductsGrid({ category, sort, voiceOnly }: ProductsGridProps) {
  let filteredProducts = getProductsByCategory(category)

  if (voiceOnly) {
    filteredProducts = filteredProducts.filter((p) => p.voiceCompatible)
  }

  // Sort products
  switch (sort) {
    case "price-low":
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
      break
    case "rating":
      filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating)
      break
    default:
      // Featured - keep original order
      break
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-border">
        <p className="text-lg text-charcoal/70">No products found matching your criteria.</p>
        <p className="text-sm text-charcoal/50 mt-2">Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <>
      <p className="text-sm text-charcoal/60 mb-6">
        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-sky-blue/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-sky-blue focus-within:ring-offset-2"
          >
            <Link href={`/products/${product.slug}`} className="block">
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {product.voiceCompatible && (
                    <span className="px-2 py-1 text-xs font-medium bg-sky-blue/90 backdrop-blur-sm rounded-full text-charcoal flex items-center gap-1">
                      <Mic className="h-3 w-3" />
                      Voice
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="px-2 py-1 text-xs font-medium bg-mint-green/90 backdrop-blur-sm rounded-full text-charcoal">
                      Sale
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-charcoal"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <h3
                  className="font-semibold text-charcoal mb-2 group-hover:text-sky-blue transition-colors line-clamp-2"
                  style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
                >
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-charcoal">{product.rating}</span>
                  </div>
                  <span className="text-sm text-charcoal/50">({product.reviewCount} reviews)</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <p className="text-lg font-bold text-charcoal">${product.price.toFixed(2)}</p>
                    {product.originalPrice && (
                      <p className="text-sm text-charcoal/50 line-through">${product.originalPrice.toFixed(2)}</p>
                    )}
                  </div>
                  <span className="text-sm text-sky-blue flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  )
}
