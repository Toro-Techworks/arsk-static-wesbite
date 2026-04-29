import PrivacyContent from '../components/PrivacyContent'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-[#F4EFE8] pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl font-medium tracking-tight text-[#4A3F36] sm:text-4xl">
          Privacy Policy
        </h1>
        <PrivacyContent />
      </div>
    </div>
  )
}
