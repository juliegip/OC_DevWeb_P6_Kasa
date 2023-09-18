import { useState } from 'react'
import styles from './Slider.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function Slider({ pictures }) {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const goToPrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  if (!Array.isArray(pictures) || length <= 0) {
    return null
  }

  return (
    <div className={styles.container}>
      {pictures &&
        pictures.map((picture, index) => {
          return (
            <div
              className={`${styles.picture} ${
                index === current ? styles.active : ''
              }`}
              key={index}
            >
              <img
                className={styles.slideImg}
                key={index}
                src={picture}
                alt="imageslide"
              />
            </div>
          )
        })}

      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={goToPrevious}
        className={`${styles.chevron} ${styles.left}`}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={goToNext}
        className={`${styles.chevron} ${styles.right}`}
      />
      <img src={pictures} alt="" />
    </div>
  )
}

export default Slider
