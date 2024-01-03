interface Product {
  name: string
  data: Array<{
    name: string
    sku: string
    ean: string
    price: number
    market: string
  }>
  prices: string | number
  markets: string
}

interface ProductItemProps {
  product: Product
}

export function ProductItem ({ product }: ProductItemProps) {
  const { name, prices, markets } = product
  return (
    <article className='flex flex-col gap-2 border border-gray-200 bg-white/80 shadow-md rounded-md p-6'>
      <div className='flex items-center gap-4 text-sm'>
        <img className='w-24 h-24' src='./src/assets/default-image.png' />
        <h2 className='text-lg font-bold'>{name}</h2>
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold'>
            Rango de precios: <span className='font-bold'>${prices}</span>
          </p>
          <p className='font-semibold'>
            Tiendas: <span className='font-bold capitalize'>{markets}</span>
          </p>
        </div>
      </div>
    </article>
  )
}
