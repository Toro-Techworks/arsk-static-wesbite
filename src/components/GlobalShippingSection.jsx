import FadeInSection from './FadeInSection'

const ITEMS = [
  {
    title: 'Strategic Port Access',
    description: 'Our finished goods are transported from our facility to ports like Chennai, Mumbai, or Tuticorin, depending on the buyer\'s needs.',
  },
  {
    title: 'Seamless Logistics',
    description: 'We coordinate with reliable customs agents and ensure a smooth handover to the client\'s logistics partner.',
  },
  {
    title: 'Flexible Shipping Terms',
    description: 'Both FOB and CIF terms are supported to meet international shipping standards.',
  },
]

export default function GlobalShippingSection() {
  return (
    <section className="w-full bg-[#F3EEE6] py-16 sm:py-20 lg:py-24" aria-labelledby="global-shipping-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2
            id="global-shipping-heading"
            className="text-center font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-[#312E81] sm:text-4xl lg:text-5xl"
          >
            Global Shipping Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm uppercase tracking-wide text-[#312E81]/80 sm:text-base">
            Dedicated to quality, innovation, and customer satisfaction
          </p>
        </FadeInSection>
        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {ITEMS.map((item) => (
            <FadeInSection key={item.title}>
              <div className="rounded-2xl bg-white/60 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                <h3 className="font-sans text-lg font-semibold tracking-tight text-[#312E81] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
