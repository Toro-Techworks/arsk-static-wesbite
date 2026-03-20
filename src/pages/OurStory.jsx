import { useEffect, useState, useRef } from 'react'
import imgOfficeProduction from '../assets/Infrastructure/Office & Production House.jpg'
import imgWeavingFactory from '../assets/Infrastructure/Weaving Factory.jpg'
import imgDyeingPrinting from '../assets/Infrastructure/Dyeing & Printing.jpg'
import imgNeedleMetalDetector from '../assets/Infrastructure/Needle Metal Detector.jpg'
import imgSafetyLockers from '../assets/Infrastructure/Safety and Lockers.jpg'
import imgFinalPackaging from '../assets/Infrastructure/Final Packaging Line.jpg'
import OurStoryHeroSection from '../components/OurStoryHeroSection'
import ProcessStepCard from '../components/ProcessStepCard'

const BRAND_STORY = `We believe in the art of exceptional craftsmanship. From our roots in Karur to the world, ARSK Exports has dedicated decades to creating textiles that speak of quality, tradition, and timeless elegance. Every thread tells a story of passion and precision.`

// Based on ARSK Infrastructure: https://arskexports.in/infra.php — images from src/assets/Infrastructure
const PROCESS_STAGES = [
  { step: '01', title: 'Office & Production House', image: imgOfficeProduction, description: 'Spread across 26,000 sq/ft (2,400 sq/meter), our production facility is equipped with 30 high-speed stitching machines, shrink wrap machine, and 4 steam ironing tables — ensuring careful finishing and high-caliber output. Cutting, checking, finishes and packing under one roof.' },
  { step: '02', title: 'Weaving Factory', image: imgWeavingFactory, description: 'A working area of 6,500 sq/ft (600 sq/meter) housing 10 automatic looms — delivering intricate, high-caliber fabrics that bring your creative visions to life.' },
  { step: '03', title: 'Dyeing', image: imgDyeingPrinting, description: 'We collaborate with our trusted partner, SM Dyeing Works, for rich colors and accurate patterns. Strict quality control ensures exceptional finishes that align with your design requirements.' },
  { step: '04', title: 'Needle Metal Detector', image: imgNeedleMetalDetector, description: 'We use the HD760CE-20 Needle Metal Detector to identify even tiny metal contaminants (1.2 mm steel), ensuring every product meets the highest safety and quality standards.' },
  { step: '05', title: 'Safety and Lockers', image: imgSafetyLockers, description: 'Our building is equipped with CCTV cameras, smoke detectors, fire pipes, extinguishers, and clear safety signage. Each team member is provided a personal locker for securely storing their belongings.' },
  { step: '06', title: 'Final Packaging Line', image: imgFinalPackaging, description: 'Secure and moisture-resistant packaging using 5-ply or 7-ply corrugated carton boxes. Products are individually polybag-packed, labeled, and cartons sealed with straps and tapes. Custom branding and pallet packing available.' },
]

function ProcessFlowSection() {
  const sectionRef = useRef(null)
  const stepRefs = useRef([])
  const [visible, setVisible] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const index = Number(entry.target.dataset.index)
          setVisible((v) => (v.includes(index) ? v : [...v, index].sort((a, b) => a - b)))
        })
      },
      { rootMargin: '0px 0px -25% 0px', threshold: 0.15 }
    )

    stepRefs.current.forEach((el) => {
      if (!el) return
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const isVisible = (i) => visible.includes(i)

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F8F4EC] to-[#F3EEE6] py-20 md:py-28"
      aria-label="Our process"
    >
      <h2 className="relative z-10 text-center font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-[#312E81] sm:text-4xl lg:text-5xl">
        Our Process
      </h2>

      <div className="relative z-10 mx-auto mt-14 max-w-6xl px-4 md:mt-20 md:px-6 lg:px-8">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#E8E1D9] md:left-1/2 md:-translate-x-1/2" aria-hidden />

          <ol className="relative z-10 flex flex-col gap-24">
            {PROCESS_STAGES.map((stage, i) => {
              const side = i % 2 === 0 ? 'left' : 'right'
              const delayMs = i * 140

              return (
                <li
                  key={stage.step}
                  className="w-full"
                  ref={(el) => {
                    stepRefs.current[i] = el
                  }}
                  data-index={i}
                >
                  <ProcessStepCard
                    step={stage.step}
                    title={stage.title}
                    description={stage.description}
                    image={stage.image}
                    side={side}
                    isVisible={isVisible(i)}
                    delayMs={delayMs}
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default function OurStory() {
  return (
    <div
      className="min-h-screen w-full bg-[#F3EEE6]"
      style={{ minHeight: '100vh' }}
    >
      <OurStoryHeroSection />
      <ProcessFlowSection />
    </div>
  )
}
