import FadeInSection from './FadeInSection'
import LuxuryProductSection from './LuxuryProductSection'

export default function EditorialProductsSection() {
  return (
    <section
      id="collection"
      className="w-full py-[120px]"
      style={{ backgroundColor: '#eae3db' }}
      aria-label="Product showcase"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <FadeInSection>
            <h2
              className="font-serif text-3xl font-medium uppercase tracking-[0.12em] sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
              style={{ color: '#2e2a26' }}
            >
              Create Your Dream Fabrics With Us
            </h2>
          </FadeInSection>
          <FadeInSection className="lg:pt-2">
            <p
              className="max-w-[400px] font-sans text-base font-light leading-relaxed"
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
