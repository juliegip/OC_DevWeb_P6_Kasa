import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

function Card({ data }) {
  return (
    <Link
      className={styles.link}
      to={`/accomodation/${data.id}`}
    >
      <div className={styles.container}>
        <img
          className={styles.picture}
          src={data.cover}
          alt={data.tags.toString()}
        />
        <p className={styles.caption}>{data.title}</p>
      </div>
    </Link>
  )
}

export default Card
