import { useEffect, useState, useRef } from 'react'
import ourStoryImage from '../assets/our-story.jpg'
import imgOfficeProduction from '../assets/Infrastructure/Office & Production House.jpg'
import imgWeavingFactory from '../assets/Infrastructure/Weaving Factory.jpg'
import imgDyeingPrinting from '../assets/Infrastructure/Dyeing & Printing.jpg'
import imgNeedleMetalDetector from '../assets/Infrastructure/Needle Metal Detector.jpg'
import imgSafetyLockers from '../assets/Infrastructure/Safety and Lockers.jpg'
import imgFinalPackaging from '../assets/Infrastructure/Final Packaging Line.jpg'
import ourStoryBg from '../assets/Our-Story_bg.jpg'
import OurMissionSection from '../components/OurMissionSection'

const BRAND_STORY = `We believe in the art of exceptional craftsmanship. From our roots in Karur to the world, ARSK Exports has dedicated decades to creating textiles that speak of quality, tradition, and timeless elegance. Every thread tells a story of passion and precision.`

// Based on ARSK Infrastructure: https://arskexports.in/infra.php — images from src/assets/Infrastructure
const PROCESS_STAGES = [
  { step: '01', title: 'Office & Production House', image: imgOfficeProduction, description: 'Spread across 26,000 sq/ft (2,400 sq/meter), our production facility is equipped with 30 high-speed stitching machines, shrink wrap machine, and 4 steam ironing tables — ensuring careful finishing and high-caliber output. Cutting, checking, finishes and packing under one roof.' },
  { step: '02', title: 'Weaving Factory', image: imgWeavingFactory, description: 'A working area of 6,500 sq/ft (600 sq/meter) housing 10 automatic looms — delivering intricate, high-caliber fabrics that bring your creative visions to life.' },
  { step: '03', title: 'Dyeing & Printing', image: imgDyeingPrinting, description: 'We collaborate with our trusted partner, SM Dyeing Works, for rich colors and accurate patterns. Strict quality control ensures exceptional finishes that align with your design requirements.' },
  { step: '04', title: 'Needle Metal Detector', image: imgNeedleMetalDetector, description: 'We use the HD760CE-20 Needle Metal Detector to identify even tiny metal contaminants (1.2 mm steel), ensuring every product meets the highest safety and quality standards.' },
  { step: '05', title: 'Safety and Lockers', image: imgSafetyLockers, description: 'Our building is equipped with CCTV cameras, smoke detectors, fire pipes, extinguishers, and clear safety signage. Each team member is provided a personal locker for securely storing their belongings.' },
  { step: '06', title: 'Final Packaging Line', image: imgFinalPackaging, description: 'Secure and moisture-resistant packaging using 5-ply or 7-ply corrugated carton boxes. Products are individually polybag-packed, labeled, and cartons sealed with straps and tapes. Custom branding and pallet packing available.' },
]

