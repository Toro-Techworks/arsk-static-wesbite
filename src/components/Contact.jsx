import { useState } from 'react'
import FadeInSection from './FadeInSection'

export default function Contact() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setEmail('')
  }

  return (
    <section id="contact" className="w-full bg-[#F3EEE6] py-14 lg:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <FadeInSection>
          <h2 id="contact-heading" className="font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-[#312E81] sm:text-4xl lg:text-5xl">
            Looking for a reliable textile partner?
          </h2>
          <p className="mt-4 text-sm uppercase tracking-wide text-[#312E81]">
            Subscribe to receive product updates and export insights.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your E-Mail Address"
              className="min-w-0 flex-1 rounded-full border-0 bg-gray-200 px-6 py-4 text-[#312E81] placeholder:text-[#312E81]/70 focus:outline-none focus:ring-2 focus:ring-[#312E81]/30 sm:max-w-md"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-gray-300 px-6 py-4 font-medium uppercase tracking-wide text-[#312E81] transition-colors duration-300 hover:bg-[#312E81] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#312E81] focus:ring-offset-2"
            >
              Subscribe
            </button>
          </form>
        </FadeInSection>
      </div>
    </section>
  )
}
