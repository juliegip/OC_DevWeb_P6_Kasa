import React from 'react'
import styles from './Gallery.module.scss'
import Card from '../Card/Card'

function Gallery({ data }) {
  return (
    <section className={styles.mainGallery}>
      {data.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </section>
  )
}

export default Gallery
