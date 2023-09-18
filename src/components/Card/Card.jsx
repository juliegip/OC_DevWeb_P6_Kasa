import { NavLink } from 'react-router-dom'
import styles from './Card.module.scss'

function Card({ data }) {
  return (
    <article className={styles.cardWrapper}>
      <NavLink className={styles.cardLink} to={`/accomodation/${data.id}`}>
        {/* <div className={styles.imgWrapper}> */}
        <img
          className={styles.imgWrapper}
          src={data.cover}
          alt={data.tags.toString()}
        />

        <p className={styles.cardCaption}>{data.title}</p>
      </NavLink>
    </article>
  )
}

export default Card
