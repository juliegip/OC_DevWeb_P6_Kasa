import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'

import styles from './About.module.css'
import texts from '../../data/app_texts'
import bg from '../../assets/images/about_banner.png'

function About() {
  return (
    <section className={styles.aboutpage}>
      <Banner imgURL={bg}></Banner>
      <Collapse title={texts.fiabilite} descr={texts.fiabilite_descr} />
      <Collapse title={texts.respect} descr={texts.respect_descr} />
      <Collapse title={texts.service} descr={texts.security_descr} />
      <Collapse title={texts.security} descr={texts.security_descr} />
    </section>
  )
}

export default About
