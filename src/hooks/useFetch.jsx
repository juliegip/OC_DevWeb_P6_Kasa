// import { useState, useEffect } from 'react'

// function useFetch({ jsondata }) {
//   const [data, setData] = useState([])

//   const getData = () => {
//     ;(({ jsondata }),
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     })
//       .then(function (response) {
//         console.log(response)
//         return response.json()
//       })
//       .then(function (myJson) {
//         console.log(myJson)
//         setData(myJson)
//       })
//   }

//   useEffect(() => {
//     getData()
//   }, [])

//   return { data }
// }

// export default useFetch

import { useState, useEffect } from 'react'

function useFetch(jsonDataUrl) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(jsonDataUrl)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const jsonData = await response.json()
        setData(jsonData)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [jsonDataUrl])

  return { data, error }
}

export default useFetch
