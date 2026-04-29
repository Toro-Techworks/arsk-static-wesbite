import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import StatsCertifications from '../components/StatsCertifications'
import ProductCarousel from '../components/ProductCarousel'
import GlobalShippingSolutions from '../components/GlobalShippingSolutions'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="our-story" aria-label="Who We Are">
        <WhoWeAre />
      </section>
      <StatsCertifications />
      <section className="w-full overflow-hidden bg-warm-beige py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-text-charcoal sm:text-4xl lg:text-5xl">
            Our Products
          </h2>
        </div>
        <div className="mt-12 w-full sm:mt-16">
          <ProductCarousel />
        </div>
      </section>
      <GlobalShippingSolutions />
    </>
  )
}
