import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
          ? 'bg-[#F0EEE9]/95 shadow-sm backdrop-blur-md border-b border-border-subtle/50'
          : 'bg-[#F0EEE9]'
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

        {/* Desktop: nav links */}
        <div className="hidden items-center justify-end gap-6 lg:flex xl:gap-10">
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
    </nav>
  )
}
