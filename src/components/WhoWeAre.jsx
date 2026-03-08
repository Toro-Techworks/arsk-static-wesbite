import FadeInSection from './FadeInSection'
import ParallaxImage from './ParallaxImage'
import cert1 from '../assets/Certificates/arsk_certification_1.jpeg'
import cert2 from '../assets/Certificates/arsk_certification_2.avif'
import cert3 from '../assets/Certificates/arsk_certification_3.avif'
import cert4 from '../assets/Certificates/arsk_certification_4.png'

const CERTIFICATES = [
  { src: cert1, alt: 'ARSK certification 1' },
  { src: cert2, alt: 'ARSK certification 2' },
  { src: cert3, alt: 'ARSK certification 3' },
  { src: cert4, alt: 'ARSK certification 4' },
]

const YOUTUBE_VIDEO_ID = 'iT58LnFxDz8'
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`

export default function WhoWeAre() {
  return (
    <section className="flex min-h-screen w-full items-center bg-[#F3EEE6] px-4 py-16 sm:px-6 sm:py-20 lg:pt-32 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid w-full grid-cols-1 items-center gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-2">
          <FadeInSection className="order-1 space-y-6 text-left sm:space-y-8 lg:order-2 lg:ml-auto lg:text-right">
            <h2 className="font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-[#312E81] sm:text-4xl lg:text-5xl">
              Who We Are?
            </h2>

            <p className="max-w-lg font-sans text-base font-light leading-relaxed tracking-[-0.01em] text-[#4B5563] sm:text-lg lg:ml-auto">
            At ARSK EXPORTS, we combine expertise, creativity, and careful craftsmanship across our two facilities — an office and production house alongside a weaving factory. Spanning a total of 32,000 sq. feet / 3,000 sq. meters, our integrated setup allows us to oversee every step of production with precision.
            </p>
          </FadeInSection>

          <FadeInSection className="order-2 lg:order-1">
            <ParallaxImage className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg sm:rounded-2xl">
              <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl">
                <iframe
                  src={YOUTUBE_EMBED_URL}
                  title="ARSK Exports video"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </ParallaxImage>
          </FadeInSection>
        </div>

        {/* Certifications – common below Who We Are and YouTube */}
        <div className="mt-16 overflow-hidden sm:mt-20">
          <div className="flex flex-wrap items-center justify-center gap-14 sm:gap-20 lg:gap-28">
            {CERTIFICATES.map((cert, index) => (
              <img
                key={cert.alt}
                src={cert.src}
                alt={cert.alt}
                className={`shrink-0 w-auto object-contain opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0 
                  ${index === 1 || index === 2 
                    ? 'max-h-14 sm:max-h-20 lg:max-h-24' 
                    : 'max-h-10 sm:max-h-14 lg:max-h-16'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}