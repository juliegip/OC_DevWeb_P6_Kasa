import styles from './Card.module.scss'

function Card({ title }) {
  return (
    <div className={styles.cardWrapper}>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  )
}

export default Card
