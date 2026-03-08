import { useState, useEffect, useMemo, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { searchProducts } from '../data/productSearchData'
import SearchResults from './SearchResults'
import ProductModal from './ProductModal'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'OUR PRODUCTS', to: '/products' },
  { label: 'OUR STORY', to: '/our-story' },
  { label: 'CONTACT', to: '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('HOME')
  const [isGlassy, setIsGlassy] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const searchContainerRef = useRef(null)
  const searchContainerRefMobile = useRef(null)

  const searchResults = useMemo(
    () => searchProducts(searchQuery, 5),
    [searchQuery]
  )

  useEffect(() => {
    if (location.pathname === '/products') setActiveLink('OUR PRODUCTS')
    else if (location.pathname === '/our-story') setActiveLink('OUR STORY')
    else if (location.pathname === '/contact') setActiveLink('CONTACT')
    else if (location.pathname === '/') setActiveLink('HOME')
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsGlassy(window.scrollY >= heroHeight)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 h-16 w-full transition-all duration-300 sm:h-20 ${
        isGlassy
          ? 'bg-white/95 shadow-sm backdrop-blur-md border-b border-border-subtle/50'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center transition-opacity duration-300 hover:opacity-90"
          aria-label="ARSK Exports - Home"
        >
          <img
            src="/arsk-logo.png"
            alt="ARSK Exports"
            className="h-80 w-auto sm:h-82"
          />
        </Link>

        {/* Desktop: search + nav links */}
        <div className="hidden flex-1 items-center justify-end gap-4 lg:flex xl:gap-6">
          <div ref={searchContainerRef} className="relative w-full max-w-[220px] xl:max-w-[260px]">
            <label htmlFor="navbar-search" className="sr-only">Search products</label>
            <input
              id="navbar-search"
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setSearchOpen(true)
              }}
              onFocus={() => searchQuery.trim() && setSearchOpen(true)}
              className="w-full rounded-lg border border-[#E5E0D8] bg-white py-2.5 pl-4 pr-10 font-sans text-sm text-[#2e2a26] placeholder:text-[#8E8580] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              autoComplete="off"
              aria-expanded={searchOpen}
              aria-controls="navbar-search-results"
              aria-autocomplete="list"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8E8580]" aria-hidden>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <SearchResults
              isOpen={searchOpen && searchQuery.trim().length > 0}
              onClose={() => setSearchOpen(false)}
              query={searchQuery}
              results={searchResults}
              onSelect={(product) => {
                setSelectedProduct(product)
                setSearchOpen(false)
                setSearchQuery('')
              }}
              containerRef={searchContainerRef}
            />
          </div>
          <div className="flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => {
              setActiveLink(link.label)
              closeMobileMenu()
              if (link.label === 'HOME' && location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
              className={`relative font-sans text-xs font-light uppercase tracking-elegant-wide transition-all duration-300 hover:text-primary xl:text-sm ${
                activeLink === link.label
                  ? 'text-primary underline decoration-primary underline-offset-4'
                  : 'text-text-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-text-charcoal shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary lg:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`absolute left-0 right-0 top-full overflow-hidden transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        } bg-white shadow-md`}
      >
        <div className="border-t border-border-subtle/50 bg-white px-4 py-4">
          <div ref={searchContainerRefMobile} className="relative mb-4 lg:hidden">
            <label htmlFor="navbar-search-mobile" className="sr-only">Search products</label>
            <input
              id="navbar-search-mobile"
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setSearchOpen(true)
              }}
              onFocus={() => searchQuery.trim() && setSearchOpen(true)}
              className="w-full rounded-lg border border-[#E5E0D8] bg-white py-2.5 pl-4 pr-10 font-sans text-sm text-[#2e2a26] placeholder:text-[#8E8580] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              autoComplete="off"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8E8580]" aria-hidden>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <SearchResults
              isOpen={searchOpen && searchQuery.trim().length > 0}
              onClose={() => setSearchOpen(false)}
              query={searchQuery}
              results={searchResults}
              onSelect={(product) => {
                setSelectedProduct(product)
                setSearchOpen(false)
                setSearchQuery('')
                closeMobileMenu()
              }}
              containerRef={searchContainerRefMobile}
            />
          </div>
          <div className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => {
                setActiveLink(link.label)
                closeMobileMenu()
                if (link.label === 'HOME' && location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className={`rounded-md px-4 py-3 font-sans text-sm font-light uppercase tracking-wide transition-colors ${
                activeLink === link.label ? 'bg-primary/10 text-primary' : 'text-text-charcoal hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        onRequestQuote={() => setSelectedProduct(null)}
      />
    </nav>
  )
}
