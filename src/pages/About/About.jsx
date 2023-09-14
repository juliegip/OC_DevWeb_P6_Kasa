import React from 'react'
import Banner from '../../components/Banner/Banner'
import styles from './About.module.css'

import texts from '../../data/app_texts'

import imageabout from '../../assets/images/about_banner.png'
import Collapse from '../../components/Collapse/Collapse'

const P_About = () => {
  return (
    <section className={styles.aboutpage}>
      <Banner image={imageabout}></Banner>
      <Collapse title={texts.fiabilite} />
    </section>
  )
}

export default P_About
