import { Link } from 'react-router-dom'
import FadeInSection from './FadeInSection'
import ProductsGrid from './ProductsGrid'

const productImages = import.meta.glob(
  '../assets/Curtains/*.{png,jpg,jpeg,avif}',
  { eager: true, import: 'default' }
)

const imageEntries = Object.entries(productImages)
const products = imageEntries.slice(0, 8).map(([path, image], index) => {
  const parts = path.replace(/^.*Product images\/?/i, '').split('/')
  const filename = (parts.pop() || path).replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
  const name = filename ? filename.charAt(0).toUpperCase() + filename.slice(1) : `Product ${index + 1}`
  return { id: index + 1, name, image }
})

const lifestyleImage = imageEntries[8]?.[1] ?? null

export default function LuxuryProductSection({ hideTitle = false, embed = false, showSunrise = true }) {
  if (products.length === 0) return null

  const content = (
    <>
      {!hideTitle && (
        <h2
          id="bags-bedding-title"
          className="mb-[60px] text-center font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-text-charcoal sm:text-4xl lg:text-5xl"
        >
          Bags & Bedding
        </h2>
      )}

      <ProductsGrid products={products} gridClassName={hideTitle ? 'mt-0' : ''} />

      {showSunrise && (
        <div className="mt-24 grid grid-cols-1 gap-12 lg:mt-32 lg:grid-cols-2 lg:items-center lg:gap-16">
          <FadeInSection className="flex flex-col justify-center">
            <h3 className="font-sans font-[200] text-2xl leading-tight tracking-[-0.03em] text-text-charcoal sm:text-3xl">
              Sunrise
            </h3>
            <p
              className="mt-4 max-w-md font-sans text-base font-light leading-relaxed"
              style={{ color: '#7A746E' }}
            >
              A soft collection inspired by early light and quiet mornings. Handcrafted pieces that bring calm to your daily ritual.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block w-fit border border-[#3E3A36] bg-transparent px-5 py-2.5 font-sans text-[12px] uppercase tracking-[1px] text-[#3E3A36] transition-colors duration-300 ease-out hover:bg-[#3E3A36] hover:text-white"
            >
              Get a quote
            </Link>
          </FadeInSection>
          <FadeInSection>
            {lifestyleImage && (
              <div className="aspect-[4/5] overflow-hidden rounded-[12px]">
                <img
                  src={lifestyleImage}
                  alt="Sunrise collection"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </FadeInSection>
        </div>
      )}
    </>
  )

  if (embed) {
    return (
      <div className="mt-16 sm:mt-20 lg:mt-24">
        {content}
      </div>
    )
  }

  return (
    <section
      className="w-full py-[120px]"
      style={{ backgroundColor: '#F4EFE8' }}
      aria-labelledby={hideTitle ? undefined : 'bags-bedding-title'}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {content}
      </div>
    </section>
  )
}
