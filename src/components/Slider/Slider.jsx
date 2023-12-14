import { useState } from 'react'
import styles from './Slider.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function Slider({ pictures }) {
    const [current, setCurrent] = useState(0)
    let length = pictures.length

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
            <div className={`${length === 1 ? styles.hidden : styles.arrows}`}>
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={goToPrevious}
                    className={styles.arrow}
                />
                <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={goToNext}
                    className={`${styles.arrow}
          }`}
                />
            </div>
            <div className={styles.numbering}>
                <span>
                    {current + 1} / {length}
                </span>
            </div>
        </div>
    )
}

export default Slider
