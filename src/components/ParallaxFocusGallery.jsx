import { useRef, useState, useEffect } from 'react'

const productImages = import.meta.glob(
  '../assets/Product images/**/*.{png,jpg,jpeg,avif}',
  { eager: true, import: 'default' }
)

const products = Object.entries(productImages).slice(0, 9).map(([path, image], index) => ({
  id: index + 1,
  image,
}))

const CARD_WIDTH = 380
const GAP = 80
const CONTAINER_PADDING = 80

function getTransformStyles(centerX, itemLeft, itemWidth) {
  const itemCenter = itemLeft + itemWidth / 2
  const distanceFromCenter = itemCenter - centerX
  const maxDistance = (CARD_WIDTH + GAP) * 2
  const normalized = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance))

  const scale = 0.85 + (1 - Math.abs(normalized)) * 0.15
  const rotateY = normalized * 12
  const translateZ = (1 - Math.abs(normalized)) * 80
  const zIndex = Math.round(100 + (1 - Math.abs(normalized)) * 50)
  const shadowOpacity = 0.04 + (1 - Math.abs(normalized)) * 0.12

  return {
    transform: `rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`,
    zIndex,
    boxShadow: `0 24px 48px rgba(0,0,0,${shadowOpacity})`,
  }
}

export default function ParallaxFocusGallery() {
  const scrollRef = useRef(null)
  const [itemStyles, setItemStyles] = useState([])
  const rafRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container || products.length === 0) return

    const updateTransforms = () => {
      const { scrollLeft, clientWidth } = container
      const centerX = scrollLeft + clientWidth / 2

      const cards = container.querySelectorAll('[data-gallery-card]')
      const newStyles = []

      cards.forEach((card, index) => {
        const itemLeft = CONTAINER_PADDING + index * (CARD_WIDTH + GAP)
        const styles = getTransformStyles(centerX, itemLeft, CARD_WIDTH)
        newStyles.push(styles)
      })

      setItemStyles(newStyles)
    }

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateTransforms)
    }

    updateTransforms()
    container.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (products.length === 0) return null

  return (
    <section
      className="w-full py-[140px]"
      style={{ backgroundColor: '#eae3db' }}
      aria-label="Our collection gallery"
    >
      <h2
        className="mb-16 text-center font-serif text-3xl font-medium uppercase tracking-[0.15em] sm:text-4xl lg:text-5xl"
        style={{ color: '#2e2a26' }}
      >
        Our Collection
      </h2>

      <div
        ref={scrollRef}
        className="parallax-gallery-scroll overflow-x-auto overflow-y-visible px-4 scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: CONTAINER_PADDING,
          paddingRight: CONTAINER_PADDING,
          perspective: '1200px',
        }}
        aria-label="Scrollable product gallery"
      >
        <style>{`
          .parallax-gallery-scroll::-webkit-scrollbar { display: none; }
        `}</style>
        <div
          className="flex items-center"
          style={{
            gap: GAP,
            minWidth: 'max-content',
            transformStyle: 'preserve-3d',
            paddingRight: `calc(50vw - ${CARD_WIDTH / 2}px - ${CONTAINER_PADDING}px)`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              data-gallery-card
              className="flex-shrink-0 overflow-hidden rounded-[32px] transition-transform duration-[600ms] ease-out"
              style={{
                width: CARD_WIDTH,
                height: 500,
                ...(itemStyles[index] || {}),
              }}
            >
              <img
                src={product.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
