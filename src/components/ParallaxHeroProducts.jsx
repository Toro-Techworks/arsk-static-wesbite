import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const productsBgModules = import.meta.glob('../assets/products.jpeg', { eager: true, import: 'default' });
const defaultBg = Object.values(productsBgModules)[0] ?? null;

/**
 * Cinematic scroll-triggered parallax hero for "Our Products".
 * Background scales on scroll, text fades up, left-aligned luxury layout.
 */
export default function ParallaxHeroProducts({ backgroundImage = defaultBg }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    scale: 1,
    textOpacity: 0,
    textY: 40,
  });

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!section || !bg || !content) return;

    let ticking = false;
    function update() {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress 0 = section entering from bottom (rect.top = vh), 1 = section top at viewport top (rect.top = 0)
      const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));

      // Background scale: 1 → 1.1 as we scroll through
      const scale = 1 + 0.1 * progress;

      // Text: fade in and move up in first 40% of progress
      const textProgress = Math.min(1, progress / 0.4);
      const textOpacity = textProgress;
      const textY = 40 * (1 - textProgress);

      setScrollState({ scale, textOpacity, textY });
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update(); // initial
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bgUrl = backgroundImage && (typeof backgroundImage === 'string' ? backgroundImage : backgroundImage);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-neutral-900"
      style={{ height: '100vh' }}
      aria-label="Our Products"
    >
      {/* Background image with scale and brightness */}
      {bgUrl && (
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgUrl})`,
            transform: `scale(${scrollState.scale})`,
            filter: 'brightness(0.85)',
            willChange: 'transform',
          }}
          aria-hidden
        />
      )}

      {/* Dark gradient overlay left → right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.25), transparent)',
        }}
        aria-hidden
      />

      {/* Left-aligned content */}
      <div
        ref={contentRef}
        className="relative z-10 flex h-full items-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24"
        style={{
          opacity: scrollState.textOpacity,
          transform: `translateY(${scrollState.textY}px)`,
          transition: 'opacity 0.05s ease-out, transform 0.05s ease-out',
        }}
      >
        <div className="max-w-xl">
          <p
            className="text-xs font-medium tracking-[0.25em] uppercase text-white/80 mb-4"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            Collection
          </p>
            <h1
              className="font-display font-light text-white leading-[1.15] tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Our Products
            </h1>
          <p className="mt-5 text-base md:text-lg text-white/90 leading-relaxed max-w-md">
            Curated textiles and fabrics for discerning spaces worldwide.
          </p>
          <Link
            to="/products#our-products"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-sm font-medium tracking-wide relative overflow-hidden group before:absolute before:inset-0 before:bg-white before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 hover:before:scale-y-100"
          >
            <span className="relative z-10 text-white group-hover:text-neutral-900 transition-colors duration-300">Explore collection</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
