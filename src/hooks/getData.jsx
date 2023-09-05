import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(url)

        const data = await response.json()
        console.log(data)
        setData(data)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  console.log('data is', data)
  return { isLoading, data, error }
}

export default useFetch
