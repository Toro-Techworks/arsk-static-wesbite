import FadeInSection from './FadeInSection'

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

export default function LuxuryProductSection({ hideTitle = false, embed = false }) {
  if (products.length === 0) return null

  const content = (
    <>
      {!hideTitle && (
        <h2
          id="bags-bedding-title"
          className="mb-[60px] text-center font-serif text-2xl font-medium uppercase tracking-[0.12em] sm:text-3xl"
          style={{ color: '#3E3A36' }}
        >
          Bags & Bedding
        </h2>
      )}

      <div className={`grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[40px] ${hideTitle ? 'mt-0' : ''}`}>
          {products.map((product) => (
            <FadeInSection key={product.id}>
              <article className="group">
                <div className="aspect-square overflow-hidden rounded-[12px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4">
                  <p
                    className="font-sans text-[14px] uppercase tracking-[1px]"
                    style={{ color: '#3E3A36' }}
                  >
                    {product.name}
                  </p>
                  <button
                    type="button"
                    className="mt-4 border border-[#3E3A36] bg-transparent px-5 py-2.5 font-sans text-[12px] uppercase tracking-[1px] text-[#3E3A36] transition-colors duration-300 ease-out hover:bg-[#3E3A36] hover:text-white"
                  >
                    View Details
                  </button>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>

        {/* Promo split section */}
        <div className="mt-24 grid grid-cols-1 gap-12 lg:mt-32 lg:grid-cols-2 lg:items-center lg:gap-16">
          <FadeInSection className="flex flex-col justify-center">
            <h3
              className="font-serif text-2xl font-medium uppercase tracking-[0.1em] sm:text-3xl"
              style={{ color: '#3E3A36' }}
            >
              Sunrise
            </h3>
            <p
              className="mt-4 max-w-md font-sans text-base font-light leading-relaxed"
              style={{ color: '#7A746E' }}
            >
              A soft collection inspired by early light and quiet mornings. Handcrafted pieces that bring calm to your daily ritual.
            </p>
            <button
              type="button"
              className="mt-6 w-fit border border-[#3E3A36] bg-transparent px-5 py-2.5 font-sans text-[12px] uppercase tracking-[1px] text-[#3E3A36] transition-colors duration-300 ease-out hover:bg-[#3E3A36] hover:text-white"
            >
              Discover collection
            </button>
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
