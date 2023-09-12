import React from 'react'
import styles from './Gallery.module.scss'
import Card from '../Card/Card'
// import useFetch from '../../../hooks/getData'
import accommodations from '../../data/listofaccomodations'

function Gallery(props) {
  // const { data, loading, error } = useFetch('../../../data/logements.json')

  // const cardlist = data?.cardlist

  // if (error) {
  //   return <span>Oups il y a eu un problème</span>
  // }

  return (
    <section className={styles.mainGallery}>
      {/* {loading ? (
        <span>Loader </span>
      ) : (
        <div> */}
      {accommodations.map((logement, id) => (
        <Card key={logement.id} title={logement.title} />
      ))}
      {/* </div>
      )} */}
    </section>
  )
}

export default Gallery
