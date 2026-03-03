const storeImages = import.meta.glob('../assets/stores/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})
const productEntries = Object.entries(storeImages).map(([path, src]) => {
  const filename = path.split('/').pop() || path
  const name = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
  return { src, name }
})

function ProductCard({ src, name }) {
  return (
    <article className="group w-[280px] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl sm:w-[320px]">
      <div className="relative aspect-[4/5] overflow-hidden bg-border-subtle">
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-sans text-lg font-medium tracking-[-0.01em] text-white drop-shadow-sm">
            {name}
          </span>
        </div>
      </div>
    </article>
  )
}

export default function ProductCarousel() {
  if (productEntries.length === 0) return null

  return (
    <div className="-mx-6 px-2 sm:-mx-8">
      <div className="group overflow-hidden">
        <div className="flex w-max animate-products-carousel gap-6 sm:gap-8 [animation-play-state:running] group-hover:[animation-play-state:paused]">
          {[...productEntries, ...productEntries].map(({ src, name }, index) => (
            <ProductCard key={`${name}-${index}`} src={src} name={name} />
          ))}
        </div>
      </div>
    </div>
  )
}
