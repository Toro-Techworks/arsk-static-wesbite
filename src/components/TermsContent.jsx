const headingClass = 'font-serif text-lg font-medium text-[#4A3F36] sm:text-xl'
const listClass = 'mt-2 list-inside list-disc space-y-1 font-sans text-[15px] leading-relaxed text-[#4A3F36]'

export default function TermsContent() {
  return (
    <>
      <p className="font-sans text-sm text-[#6E625A]">Last Updated: 08-03-2026</p>
      <p className="mt-4 font-sans text-base leading-relaxed text-[#4A3F36]">
        Welcome to ARSK Exports. By accessing and using this website, you agree to comply with the
        following Terms and Conditions.
      </p>
      <div className="mt-8 space-y-8">
        <section>
          <h2 className={headingClass}>1. Website Use</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            This website provides information about our textile products, export services, and
            company details.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            By using this website, you agree that you will:
          </p>
          <ul className={listClass}>
            <li>Use the website only for lawful purposes</li>
            <li>Not attempt to disrupt website functionality</li>
            <li>Not attempt unauthorized access to any system or data</li>
          </ul>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            We reserve the right to restrict access to users who violate these terms.
          </p>
        </section>
        <section>
          <h2 className={headingClass}>2. Product Information</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            All product descriptions, images, and specifications are provided for general
            informational purposes.
          </p>
          <ul className={listClass}>
            <li>Product colors may slightly vary due to display settings.</li>
            <li>Fabric textures and specifications may vary depending on production batches.</li>
            <li>Product availability may change without notice.</li>
          </ul>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            For exact specifications and quotations, please contact us directly.
          </p>
        </section>
        <section>
          <h2 className={headingClass}>3. Business Inquiries</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            When submitting inquiries through the website contact form or email:
          </p>
          <ul className={listClass}>
            <li>You must provide accurate information.</li>
            <li>We will use your information only to respond to your inquiry.</li>
            <li>Submitting a form does not constitute a purchase agreement.</li>
          </ul>
        </section>
        <section>
          <h2 className={headingClass}>4. Intellectual Property</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            All website content including: Logos, Images, Product designs, Text content, Graphics —
            are the property of ARSK Exports unless stated otherwise. Unauthorized reproduction or
            distribution is prohibited.
          </p>
        </section>
        <section>
          <h2 className={headingClass}>5. Third-Party Links</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            Our website may contain links to third-party websites. We are not responsible for
            content on those websites, their privacy policies, or their services.
          </p>
        </section>
        <section>
          <h2 className={headingClass}>6. Limitation of Liability</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            ARSK Exports shall not be liable for any direct or indirect damages from website use,
            temporary unavailability of the website, or errors or omissions in website content.
          </p>
        </section>
        <section>
          <h2 className={headingClass}>7. Changes to Terms</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            We reserve the right to modify these Terms at any time. Updated versions will be posted
            on this page.
          </p>
        </section>
        <section>
          <h2 className={headingClass}>8. Governing Law</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#4A3F36]">
            These Terms are governed by the laws of India, and disputes shall be subject to the
            jurisdiction of courts in Tamil Nadu.
          </p>
        </section>
        <section>
          <h2 className={headingClass}>9. Contact Information</h2>
          <div className="mt-2 font-sans text-[15px] leading-relaxed text-[#4A3F36]">
            <p className="font-medium">ARSK Exports</p>
            <p>No.1-A, Athur Road</p>
            <p>Ottapillaiyar Kovil South</p>
            <p>Vangapalayam, Karur – 639006</p>
            <p>India</p>
            <p className="mt-2">
              Email:{' '}
              <a href="mailto:kannan@arskexports.in" className="text-[#6b5b4d] underline hover:text-[#4A3F36]">
                kannan@arskexports.in
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+919047025776" className="text-[#6b5b4d] underline hover:text-[#4A3F36]">
                +91 90470 25776
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
