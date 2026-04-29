import { useState, useEffect } from 'react'
import FadeInSection from './FadeInSection'
import cert1 from '../assets/Certificates/arsk_certification_1.jpeg'
import cert2 from '../assets/Certificates/arsk_certification_2.avif'
import cert3 from '../assets/Certificates/arsk_certification_3.avif'
import cert4 from '../assets/Certificates/arsk_certification_4.png'

// High-resolution previews for lightbox
import certPreview1 from '../assets/Certificates/CERTIFICATE1.png'
import certPreview2 from '../assets/Certificates/CERTIFICATE2.png'
import certPreview3 from '../assets/Certificates/CERTIFICATE3.png'
import certPreview4 from '../assets/Certificates/CERTIFICATE4.png'

const CERTIFICATES = [
  { src: cert1, preview: certPreview1, alt: 'ARSK certification 1' },
  { src: cert3, preview: certPreview3, alt: 'ARSK certification 3' },
  { src: cert2, preview: certPreview2, alt: 'ARSK certification 2' },
  { src: cert4, preview: certPreview4, alt: 'ARSK certification 4' },
]

const YOUTUBE_VIDEO_ID = 'dLUA61zpBb0?si=ieJ3OGqw0kbY5mMT'
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`

export default function WhoWeAre() {
  const [activeCert, setActiveCert] = useState(null)

  useEffect(() => {
    if (!activeCert) return
    const handleEsc = (e) => {
      if (e.key === 'Escape') setActiveCert(null)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [activeCert])

  return (
    <section className="flex min-h-screen w-full items-center bg-[#F3EEE6] px-4 py-16 sm:px-6 sm:py-20 lg:pt-32 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid w-full grid-cols-1 items-center gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-2">
          <FadeInSection className="order-1 space-y-6 text-left sm:space-y-8 lg:order-2 lg:ml-auto lg:text-right">
            <h2 className="font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-[#312E81] sm:text-4xl lg:text-5xl">
              Who We Are?
            </h2>

            <p className="max-w-lg font-sans text-base font-light leading-relaxed tracking-[-0.01em] text-[#4B5563] sm:text-lg lg:ml-auto">
              At{' '}
              <span style={{ fontFamily: '"Arial Rounded MT Semi-Bold", "Arial Rounded MT", Arial, sans-serif' }}>
                ARSK EXPORTS
              </span>
              , we combine expertise, creativity, and careful craftsmanship across our two facilities — an office and
              production house alongside a weaving factory. Spanning a total of 32,000 sq. feet / 3,000 sq. meters, our
              integrated setup allows us to oversee every step of production with precision.
            </p>
          </FadeInSection>

          <FadeInSection className="order-2 lg:order-1">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg sm:rounded-2xl">
              <iframe
                src={YOUTUBE_EMBED_URL}
                title="ARSK Exports video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </FadeInSection>
        </div>

        {/* Certifications – common below Who We Are and YouTube */}
        <div className="mt-16 overflow-hidden sm:mt-20">
          <p
            id="who-we-are-certificates-hint"
            className="mb-6 text-center font-sans text-sm font-semibold leading-[1.5] tracking-heading text-[#4B5563] sm:mb-8 sm:text-base"
          >
            Click to view the certificates
          </p>
          <div
            className="grid grid-cols-2 items-center justify-items-center gap-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-20 lg:gap-28"
            role="group"
            aria-labelledby="who-we-are-certificates-hint"
          >
            {CERTIFICATES.map((cert, index) => {
              const isLarge = index === 1 || index === 2
              const isLast = index === CERTIFICATES.length - 1
              return (
                <img
                  key={cert.alt}
                  src={cert.src}
                  alt={cert.alt}
                  onClick={() => setActiveCert(cert)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveCert(cert)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`shrink-0 w-auto cursor-pointer object-contain opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#312E81] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3EEE6] 
                    ${
                      isLast
                        ? 'max-h-14 sm:max-h-20 lg:max-h-24'
                        : isLarge
                          ? 'max-h-14 sm:max-h-20 lg:max-h-24'
                          : 'max-h-10 sm:max-h-14 lg:max-h-16'
                    }`}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Certificate preview modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveCert(null)
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-hidden rounded-2xl bg-[#F3EEE6] shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveCert(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#3E3A36] shadow-md transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#6b5b4d] focus:ring-offset-2 focus:ring-offset-[#F3EEE6]"
              aria-label="Close certificate preview"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex max-h-[90vh] items-center justify-center bg-[#E8E4DF] p-4">
              <img
                src={activeCert.preview || activeCert.src}
                alt={activeCert.alt}
                className="max-h-[80vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}