import { useState, useEffect, useRef } from 'react'
import FadeInSection from './FadeInSection'
import bgImage from '../assets/Stock1.jpeg'

const STATS = [
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    targetValue: 49,
    suffix: '+ YEARS',
    description: 'Manufacturing Experience',
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.356 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.356 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    targetValue: 32,
    suffix: '+ Countries',
    description: 'Export Network',
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    targetValue: 25,
    suffix: 'M+ Meters',
    description: 'Fabrics Dispatched',
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    targetValue: 1000,
    suffix: '+ Happy Clients',
    description: 'Driving Textile Excellence',
  },
]

function animateValue(setValue, start, end, duration) {
  const startTime = Date.now()
  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const current = Math.floor(start + (end - start) * progress)
    setValue(current)
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  requestAnimationFrame(animate)
}

export default function StatsCertifications() {
  const [animatedValues, setAnimatedValues] = useState(STATS.map(() => 0))
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset values and animate
            setAnimatedValues(STATS.map(() => 0))
            STATS.forEach((stat, index) => {
              animateValue(
                (value) => {
                  setAnimatedValues((prev) => {
                    const newValues = [...prev]
                    newValues[index] = value
                    return newValues
                  })
                },
                0,
                stat.targetValue,
                2000 // 2 seconds
              )
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative flex min-h-screen w-full items-center bg-cover bg-center bg-no-repeat bg-attachment-fixed-desktop"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-2">
          <FadeInSection>
            <h2 className="font-sans font-[200] text-5xl tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              <span>Five Decades Of</span>
              <br />
              <span className="font-sans font-light tracking-[-0.01em] text-[#B8A897]" style={{ fontSize: '0.9em', display: 'block', marginTop: '0.5em' }}>Textile Excellence</span>
            </h2>
          </FadeInSection>

          <FadeInSection>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
              {STATS.map((stat, index) => (
                <div
                  key={stat.targetValue}
                  className="rounded-xl bg-[#F5F1EC] p-4 text-center shadow-xl opacity-80 transition-transform duration-300 hover:-translate-y-[6px] sm:rounded-2xl sm:p-6 lg:p-8"
                >
                  <div className="mb-3 flex justify-center text-black sm:mb-6 [&_svg]:h-8 [&_svg]:w-8 sm:[&_svg]:h-10 sm:[&_svg]:w-10">
                    {stat.icon}
                  </div>
                  <p className="mb-1 font-sans text-sm font-light tracking-[-0.01em] text-black sm:mb-2 sm:text-base lg:text-xl">
                    {animatedValues[index]}{stat.suffix}
                  </p>
                  <p className="font-sans text-xs font-light leading-relaxed text-black/80 sm:text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
