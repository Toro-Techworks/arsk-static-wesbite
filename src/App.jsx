import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import OurStory from './pages/OurStory'
import ContactPage from './pages/ContactPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

function ScrollToTopOnNavigate() {
  const location = useLocation()
  useEffect(() => {
    const id = location.hash?.slice(1)
    if (id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <Navbar />
      <main className="bg-[#F0EEE9]">
        <Routes>
          {/* Hostinger / CDNs sometimes land on /index.html; Router path must be / for Home */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
