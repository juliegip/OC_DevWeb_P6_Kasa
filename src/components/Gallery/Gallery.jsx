import styles from './Gallery.module.scss'
import Card from '../Card/Card'

function Gallery({ data }) {
  return (
    <section className={styles.container}>
      {data.map((card) => (
        <Card data={card} key={card.id} />
      ))}
    </section>
  )
}

export default Gallery
