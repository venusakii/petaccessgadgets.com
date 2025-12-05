"use client"

import { useState } from "react"
import { Star, Mic, Check, ShoppingCart, ExternalLink, Volume2, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-6">
      {/* Title & Rating */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          {product.voiceCompatible && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-sky-blue/20 text-sky-blue rounded-full text-sm font-medium">
              <Mic className="h-4 w-4" />
              Voice Compatible
            </span>
          )}
          {product.inStock ? (
            <span className="inline-flex items-center gap-1 text-mint-green text-sm font-medium">
              <Check className="h-4 w-4" />
              In Stock
            </span>
          ) : (
            <span className="text-destructive text-sm font-medium">Out of Stock</span>
          )}
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
          style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
        >
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
            <span className="ml-2 font-medium text-charcoal">{product.rating}</span>
          </div>
          <span className="text-charcoal/60">({product.reviewCount} reviews)</span>
          <Button
            variant="ghost"
            size="sm"
            className="text-sky-blue hover:text-sky-blue/80"
            aria-label="Listen to product description"
          >
            <Volume2 className="h-4 w-4 mr-1" />
            Listen
          </Button>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-charcoal">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <>
            <span className="text-xl text-charcoal/50 line-through">${product.originalPrice.toFixed(2)}</span>
            <span className="px-2 py-1 bg-mint-green/20 text-mint-green rounded-full text-sm font-medium">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-lg text-charcoal/70 leading-relaxed">{product.description}</p>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {product.features.map((feature, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-ivory border border-border rounded-full text-sm font-medium text-charcoal"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center border border-border rounded-lg bg-white">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3 text-charcoal hover:bg-muted transition-colors"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="px-4 py-3 min-w-[60px] text-center font-medium" aria-live="polite">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 text-charcoal hover:bg-muted transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <Button
          size="lg"
          className="flex-1 bg-sky-blue hover:bg-sky-blue/90 text-charcoal font-semibold py-6 text-base rounded-xl"
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </div>

      {/* Amazon Link */}
      {product.amazonUrl && (
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full border-2 border-charcoal/20 hover:bg-charcoal/5 py-6 text-base rounded-xl group bg-transparent"
        >
          <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-2">
              View on Amazon
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </Button>
      )}

      {/* Secondary Actions */}
      <div className="flex gap-4 pt-4 border-t border-border">
        <Button variant="ghost" className="text-charcoal/70 hover:text-charcoal">
          <Heart className="mr-2 h-4 w-4" />
          Save
        </Button>
        <Button variant="ghost" className="text-charcoal/70 hover:text-charcoal">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </div>
    </div>
  )
}
