import React from 'react'
import './P_Home.css'
import Banner from '../../components/Banner/Banner'
import { texts } from '../../utils/apptexts/texts'
import image from '../../assets/images/home_banner.png'
import Gallery from '../../components/Gallery/GridCards'

function Home() {
  return (
    <div className="homepage">
      <Banner image={image} title={texts.main_title} />
      <Gallery />
    </div>
  )
}

export default Home
