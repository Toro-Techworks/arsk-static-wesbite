import { useState } from 'react'
import FadeInSection from './FadeInSection'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

export default function ProductsGrid({ products, gridClassName = '' }) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  if (!products || products.length === 0) return null

  return (
    <>
      <div
        className={`grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 lg:gap-[40px] ${gridClassName}`}
      >
        {products.map((product) => (
          <FadeInSection key={product.id}>
            <ProductCard product={product} onViewDetails={setSelectedProduct} />
          </FadeInSection>
        ))}
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onRequestQuote={() => setSelectedProduct(null)}
      />
    </>
  )
}
