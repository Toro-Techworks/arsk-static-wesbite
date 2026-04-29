export default function ProcessStepCard({
  step,
  title,
  description,
  image,
  side = 'left',
  isVisible = false,
  delayMs = 0,
}) {
  const justify =
    side === 'left'
      ? 'md:justify-start md:pr-10'
      : 'md:justify-end md:pl-10'

  return (
    <div className="relative">
      {/* Timeline node */}
      <div
        className="pointer-events-none absolute left-6 top-6 z-20 h-4 w-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
        aria-hidden
      >
        <div
          className={[
            'absolute inset-0 rounded-full border border-[#E8E1D9] bg-white/60',
            'origin-center transition-transform duration-700 ease-out',
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
          ].join(' ')}
          style={{ transitionDelay: `${delayMs}ms` }}
        >
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#312E81]" />
        </div>
      </div>

      {/* Step card placement */}
      <div className={`flex w-full justify-start ${justify}`}>
        <div className="w-full md:w-[480px]">
          {/* Reveal wrapper */}
          <div
            className={[
              'transition-all duration-700 ease-out',
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
            ].join(' ')}
            style={{ transitionDelay: `${delayMs}ms` }}
          >
            <article
              className={[
                'group relative overflow-hidden rounded-2xl border border-[#E8E1D9] bg-white/70 backdrop-blur-[2px]',
                'shadow-[0_10px_30px_rgba(49,46,129,0.06)]',
                'transition-all duration-300',
                'hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(49,46,129,0.10)]',
              ].join(' ')}
            >
              <div className="p-6 sm:p-7">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={title}
                    className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-6">
                  <p className="font-sans text-xs font-light tracking-[0.22em] text-[#8A7F76]">
                    {step}
                  </p>
                  <h3 className="mt-2 font-sans text-lg font-medium tracking-wide text-[#312E81] sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-3 font-sans text-base font-light leading-[1.75] text-[#5C5148]">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

