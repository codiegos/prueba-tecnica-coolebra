import { ProductItem } from './components/ProductItem'
import { useProducts } from './hooks/useProducts'
import { useSearch } from './hooks/useSearch'

function App (): JSX.Element {
  const { search, updateSearch, error } = useSearch()
  const { products } = useProducts(search)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(search)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    updateSearch(event.target.value)
  }

  return (
    <main className='bg-gradient-to-b from-emerald-50 via-white to-emerald-50 min-h-screen flex flex-col p-16 px-48 gap-12'>
      <h1 className='text-center text-3xl font-bold'>
        PRUEBA TÉCNICA COOLEBRA 🐍
      </h1>
      <form className='flex items-center gap-4' onSubmit={handleSubmit}>
        <label className='font-semibold' htmlFor='search'>
          Buscar Producto:
        </label>
        <div className='flex flex-col h-10 w-64'>
          <input
            id='search'
            type='text'
            className='relative border border-gray-300 rounded-md px-4 py-2 placeholder:text-sm'
            placeholder='zapatillas, poleras, maquillaje...'
            value={search}
            onChange={handleSearch}
          />
          {error && (
            <p className='text-red-500 text-sm font-semibold'>{error}</p>
          )}
        </div>
        <button className='border border-gray-300 p-2 bg-white hover:bg-gray-200 rounded px-4'>
          BUSCAR
        </button>
      </form>
      <div className='grid grid-cols-3 gap-4 place-content-center'>
        {products.map(([ean, product]) => (
          <ProductItem key={ean} product={product} />
        ))}
      </div>
    </main>
  )
}

export default App
