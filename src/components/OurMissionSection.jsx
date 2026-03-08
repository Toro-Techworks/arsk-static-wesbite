// Placeholder illustration images — replace with your own sketch/illustration assets
const IMG_WEAVING =
  'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80'
const IMG_GLOBAL =
  'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80'
const IMG_SUSTAINABILITY =
  'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80'

const BLOCKS = [
  {
    type: 'text',
    title: 'OUR MISSION',
    description:
      'We deliver premium textile products crafted with precision, quality materials, and skilled weaving techniques that meet global standards.',
    bgColor: 'bg-[#8B2E2E]', // deep red / brand
  },
  {
    type: 'image',
    src: IMG_WEAVING,
    alt: 'Textile production and weaving',
  },
  {
    type: 'image',
    src: IMG_GLOBAL,
    alt: 'Global vision and export',
  },
  {
    type: 'text',
    title: 'OUR VISION',
    description:
      'Our goal is to expand globally while maintaining sustainable production practices and building long-term partnerships with international clients.',
    bgColor: 'bg-[#C75B39]', // warm orange
  },
  {
    type: 'text',
    title: 'OUR VALUES',
    description:
      'We believe in quality craftsmanship, ethical manufacturing, sustainability, and trusted relationships with customers worldwide.',
    bgColor: 'bg-[#2AA7A0]', // teal
  },
  {
    type: 'image',
    src: IMG_SUSTAINABILITY,
    alt: 'Sustainability, craftsmanship, and growth',
  },
]

function TextTile({ title, description, bgColor, className = '' }) {
  return (
    <div
      className={`flex h-full min-h-[260px] flex-col justify-center px-4 py-6 text-center sm:min-h-[320px] sm:px-8 sm:py-10 sm:text-left ${bgColor} text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] ${className}`}
    >
      <h3 className="font-serif text-xl font-medium uppercase tracking-[0.12em] sm:text-2xl lg:text-3xl">
        {title}
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed opacity-95 sm:mx-0 sm:mt-4 sm:text-base">
        {description}
      </p>
    </div>
  )
}

function ImageTile({ src, alt, className = '' }) {
  return (
    <div
      className={`flex h-full min-h-[220px] items-center justify-center bg-[#E8E4DF] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:min-h-[320px] sm:p-6 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full max-h-[200px] w-full max-w-full object-contain object-center drop-shadow-lg sm:max-h-[240px] sm:max-w-[320px]"
      />
    </div>
  )
}

export default function OurMissionSection() {
  return (
    <section
      className="w-full bg-[#F4EFE8] py-16 sm:py-20"
      aria-label="Our mission, vision, and values"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Mobile: single column, alternating order. Desktop: 2×3 checkerboard */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:grid-rows-3 sm:auto-rows-1fr">
          {BLOCKS.map((block, index) => {
            const mobileOrderClass = ['order-1', 'order-2', 'order-4', 'order-3', 'order-5', 'order-6'][index]
            return (
              <div
                key={index}
                className={`min-h-0 w-full ${mobileOrderClass} sm:order-none`}
              >
                {block.type === 'text' ? (
                  <TextTile
                    title={block.title}
                    description={block.description}
                    bgColor={block.bgColor}
                  />
                ) : (
                  <ImageTile src={block.src} alt={block.alt} />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
