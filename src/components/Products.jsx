import FadeInSection from './FadeInSection'

const productsBgModules = import.meta.glob('../assets/products.jpeg', { eager: true, import: 'default' })
const productsBg = Object.values(productsBgModules)[0] ?? null

export default function Products() {
  return (
    <section id="products" className="w-full overflow-hidden bg-warm-beige">
      {productsBg && (
        <div
          className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${productsBg})` }}
        >
          <div className="absolute inset-0" aria-hidden />
          <FadeInSection className="relative z-10 text-center">
            <h2 className="font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-white drop-shadow-md sm:text-4xl lg:text-5xl">
              Our Products
            </h2>
          </FadeInSection>
        </div>
      )}
    </section>
  )
}
