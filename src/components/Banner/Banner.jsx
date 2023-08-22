import React from 'react'

const Banner = ({ image, title }) => {
  return (
    <div>
      <img src={image} alt="kasa-banner" className="" />
      <h2 className="">{title}</h2>
    </div>
  )
}

export default Banner
