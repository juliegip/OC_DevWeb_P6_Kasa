import React from 'react'
import Banner from '../../components/Banner/Banner'
import styles from './About.module.css'

import imageabout from '../../assets/images/about_banner.png'

const P_About = () => {
  return (
    <section className={styles.aboutpage}>
      <Banner image={imageabout}></Banner>
    </section>
  )
}

export default P_About
