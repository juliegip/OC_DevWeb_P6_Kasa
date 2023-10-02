import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isFetchLoading, setFetchLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    if (!url) return
    console.log('no data loaded')
    setFetchLoading(true)
    async function fetchData() {
      try {
        const data = await import(url)
        setData(data)
      } catch (error) {
        setFetchError(true)
      } finally {
        setFetchLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, isFetchLoading, fetchError }
}

export default useFetch
