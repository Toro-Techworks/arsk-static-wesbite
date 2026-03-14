import FadeInSection from './FadeInSection'
import LuxuryProductSection from './LuxuryProductSection'

export default function EditorialProductsSection() {
  return (
    <section
      id="collection"
      className="w-full py-12 sm:py-20 lg:py-[120px]"
      style={{ backgroundColor: '#F4EFE8' }}
      aria-label="Product showcase"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <FadeInSection>
            <h2
              className="font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-text-charcoal sm:text-4xl lg:text-[2.75rem]"
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

        <LuxuryProductSection hideTitle embed showSunrise={false} />
      </div>
    </section>
  )
}
