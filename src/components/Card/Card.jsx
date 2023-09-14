import styles from './Card.module.scss'

function Card({ title }) {
  return (
    <div className={styles.cardWrapper}>
      <p className={styles.cardTitle}>{title}</p>
    </div>
  )
}

export default Card
