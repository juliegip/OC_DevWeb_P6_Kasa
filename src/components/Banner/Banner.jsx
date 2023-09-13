import React from 'react'
import styles from './Banner.module.scss'
// import background from '../../assets/images/home_banner.png'

function Banner({ title, image }) {
  const bannerStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'right',
    backgroundSize: '140%',
    opacity: '0.8',
  }

  return (
    <div style={bannerStyle} className={styles.bannerContainer}>
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
