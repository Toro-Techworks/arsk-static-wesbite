import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function ProductModal({ isOpen, onClose, product, onRequestQuote }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const {
    name,
    image,
    description,
    fabricType,
    material,
    colors,
    usage,
  } = product || {}

  const handleOverlayClick = (e) => e.target === e.currentTarget && onClose()

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="product-modal-title"
    >
      {/* Backdrop with fade */}
      <div
        className="absolute inset-0 animate-modal-backdrop bg-black/55 backdrop-blur-[2px]"
        onClick={handleOverlayClick}
        aria-hidden
      />

      {/* Modal panel with scale + fade */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative max-h-[90vh] w-full max-w-[min(700px,100%)] overflow-hidden rounded-2xl bg-[#F5F1EC] shadow-[0_25px_80px_rgba(0,0,0,0.25)] animate-modal-panel focus:outline-none"
      >
        {/* Close button – top right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#3E3A36] shadow-md transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#6b5b4d] focus:ring-offset-2 focus:ring-offset-[#F5F1EC]"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image – full image visible, no crop */}
        <div className="flex min-h-[200px] w-full items-center justify-center overflow-hidden bg-[#E8E4DF] p-4 sm:min-h-[260px]">
          <img
            src={image}
            alt={name}
            className="max-h-[50vh] w-full object-contain object-center"
          />
        </div>

        {/* Details */}
        <div className="overflow-y-auto px-6 py-5 sm:px-8 sm:py-6">
          <h2 id="product-modal-title" className="font-serif text-2xl font-medium tracking-tight text-[#2e2a26] sm:text-3xl">
            {name}
          </h2>
          {description && (
            <p className="mt-2 font-sans text-[15px] leading-relaxed text-[#5c544f]">
              {description}
            </p>
          )}

          {(fabricType || material || colors || usage) && (
            <dl className="mt-5 space-y-3 border-t border-[#D4CFC7] pt-5">
              {fabricType && (
                <div>
                  <dt className="font-sans text-xs font-medium uppercase tracking-wider text-[#6E625A]">Fabric Type</dt>
                  <dd className="mt-0.5 font-sans text-[15px] text-[#2e2a26]">{fabricType}</dd>
                </div>
              )}
              {material && (
                <div>
                  <dt className="font-sans text-xs font-medium uppercase tracking-wider text-[#6E625A]">Material</dt>
                  <dd className="mt-0.5 font-sans text-[15px] text-[#2e2a26]">{material}</dd>
                </div>
              )}
              {colors && (
                <div>
                  <dt className="font-sans text-xs font-medium uppercase tracking-wider text-[#6E625A]">Available Colors</dt>
                  <dd className="mt-0.5 font-sans text-[15px] text-[#2e2a26]">{colors}</dd>
                </div>
              )}
              {usage && (
                <div>
                  <dt className="font-sans text-xs font-medium uppercase tracking-wider text-[#6E625A]">Usage</dt>
                  <dd className="mt-0.5 font-sans text-[15px] text-[#2e2a26]">{usage}</dd>
                </div>
              )}
            </dl>
          )}

          <div className="mt-6 sm:mt-8">
            <Link
              to="/contact"
              className="inline-flex min-w-[140px] items-center justify-center rounded-full bg-[#6b5b4d] px-6 py-3 font-sans text-sm font-medium uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:bg-[#5a4d41] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6b5b4d] focus:ring-offset-2 focus:ring-offset-[#F5F1EC]"
              onClick={() => { onRequestQuote?.(product); onClose() }}
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
