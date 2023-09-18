import React from 'react'
import styles from './RateStars.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function RateStars({ rating }) {
  console.log(rating)
  const rate = [1, 2, 3, 4, 5]
  return (
    <div className={styles.container}>
      {rate &&
        rate.map((item, index) =>
          rating >= item ? (
            <FontAwesomeIcon
              icon={faStar}
              className={`${styles.star} ${styles.full}`}
              key={item + index}
            />
          ) : (
            <FontAwesomeIcon
              icon={faStar}
              className={`${styles.star} ${styles.grey}`}
              key={item + index}
            />
          )
        )}
    </div>
  )
}

export default RateStars