function ProcessFlowSection() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])
  const [visible, setVisible] = useState([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const index = Number(entry.target.dataset.index)
          setVisible((v) => (v.includes(index) ? v : [...v, index].sort((a, b) => a - b)))
        })
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    )
    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const isVisible = (i) => visible.includes(i)

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-20 md:py-28"
      aria-label="Our process"
      style={{
        backgroundImage: `url(${ourStoryBg})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability (background image stays full) */}
      <div className="absolute inset-0 bg-[#F4EFE8]/75" aria-hidden />

      <h2 className="relative z-10 text-center font-serif text-3xl font-medium tracking-[0.08em] text-[#4A3F36] md:text-4xl lg:text-[2.5rem]">
        OUR PROCESS
      </h2>

      <div className="relative z-10 mx-auto mt-14 max-w-6xl px-4 md:mt-20 md:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:gap-0">
          {PROCESS_STAGES.map((stage, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={stage.step} className="flex flex-col">
                {i > 0 && (
                  <div className="hidden md:flex md:justify-center md:py-3" aria-hidden>
                    <span className="text-[#6E625A]/40 text-lg">→</span>
                  </div>
                )}
                {/* Row: two columns on desktop — image on one side, content fills the other column on hover */}
                <div
                  ref={(el) => { cardRefs.current[i] = el }}
                  data-index={i}
                  className={`group/card grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 md:items-start ${isLeft ? 'md:mr-0' : 'md:mt-12'} ${isLeft ? '' : 'lg:gap-8'}`}
                  style={{
                    opacity: isVisible(i) ? 1 : 0,
                    transform: isVisible(i) ? 'translateY(0) translateX(0)' : `translateY(40px) translateX(${isLeft ? -28 : 28}px)`,
                    transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
                  }}
                >
                  {/* Column 1: left card = image; right card = content panel (other column) */}
                  {isLeft ? (
                    <>
                      <div className="overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(74,63,54,0.08)]">
                        <img src={stage.image} alt={stage.title} className="aspect-[4/3] w-full object-cover object-center" />
                      </div>
                      <div
                        className="flex min-h-[180px] flex-col justify-center rounded-2xl border border-white/30 bg-white/40 px-6 py-5 shadow-[0_8px_32px_rgba(255,255,255,0.15),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-xl transition-all duration-500 ease-out md:opacity-0 md:translate-x-[120%] md:group-hover/card:opacity-100 md:group-hover/card:translate-x-0"
                        style={{ pointerEvents: 'none' }}
                      >
                        <p className="text-xs font-medium tracking-[0.12em] text-[#6E625A]">{stage.step}</p>
                        <h3 className="mt-1 font-sans text-lg font-bold uppercase tracking-wide text-[#4A3F36]">{stage.title}</h3>
                        <p className="mt-3 text-[14px] leading-relaxed text-[#6E625A]" style={{ lineHeight: 1.7 }}>{stage.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="flex min-h-[180px] flex-col justify-center rounded-2xl bg-white/40 px-6 py-5 shadow-[0_8px_32px_rgba(74,63,54,0.1)] backdrop-blur-sm transition-all duration-500 ease-out md:opacity-0 md:-translate-x-[120%] md:group-hover/card:opacity-100 md:group-hover/card:translate-x-0 order-2 md:order-1"
                        style={{ pointerEvents: 'none' }}
                      >
                        <p className="text-xs font-medium tracking-[0.12em] text-[#6E625A]">{stage.step}</p>
                        <h3 className="mt-1 font-sans text-lg font-bold uppercase tracking-wide text-[#4A3F36]">{stage.title}</h3>
                        <p className="mt-3 text-[14px] leading-relaxed text-[#6E625A]" style={{ lineHeight: 1.7 }}>{stage.description}</p>
                      </div>
                      <div className="overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(74,63,54,0.08)] order-1 md:order-2">
                        <img src={stage.image} alt={stage.title} className="aspect-[4/3] w-full object-cover object-center" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function OurStory() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = requestAnimationFrame(() => setTimeout(() => setMounted(true), 50))
    return () => cancelAnimationFrame(t)
  }, [])

  return (
    <div
      className="min-h-screen w-full bg-[#EFE7DC]"
      style={{ minHeight: '100vh' }}
    >
      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left on desktop: Text */}
        <div className="flex flex-col justify-center lg:order-1">
          <h1
            className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-[#4A3F36] sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <span className="block">OUR</span>
            <span className="block">STORY</span>
          </h1>

          <p
            className="mt-8 max-w-[500px] text-[#6E625A] leading-relaxed sm:text-lg"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            }}
          >
            {BRAND_STORY}
          </p>

          <p
            className="mt-16 font-serif text-sm italic tracking-wide text-[#6E625A]"
            style={{
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.6s ease 0.3s',
            }}
          >
            — ARSK Exports
          </p>
        </div>

        {/* Right on desktop (top on mobile): Image */}
        <div
          className="relative order-first overflow-hidden rounded-2xl lg:order-2"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.6s ease 0.25s',
          }}
        >
          <img
            src={ourStoryImage}
            alt="Our story — ARSK Exports"
            className="h-[70vh] w-full object-cover object-center lg:h-[85vh]"
            style={{
              filter: 'sepia(0.08) saturate(1.05)',
            }}
          />
        </div>
      </div>
      <ProcessFlowSection />
      <OurMissionSection />
    </div>
  )
}
