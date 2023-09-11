import styles from './Card.module.scss'

function Card({ title }) {
  return (
    <article className={styles.cardWrapper}>
      <h3 className={styles.cardTitle}>{title}</h3>
    </article>
  )
}

export default Card
