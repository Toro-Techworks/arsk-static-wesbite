import { useState } from 'react'
import { Link } from 'react-router-dom'

const FEATURES = [
  {
    title: 'Seamless Logistics',
    description: 'We coordinate with reliable customs agents and ensure a smooth handover to the client\'s logistics partner.',
    cta: 'Learn more',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80',
    imageAlt: 'Cargo container port',
  },
  {
    title: 'Strategic Port Access',
    description: 'Our finished goods are transported from our facility to ports like Chennai, Mumbai, or Tuticorin, depending on the buyer\'s needs.',
    cta: 'Learn more',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    imageAlt: 'Textile packaging warehouse',
  },
  {
    title: 'Flexible Shipping Terms',
    description: 'Both FOB and CIF terms are supported to meet international shipping standards.',
    cta: 'Learn more',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    imageAlt: 'Global shipping logistics',
  },
]

export default function GlobalShippingSolutions() {
  const [hovered, setHovered] = useState(null)

  return (
    <section
      className="w-full bg-[#F8F6F2] py-20 sm:py-24 lg:py-32"
      aria-labelledby="global-shipping-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <header className="mb-16 text-center lg:mb-20">
          <h2
            id="global-shipping-heading"
            className="text-center font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-text-charcoal sm:text-4xl lg:text-5xl"
          >
            Global Shipping Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-[15px] tracking-wide text-[#6E625A] sm:text-base">
            Reliable international delivery for textile exports.
          </p>
        </header>

        {/* Feature blocks – alternating layout, card overlaps image on desktop */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {FEATURES.map((feature, i) => {
            const isReversed = i % 2 === 1
            return (
              <div
                key={feature.title}
                className="relative flex flex-col gap-6 lg:min-h-[360px] lg:flex-row lg:items-center lg:gap-0"
              >
                {/* Image – full width mobile; left or right column on desktop */}
                <div
                  className={`relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:absolute lg:h-[360px] lg:w-[55%] ${isReversed ? 'lg:right-0 lg:rounded-l-2xl' : 'lg:left-0 lg:rounded-r-2xl'}`}
                >
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Floating card – below image on mobile; overlaps image on desktop */}
                <div
                  className={`relative z-10 lg:absolute lg:top-1/2 lg:w-[48%] lg:-translate-y-1/2 ${isReversed ? 'lg:left-0 lg:pl-4' : 'lg:right-0 lg:pr-4'}`}
                >
                  <div
                    className="rounded-2xl bg-[#F4EFE8] p-6 shadow-[0_8px_32px_rgba(74,63,54,0.12)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(74,63,54,0.15)] sm:p-8"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <h3 className="font-sans font-[200] text-xl leading-tight tracking-[-0.03em] text-text-charcoal sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#6E625A]">
                      {feature.description}
                    </p>
                    <Link
                      to="/our-story"
                      className="group mt-6 relative inline-block rounded-full border-2 border-[#2F3A8F] px-5 py-2.5 text-sm font-light text-[#2F3A8F] bg-[#F0EEE9] transition-colors duration-300 overflow-hidden"
                    >
                      <span
                        className="absolute left-0 top-0 h-full w-0 bg-[#2F3A8F] transition-[width] duration-300 ease-out group-hover:w-full rounded-full"
                        aria-hidden
                      />
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        {feature.cta}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
