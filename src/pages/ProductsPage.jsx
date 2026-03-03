import Products from '../components/Products'
import ProductsSection from '../components/ProductsSection'
import EditorialProductsSection from '../components/EditorialProductsSection'

export default function ProductsPage() {
  return (
    <>
      <Products />
      <EditorialProductsSection />
      <ProductsSection />
    </>
  )
}
