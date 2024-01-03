import { useState, useEffect } from 'react'
import { results } from '../consts/data'

export function useProducts (search: string) {
  const [products] = useState(Object.entries(results))
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    const newProducts = products.filter(([, product]) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredProducts(newProducts)
  }, [search, products])

  return { products: filteredProducts }
}
