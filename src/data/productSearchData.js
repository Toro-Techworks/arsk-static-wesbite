/**
 * Combined product list for search (Product images + Curtains).
 * Used by Navbar search and keeps a single source of truth for searchable products.
 */

const productImages = import.meta.glob(
  '../assets/Product images/**/*.{png,jpg,jpeg,avif}',
  { eager: true, import: 'default' }
)

const curtainImages = import.meta.glob(
  '../assets/Curtains/*.{png,jpg,jpeg,avif}',
  { eager: true, import: 'default' }
)

function buildFromProductImages() {
  return Object.entries(productImages).map(([path, src], index) => {
    const parts = path.replace(/^.*Product images\/?/i, '').split('/')
    const filename = parts.pop() || path
    const nameFromFile = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
    const category = parts[0] || 'Product'
    const name = nameFromFile ? nameFromFile.charAt(0).toUpperCase() + nameFromFile.slice(1) : `${category} ${index + 1}`
    return {
      id: `search-product-${index}-${path}`,
      name,
      category,
      description: 'Elegant handcrafted piece from our curated collection.',
      image: src,
    }
  })
}

function buildFromCurtains() {
  return Object.entries(curtainImages).map(([path, image], index) => {
    const parts = path.replace(/^.*Curtains\/?/i, '').split('/')
    const filename = (parts.pop() || path).replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
    const name = filename ? filename.charAt(0).toUpperCase() + filename.slice(1) : `Product ${index + 1}`
    return {
      id: `search-curtain-${index}-${path}`,
      name,
      image,
    }
  })
}

const productList = [...buildFromProductImages(), ...buildFromCurtains()]

export function getSearchableProducts() {
  return productList
}

export function searchProducts(query, limit = 5) {
  const q = (query || '').trim().toLowerCase()
  if (!q) return []
  return productList
    .filter((p) => p.name.toLowerCase().includes(q))
    .slice(0, limit)
}
