import { useState } from 'react'

const MISSIONS = [
  {
    step: '01',
    title: 'Commitment to Quality',
    description: 'We ensure every fabric produced meets international quality standards through strict material selection and weaving processes.',
    color: '#FF7A00',
  },
  {
    step: '02',
    title: 'Sustainable Production',
    description: 'Our weaving facilities focus on sustainable methods that minimize waste and protect natural resources.',
    color: '#1F7A4D',
  },
  {
    step: '03',
    title: 'Global Partnerships',
    description: 'We collaborate with international clients to deliver reliable textile export solutions worldwide.',
    color: '#2AA7A0',
  },
]

function Connector() {
  return (
    <div
      className="hidden h-4 w-10 flex-shrink-0 rounded-full bg-gray-300 shadow-inner lg:block"
      style={{ marginLeft: '-6px', marginRight: '-6px', zIndex: 2 }}
      aria-hidden
    />
  )
}

export default function OurMission() {
  const [hovered, setHovered] = useState(null)

  return (
    <section
      className="w-full bg-[#F8F6F2] py-20 sm:py-24 lg:py-32"
      aria-labelledby="our-mission-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center lg:mb-20">
          <h2
            id="our-mission-heading"
            className="font-serif text-3xl font-medium tracking-tight text-[#4A3F36] sm:text-4xl lg:text-[2.5rem]"
          >
            Our Mission
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] tracking-wide text-[#6E625A] sm:text-base">
            Delivering premium textile craftsmanship to the world.
          </p>
        </header>

        <div className="space-y-24 lg:space-y-32">
          {MISSIONS.map((mission, i) => {
            const numberLeft = i % 2 === 0
            const numberCircle = (
              <div
                className="flex h-[160px] w-[160px] flex-shrink-0 items-center justify-center rounded-full text-3xl font-semibold text-white transition-transform duration-300 hover:scale-105 sm:h-[180px] sm:w-[180px] sm:text-4xl lg:h-[200px] lg:w-[200px] lg:text-[2rem]"
                style={{
                  backgroundColor: mission.color,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.15)',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {mission.step}
              </div>
            )
            const textCircle = (
              <div
                className={`flex min-h-[160px] w-full max-w-[320px] flex-col justify-center rounded-full bg-[#F4EFE8] px-6 py-6 shadow-[0_16px_48px_rgba(74,63,54,0.12)] transition-all duration-300 sm:min-h-0 sm:max-w-[360px] lg:h-[200px] lg:w-[200px] lg:max-w-none lg:px-8 lg:py-8 ${hovered === i ? 'ring-2 ring-[#4A3F36]/20' : ''}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <h3 className="font-serif text-lg font-medium text-[#4A3F36] sm:text-xl">
                  {mission.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6E625A] font-sans sm:text-[15px]">
                  {mission.description}
                </p>
              </div>
            )

            return (
              <div
                key={mission.step}
                className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-0"
              >
                {numberLeft ? (
                  <>
                    {numberCircle}
                    <Connector />
                    {textCircle}
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">{textCircle}</div>
                    <Connector />
                    <div className="order-1 lg:order-2">{numberCircle}</div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
