import { useEffect, useState } from 'react'

// Executa uma função de service e controla loading / erro / dados.
export function useFetch(serviceFunction, ...args) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    serviceFunction(...args)
      .then((result) => active && setData(result))
      .catch((err) => active && setError(err.message))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceFunction, ...args])

  return { data, loading, error }
}
