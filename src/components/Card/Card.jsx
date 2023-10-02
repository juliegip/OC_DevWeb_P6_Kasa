import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

function Card({ data }) {
  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        to={`/accomodation/${data.id}`}
      >
        <img
          className={styles.picture}
          src={data.cover}
          alt={data.tags.toString()}
        />
        <p className={styles.caption}>{data.title}</p>
      </Link>
    </div>
  )
}

export default Card
