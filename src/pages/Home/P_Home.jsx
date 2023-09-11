import React from 'react'
import './P_Home.css'
import Banner from '../../components/Banner/Banner'
import { texts } from '../../data/apptexts/texts'
import image from '../../assets/images/about_banner.png'
import Gallery from './Gallery/Gallery'

function Home() {
  return (
    <section className="homepage">
      <Banner image={image} title={texts.main_title} />
      <Gallery />
    </section>
  )
}

export default Home
