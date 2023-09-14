import React from 'react'
import Banner from '../../components/Banner/Banner'
import styles from './About.module.css'

import texts from '../../data/app_texts'

import imageabout from '../../assets/images/about_banner.png'
import Collapse from '../../components/Collapse/Collapse'

function About() {
  return (
    <section className={styles.aboutpage}>
      <Banner image={imageabout}></Banner>
      <Collapse title={texts.fiabilite} descr={texts.fiabilite_descr} />
      <Collapse title={texts.respect} descr={texts.respect_descr} />
      <Collapse title={texts.service} descr={texts.security_descr} />
      <Collapse title={texts.security} descr={texts.security_descr} />
    </section>
  )
}

export default About
