import FadeInSection from './FadeInSection'
import productsBg from '../assets/products.jpeg'

// Preload the image
const preloadImage = new Image()
preloadImage.src = productsBg

export default function Products() {
  return (
    <section id="products" className="w-full overflow-hidden bg-warm-beige">
      <div
        className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${productsBg})`,
          backgroundColor: '#F3EEE6' // Fallback color matching the theme
        }}
      >
        <div className="absolute inset-0" aria-hidden />
        <FadeInSection className="relative z-10 text-center">
          <h2 className="font-sans font-regular text-3xl leading-tight tracking-[-0.03em] text-white drop-shadow-md sm:text-4xl lg:text-5xl">
            Our Products
          </h2>
        </FadeInSection>
      </div>
    </section>
  )
}
