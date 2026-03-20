import FadeInSection from './FadeInSection'
import { Eye, Target } from 'lucide-react'
import { useMemo } from 'react'

function FloatingImages() {
  const desktopCards = useMemo(
    () => [
      {
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
        alt: 'Team collaborating in a modern workspace',
        left: '3%',
        top: '2%',
        width: '220px',
        height: '280px',
        radius: '24px',
      },
      {
        src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80',
        alt: 'Office interior with warm light',
        left: '22%',
        top: '18%',
        width: '170px',
        height: '220px',
        radius: '20px',
      },
      {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
        alt: 'Coworking space with people working',
        left: '40%',
        top: '0%',
        width: '260px',
        height: '190px',
        radius: '24px',
      },
      {
        src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
        alt: 'Workspace desk and laptop',
        left: '61%',
        top: '12%',
        width: '210px',
        height: '240px',
        radius: '22px',
      },
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
        alt: 'Discussion with colleagues',
        left: '76%',
        top: '5%',
        width: '150px',
        height: '210px',
        radius: '20px',
      },
      {
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
        alt: 'Creative workspace and ideas',
        left: '7%',
        top: '55%',
        width: '200px',
        height: '170px',
        radius: '22px',
      },
      {
        src: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80',
        alt: 'People working together',
        left: '32%',
        top: '52%',
        width: '170px',
        height: '210px',
        radius: '20px',
      },
      {
        src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
        alt: 'Modern office meeting',
        left: '53%',
        top: '58%',
        width: '250px',
        height: '160px',
        radius: '24px',
      },
      {
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
        alt: 'Team reviewing documents',
        left: '78%',
        top: '52%',
        width: '170px',
        height: '220px',
        radius: '20px',
      },
      {
        src: 'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&w=900&q=80',
        alt: 'Focused work environment',
        left: '14%',
        top: '32%',
        width: '160px',
        height: '190px',
        radius: '20px',
      },
      {
        src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80',
        alt: 'People working at a desk',
        left: '48%',
        top: '30%',
        width: '190px',
        height: '220px',
        radius: '22px',
      },
      {
        src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
        alt: 'Team productivity and collaboration',
        left: '66%',
        top: '35%',
        width: '170px',
        height: '170px',
        radius: '22px',
      },
    ],
    []
  )

  const mobileCards = useMemo(
    () => [
      {
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
        alt: 'Team collaborating',
      },
      {
        src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80',
        alt: 'Office interior',
      },
      {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
        alt: 'Coworking space',
      },
      {
        src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
        alt: 'Workspace desk',
      },
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
        alt: 'Colleagues discussion',
      },
      {
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        alt: 'Creative workspace',
      },
      {
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        alt: 'Team reviewing documents',
      },
      {
        src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
        alt: 'Modern office meeting',
      },
    ],
    []
  )

  return (
    <div className="relative w-full">
      {/* Desktop collage */}
      <div className="relative hidden h-[560px] w-full lg:block">
        {desktopCards.map((card, idx) => (
          <div
            key={idx}
            className="absolute overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.05]"
            style={{
              left: card.left,
              top: card.top,
              width: card.width,
              height: card.height,
              borderRadius: card.radius,
            }}
          >
            <img src={card.src} alt={card.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      {/* Mobile collage (fewer images) */}
      <div className="grid grid-cols-2 gap-3 lg:hidden">
        {mobileCards.map((card) => (
          <div
            key={card.src}
            className="overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.03]"
          >
            <img src={card.src} alt={card.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

function MissionVisionCards() {
  const cards = useMemo(
    () => [
      {
        icon: Target,
        label: 'What drives us',
        title: 'Mission',
        description:
          'To deliver premium textile products crafted with precision, superior materials, and trusted craftsmanship for global markets.',
      },
      {
        icon: Eye,
        label: 'What we aim for',
        title: 'Vision',
        description:
          'To become a globally recognized textile export partner known for innovation, sustainability, and long-term client value.',
      },
    ],
    []
  )

  return (
    <FadeInSection className="mt-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((c) => {
          const Icon = c.icon
          return (
            <div
              key={c.title}
              className="group rounded-2xl border border-[#E8E1D9] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)]"
              aria-label={`${c.title} card`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F4EC] text-[#312E81] transition-colors group-hover:bg-[#F3EEE6]">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-light uppercase tracking-[0.12em] text-[#8A7F76]">
                    {c.label}
                  </p>
                  <h3 className="mt-1 font-sans text-xl font-medium tracking-wide text-[#312E81]">
                    {c.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 max-w-md font-sans text-base font-light leading-relaxed text-[#5C5148]">
                {c.description}
              </p>
            </div>
          )
        })}
      </div>
    </FadeInSection>
  )
}

function HeroSection() {
  return (
    <section className="w-full bg-[#F3EEE6]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pb-16">
        <div className="relative">
          <FadeInSection>
            <FloatingImages />
          </FadeInSection>
          <div className="relative z-10 mx-auto mt-6 max-w-2xl text-center">
            <FadeInSection>
              <div className="inline-flex items-center rounded-full border border-[#D4CFC7] bg-[#F8F4EC] px-4 py-2 text-xs font-sans font-light uppercase tracking-[0.12em] text-[#312E81]">
                Our Story
              </div>
              <h1 className="mt-8 text-[44px] font-sans font-bold leading-[1.05] tracking-[-0.03em] text-[#312E81] sm:text-[52px]">
                <span className="block">Crafting Trust</span>
                <span className="block">One Thread at a Time</span>
              </h1>
              <p className="mt-6 text-base font-sans font-light leading-relaxed text-[#4B5563] sm:text-lg">
                ARSK Exports has built its reputation on craftsmanship, quality materials, and dependable
                partnerships. Here’s how our journey became a modern textile promise.
              </p>
            </FadeInSection>
            <MissionVisionCards />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function OurStoryHeroSection() {
  return <HeroSection />
}

