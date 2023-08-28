import React from 'react'
import './Banner.css'

const Banner = ({ image, title }) => {
  return (
    <div className="banner-container">
      <h1 className="banner-title">{title}</h1>
    </div>
  )
}

export default Banner
