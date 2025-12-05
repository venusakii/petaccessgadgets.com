import Link from "next/link"
import { Star, Mic } from "lucide-react"
import type { Product } from "@/lib/products"

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section aria-labelledby="related-heading">
      <h2
        id="related-heading"
        className="text-2xl font-bold text-charcoal mb-8"
        style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
      >
        You May Also Like
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <article
            key={product.id}
            className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-sky-blue/30 transition-all duration-300"
          >
            <Link href={`/products/${product.slug}`} className="block">
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.voiceCompatible && (
                  <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-sky-blue/90 rounded-full text-charcoal flex items-center gap-1">
                    <Mic className="h-3 w-3" />
                    Voice
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-charcoal mb-2 group-hover:text-sky-blue transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm text-charcoal">{product.rating}</span>
                </div>
                <p className="text-lg font-bold text-charcoal">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
