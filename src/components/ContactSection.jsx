import { useState } from 'react'
import chairFabric from '../assets/chair-fabric.png'
import contactBg from '../assets/Contact-bg.jpg'

const COMPANY = {
  name: 'ARSK Exports',
  address: 'No.1-A, Athur Road, Ottapillaiyar Kovil South, Vangapalayam, Karur – 639006, India',
  email: 'kannan@arskexports.in',
  phone: '+91 90470 25776',
  phoneAlt: '+91 93616 41543',
  hours: 'Mon – Sat, 9:00 AM – 9:00 PM IST',
}

const inputBase =
  'w-full border-0 border-b border-[#D4CFC7] bg-transparent py-3 font-sans text-[#4A3F36] placeholder:text-[#8E8580] focus:border-primary focus:outline-none focus:ring-0'

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://formspree.io/f/mkoqezje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Formspree request failed')

      setStatus('success')
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-32 lg:pb-12"
      aria-labelledby="contact-heading"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for content readability */}
      <div className="absolute inset-0 bg-[#F8F6F2]/70" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Large heading */}
        <header className="mb-14 text-center lg:mb-20">
          <h1
            id="contact-heading"
            className="font-sans font-[200] text-3xl leading-tight tracking-[-0.03em] text-[#4A3F36] sm:text-4xl lg:text-5xl"
          >
            Our Fabric Experts Are Ready To Help
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-sans text-[15px] font-light leading-relaxed text-[#6E625A] sm:text-base">
            Share your requirements and we’ll get back to you within 24 hours.
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: Contact form card */}
          <div className="rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(74,63,54,0.06)] sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={inputBase}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={inputBase}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={inputBase}
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className="sr-only">
                  Fabric Requirement / Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Fabric Requirement / Subject"
                  className={inputBase}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className={`${inputBase} resize-none`}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-full border-2 border-[#4A3F36] bg-[#4A3F36] py-4 font-sans text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:bg-transparent hover:text-[#4A3F36] focus:outline-none focus:ring-2 focus:ring-[#4A3F36] focus:ring-offset-2"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="pt-1 text-center font-sans text-sm font-light text-[#2F6A4A]">
                  Message sent successfully
                </p>
              )}
              {status === 'error' && (
                <p className="pt-1 text-center font-sans text-sm font-light text-[#9A3F3F]">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>

          {/* Right: Company contact info */}
          <div className="flex flex-col justify-center lg:pl-4">
            <div className="relative overflow-visible rounded-2xl bg-[#F4EFE8] p-8 pb-28 sm:p-10 sm:pb-32 lg:pb-36">
              <h2 className="font-sans font-[200] text-xl leading-tight tracking-[-0.03em] text-[#4A3F36] sm:text-2xl">
                {COMPANY.name}
              </h2>
              <ul className="mt-8 space-y-6 font-sans text-[15px] font-light leading-relaxed text-[#6E625A]">
                <li className="flex gap-4">
                  <span className="mt-0.5 shrink-0 text-[#4A3F36]" aria-hidden>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <span>{COMPANY.address}</span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 shrink-0 text-[#4A3F36]" aria-hidden>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 shrink-0 text-[#4A3F36]" aria-hidden>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div>
                    <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                      {COMPANY.phone}
                    </a>
                    <br />
                    <a href={`tel:${COMPANY.phoneAlt.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                      {COMPANY.phoneAlt}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 shrink-0 text-[#4A3F36]" aria-hidden>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span>{COMPANY.hours}</span>
                </li>
              </ul>

              {/* Decorative chair with fabric – overlaps card bottom, 3D layered effect */}
              <img
                src={chairFabric}
                alt=""
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-1/2 z-10 hidden w-68 -translate-x-1/2 translate-x-2 translate-y-1/2 drop-shadow-[0_20px_40px_rgba(74,63,54,0.2)] sm:block sm:translate-x-4 sm:w-75 lg:translate-x-6 lg:w-90"
              />
            </div>
          </div>
        </div>

        {/* Find us – both maps */}
        <div className="mt-16 lg:mt-24">
          <h2 className="mb-6 font-sans font-[200] text-xl leading-tight tracking-[-0.03em] text-[#4A3F36] sm:text-2xl">
            Find us
          </h2>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(74,63,54,0.08)]">
              <p className="pt-2 pl-2 mb-2 font-sans text-sm font-medium uppercase tracking-wide text-[#6E625A]">Office & Production House</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2235.7091729970357!2d78.07051262929768!3d10.98503173804452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f6f49186159%3A0x5f0637683e4af0c6!2sARSK%20EXPORTS!5e1!3m2!1sen!2sin!4v1771002246604!5m2!1sen!2sin"
                title="ARSK Exports - Office & Production House"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(74,63,54,0.08)]">
              <p className="pt-2 pl-2 mb-2 font-sans text-sm font-medium uppercase tracking-wide text-[#6E625A]">Weaving Factory</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d262391.4271364755!2d78.086832!3d11.016858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2d162ad521b1%3A0xaed595e94651fe16!2sARSK%20EXPORTS%20-%20WEAVING%20FACTORY!5e1!3m2!1sen!2sin!4v1771002339117!5m2!1sen!2sin"
                title="ARSK Exports - Weaving Factory"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
