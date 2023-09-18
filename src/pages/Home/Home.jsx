import React from 'react'
import Banner from '../../components/Banner/Banner'
import texts from '../../data/app_texts'
import data from '../../data/listofaccomodations'
import image from '../../assets/images/home_banner.png'
import Gallery from '../../components/Gallery/Gallery'
import styles from './Home.module.css'

function Home() {
  return (
    <section className={styles.homepage}>
      <Banner title={texts.main_title} image={image} />
      <Gallery data={data} />
    </section>
  )
}

export default Home
