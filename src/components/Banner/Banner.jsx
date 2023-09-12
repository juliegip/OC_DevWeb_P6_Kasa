import React from 'react'
import styles from './Banner.module.scss'
// import background from '../../assets/images/home_banner.png'

function Banner({ title, image }) {
  return (
    <div
      className={styles.bannerContainer}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
