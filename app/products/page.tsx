import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductsFilter } from "@/components/products/products-filter"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Products | PetAccessGadgets - Accessible Pet Care Technology",
  description:
    "Browse our collection of smart, accessible pet care gadgets. Voice-activated feeders, automated doors, health monitors, and more.",
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string; voice?: string }>
}) {
  const params = await searchParams

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "var(--font-heading, 'Atkinson Hyperlegible')" }}
          >
            Accessible Pet Care Gadgets
          </h1>
          <p className="text-lg text-charcoal/70 max-w-2xl">
            Smart technology designed for independence. Every product is built with accessibility in mind.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <ProductsFilter
              currentCategory={params.category || "all"}
              currentSort={params.sort || "featured"}
              voiceOnly={params.voice === "true"}
            />
          </aside>

          <div className="flex-1">
            <Suspense fallback={<ProductsGridSkeleton />}>
              <ProductsGrid
                category={params.category || "all"}
                sort={params.sort || "featured"}
                voiceOnly={params.voice === "true"}
              />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ProductsGridSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden">
          <Skeleton className="aspect-square" />
          <div className="p-5 space-y-3">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  )
}
