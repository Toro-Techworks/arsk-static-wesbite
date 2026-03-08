import heroImage from '../assets/serene-bedroom.png'
import FadeInSection from './FadeInSection'
import ParallaxImage from './ParallaxImage'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full max-w-[100vw] min-w-0 items-center overflow-hidden"
    >
      {/* Background Parallax Image */}
      <ParallaxImage className="absolute inset-0 z-0 min-w-0">
        <img
          src={heroImage}
          alt="Premium textile interior"
          className="absolute left-1/2 top-1/2 h-[120%] min-h-full w-full min-w-0 max-w-[100vw] -translate-x-1/2 -translate-y-1/2 object-cover object-[76%_center] sm:min-h-0"
          style={{ willChange: 'transform' }}
        />
      </ParallaxImage>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:py-32">
        <FadeInSection className="max-w-xl space-y-4 sm:space-y-6">

          {/* Hero Title – Extra Light */}
          <h1
            className="text-3xl leading-tight tracking-[-0.03em] text-[#312E81] sm:text-4xl lg:text-6xl"
            style={{ fontFamily: '"Arial Rounded MT Semi-Bold", "Arial Rounded MT", Arial, sans-serif' }}
          >
            ARSK EXPORTS
          </h1>

          {/* Subheading */}
          <p className="font-sans text-xl font-light tracking-[-0.01em] text-primary sm:text-2xl">
            Weaving Excellence Since 1984
          </p>

          {/* Description */}
          <p className="text-base leading-relaxed text-text-muted sm:text-lg">
            A trusted textile manufacturer with 40+ years of expertise in weaving
            high-quality fabrics for global markets.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:gap-6 sm:pt-4">
            
            <a
              href="/products"
              className="group relative inline-flex justify-center overflow-hidden rounded-md border-2 border-primary px-5 py-3 text-sm font-light text-primary transition-colors duration-300 sm:px-6"
            >
              <span
                className="absolute left-0 top-0 h-full w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full"
                aria-hidden
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                OUR PRODUCTS
              </span>
            </a>

            <a
              href="/contact"
              className="group relative inline-flex justify-center overflow-hidden rounded-md border-2 border-primary px-5 py-3 text-sm font-light text-primary transition-colors duration-300 sm:px-6"
            >
              <span
                className="absolute left-0 top-0 h-full w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full"
                aria-hidden
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                GET IN TOUCH
              </span>
            </a>

          </div>

        </FadeInSection>
      </div>
    </section>
  )
}