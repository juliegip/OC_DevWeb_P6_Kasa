import { NavLink } from 'react-router-dom'
import styles from './Card.module.scss'

function Card({ data }) {
  return (
    <NavLink className={styles.link} to={`/accomodation/${data.id}`}>
      <div className={styles.container}>
        <img
          className={styles.picture}
          src={data.cover}
          alt={data.tags.toString()}
        />
        <p className={styles.caption}>{data.title}</p>
      </div>
    </NavLink>
  )
}

export default Card
