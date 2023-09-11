import React from 'react'
import Banner from '../../components/Banner/Banner'
import { texts } from '../../data/apptexts/texts'
import image from '../../assets/images/about_banner.png'
import Gallery from '../../components/Gallery/Gallery'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.homepage}>
      <Banner image={image} title={texts.main_title} />
      <Gallery />
    </section>
  )
}

export default Home
