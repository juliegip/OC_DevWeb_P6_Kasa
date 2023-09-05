import React from 'react'
import './P_Home.css'
import Banner from '../../components/Banner/Banner'
import { texts } from '../../data/apptexts/texts'
import image from '../../assets/images/home_banner.png'
import Gallery from './Gallery/Gallery'

function Home() {
  return (
    <div className="homepage">
      <Banner image={image} title={texts.main_title} />
      <Gallery />
    </div>
  )
}

export default Home
