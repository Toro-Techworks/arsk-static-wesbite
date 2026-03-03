import ParallaxHeroProducts from '../components/ParallaxHeroProducts'
import ProductsSection from '../components/ProductsSection'
import EditorialProductsSection from '../components/EditorialProductsSection'

export default function ProductsPage() {
  return (
    <>
      <ParallaxHeroProducts />
      <EditorialProductsSection />
      <ProductsSection />
    </>
  )
}
