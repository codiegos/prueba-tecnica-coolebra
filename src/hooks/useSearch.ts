import { useEffect, useRef, useState } from 'react'

export const useSearch = (): {
  search: string
  updateSearch: (value: string) => void
  error: null | string
} => {
  const [search, updateSearch] = useState<string>('')
  const [error, setError] = useState<null | string>(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar un producto vacío')
      return
    }
    if (search.match(/^\d+$/) != null) {
      setError('No se puede buscar un producto que sólo contenga números')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
