export default function ProductCard({ product, onViewDetails, className = '' }) {
  const { name, image } = product || {}

  return (
    <article className={`group ${className}`}>
      <div className="aspect-square overflow-hidden rounded-[12px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-3 sm:mt-4">
        <p
          className="font-sans text-xs uppercase tracking-[1px] sm:text-[14px]"
          style={{ color: '#3E3A36' }}
        >
          {name}
        </p>
        <button
          type="button"
          onClick={() => onViewDetails?.(product)}
          className="mt-2 border border-[#3E3A36] px-3 py-1.5 font-sans text-[10px] uppercase tracking-[1px] sm:mt-4 sm:px-5 sm:py-2.5 sm:text-[12px] relative overflow-hidden group before:absolute before:inset-0 before:bg-[#3E3A36] before:scale-y-0 before:origin-bottom before:transition-transform before:duration-300 group-hover:before:scale-y-100"
        >
          <span className="relative z-10 text-[#3E3A36] group-hover:text-white transition-colors duration-300">View Details</span>
        </button>
      </div>
    </article>
  )
}
