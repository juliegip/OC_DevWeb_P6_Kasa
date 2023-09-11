import React from 'react'
import './Banner.css'
import '../../styles/variables/variables.scss'

function Banner({ title }) {
  let backgroundImageUrl = ''

  const currentRoute = window.location.pathname
  if (currentRoute === 'http://localhost:3000/about') {
    backgroundImageUrl = 'url("../../assets/images/about_banner.png")'
  } else {
    backgroundImageUrl = "url('../../assets/images/home_banner.png')"
  }

  const bannerStyle = {
    '--bg-image': backgroundImageUrl,
    '--bg-image-opacity': 0.9,
  }
  return (
    <div className="banner-container" style={bannerStyle}>
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
