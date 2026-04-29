import { useState, useMemo } from 'react'
import FadeInSection from './FadeInSection'
import ProductsGrid from './ProductsGrid'

const productImages = import.meta.glob(
  '../assets/Product images/**/*.{png,jpg,jpeg,avif}',
  { eager: true, import: 'default' }
)

function buildProductsFromGlob() {
  const entries = Object.entries(productImages)
  return entries.map(([path, src], index) => {
    const parts = path.replace(/^.*Product images\/?/i, '').split('/')
    const filename = parts.pop() || path
    const nameFromFile = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
    const category = parts[0] || 'Product'
    const name = nameFromFile ? nameFromFile.charAt(0).toUpperCase() + nameFromFile.slice(1) : `${category} ${index + 1}`
    return {
      id: `${category}-${index}-${path}`,
      name,
      category,
      description: 'Elegant handcrafted piece from our curated collection.',
      image: src,
    }
  })
}

const allProducts = buildProductsFromGlob()

const categories = ['All', ...Array.from(new Set(allProducts.map((p) => p.category))).sort()]

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') return allProducts
    return allProducts.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  if (allProducts.length === 0) return null

  return (
    <section
      id="our-products"
      className="w-full py-20"
      style={{ backgroundColor: '#f5f1ec' }}
      aria-labelledby="products-section-title"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <FadeInSection className="text-center">
          <h2
            id="products-section-title"
            className="mx-auto max-w-4xl text-center font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-text-charcoal sm:text-4xl lg:text-5xl"
          >
            Our Products
          </h2>
          <p className="mt-3 font-sans text-base font-light text-text-charcoal/85 sm:text-lg">
            Crafted Minimal Ceramic Collection
          </p>
        </FadeInSection>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className="rounded-full border px-4 py-2 font-sans text-sm uppercase tracking-wide transition-colors duration-200 sm:px-5 sm:py-2.5"
              style={{
                borderColor: activeFilter === cat ? '#6b5b4d' : '#d4cfc7',
                backgroundColor: activeFilter === cat ? '#6b5b4d' : 'transparent',
                color: activeFilter === cat ? '#fff' : '#2e2a26',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 sm:mt-16">
          <ProductsGrid products={filteredProducts} />
        </div>
      </div>
    </section>
  )
}
