import { Link } from 'react-router-dom'
import FadeInSection from './FadeInSection'

const curtainImages = import.meta.glob(
  '../assets/Curtains/*.{png,jpg,jpeg,avif}',
  { eager: true, import: 'default' }
)
const imageEntries = Object.entries(curtainImages)
const lifestyleImage = imageEntries[8]?.[1] ?? null

export default function SunriseSection() {
  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#eae3db' }}
      aria-label="Sunrise collection"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
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
      </div>
    </section>
  )
}
