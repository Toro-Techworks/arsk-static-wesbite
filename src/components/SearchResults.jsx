import { useEffect, useRef } from 'react'

function HighlightMatch({ text, query }) {
  if (!query || !text) return text
  const q = query.trim()
  if (!q) return text
  const lower = text.toLowerCase()
  const lowerQ = q.toLowerCase()
  const i = lower.indexOf(lowerQ)
  if (i === -1) return text
  return (
    <>
      {text.slice(0, i)}
      <mark className="bg-primary/20 font-medium text-[#2e2a26]">{text.slice(i, i + q.length)}</mark>
      {text.slice(i + q.length)}
    </>
  )
}

export default function SearchResults({ isOpen, onClose, query, results, onSelect, containerRef }) {
  const listRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e) => {
      if (containerRef?.current && !containerRef.current.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose, containerRef])

  if (!isOpen) return null

  return (
    <div
      id="navbar-search-results"
      ref={listRef}
      className="absolute left-0 right-0 top-full z-50 mt-1 max-h-[min(320px,70vh)] overflow-y-auto rounded-xl border border-[#E5E0D8] bg-white py-2 shadow-lg"
      role="listbox"
      aria-label="Search results"
    >
      {results.length === 0 ? (
        <p className="px-4 py-6 text-center font-sans text-sm text-[#6E625A]">No products found</p>
      ) : (
        <ul className="flex flex-col">
          {results.map((product) => (
            <li key={product.id} role="option">
              <button
                type="button"
                onClick={() => onSelect(product)}
                className="flex w-full items-center gap-3 px-4 py-2.5 text-left font-sans text-sm text-[#2e2a26] transition-colors hover:bg-[#F5F1EC] focus:bg-[#F5F1EC] focus:outline-none"
              >
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-[#E8E4DF]">
                  <img
                    src={product.image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <span className="min-w-0 flex-1 truncate">
                  <HighlightMatch text={product.name} query={query} />
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
