import React from 'react'
import './Gallery.css'
import Card from '../Card/Card'
// import useFetch from '../../../hooks/getData'
import LocationsDatas from '../../../data/logements.json'

function Gallery(props) {
  // const { data, isLoading, error } = useFetch('../../../data/logements.json')

  // const cardlist = data?.cardlist

  // if (error) {
  //   return <span>Oups il y a eu un problème</span>
  // }

  return (
    <section className="main-gallery">
      {/* {isLoading ? (
        <span>Loader </span>
      ) : (
        <div> */}
      {LocationsDatas.map((logement, id) => (
        <Card key={logement.id} title={logement.title} />
      ))}
      {/* </div>
      )} */}
    </section>
  )
}

export default Gallery
