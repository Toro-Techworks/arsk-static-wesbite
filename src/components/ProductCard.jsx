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
          className="mt-2 border border-[#3E3A36] bg-transparent px-3 py-1.5 font-sans text-[10px] uppercase tracking-[1px] text-[#3E3A36] transition-colors duration-300 ease-out hover:bg-[#3E3A36] hover:text-white sm:mt-4 sm:px-5 sm:py-2.5 sm:text-[12px]"
        >
          View Details
        </button>
      </div>
    </article>
  )
}
