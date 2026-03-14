import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-2xl bg-[#F4EFE8] shadow-2xl">
        <div className="flex shrink-0 items-center justify-between border-b border-[#D4CFC7] px-6 py-4 sm:px-8">
          <h2 id="modal-title" className="font-sans text-xl font-[200] tracking-[-0.03em] text-[#4A3F36] sm:text-2xl">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#6E625A] transition-colors hover:bg-[#E8E4DF] hover:text-[#4A3F36] focus:outline-none focus:ring-2 focus:ring-[#6b5b4d]"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">{children}</div>
      </div>
    </div>
  )
}
