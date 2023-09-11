import React from 'react'
import styles from './Banner.module.scss'
import '../../styles/variables/variables.scss'

function Banner({ title }) {
  let backgroundImageUrl = ''

  // const currentRoute = window.location.pathname
  if (true) {
    backgroundImageUrl = 'url("../../assets/images/about_banner.png")'
  } else {
    backgroundImageUrl = "url('../../assets/images/home_banner.png')"
  }

  const bannerStyle = {
    '--bg-image': backgroundImageUrl,
    '--bg-image-opacity': 0.9,
  }
  return (
    <div className={styles.bannerContainer} style={bannerStyle}>
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
