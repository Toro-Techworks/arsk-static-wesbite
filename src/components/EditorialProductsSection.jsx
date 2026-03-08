import FadeInSection from './FadeInSection'
import LuxuryProductSection from './LuxuryProductSection'

export default function EditorialProductsSection() {
  return (
    <section
      id="collection"
      className="w-full py-12 sm:py-20 lg:py-[120px]"
      style={{ backgroundColor: '#eae3db' }}
      aria-label="Product showcase"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <FadeInSection>
            <h2
              className="font-serif text-2xl font-medium uppercase leading-tight tracking-[0.1em] sm:text-3xl sm:tracking-[0.12em] lg:text-[2.75rem]"
              style={{ color: '#2e2a26' }}
            >
              Create Your Dream Fabrics With Us
            </h2>
          </FadeInSection>
          <FadeInSection className="lg:pt-2">
            <p
              className="max-w-[400px] font-sans text-sm font-light leading-relaxed sm:text-base"
              style={{ color: '#5c544f' }}
            >
              A curated selection of premium textiles that bring warmth and intention to your space. Each piece is woven with care, reflecting the quiet precision of fine fabric craftsmanship.
            </p>
          </FadeInSection>
        </div>

        <LuxuryProductSection hideTitle embed />
      </div>
    </section>
  )
}
