import React from 'react'
import Banner from '../../components/Banner/Banner'

import imageabout from '../../assets/images/about_banner.png'

const P_About = () => {
  return (
    <section className="aboutpage">
      <Banner image={imageabout}></Banner>
    </section>
  )
}

export default P_About
