import Banner from '../../components/Banner/Banner'
import Dropdown from '../../components/Dropdown/Dropdown'

import styles from './About.module.css'
import texts from '../../data/app_texts'
import bg from '../../assets/images/about_banner.png'

function About() {
  return (
    <section className={styles.aboutpage}>
      <Banner imgURL={bg}></Banner>
      <Dropdown title={texts.fiabilite} descr={texts.fiabilite_descr} />
      <Dropdown title={texts.respect} descr={texts.respect_descr} />
      <Dropdown title={texts.service} descr={texts.security_descr} />
      <Dropdown title={texts.security} descr={texts.security_descr} />
    </section>
  )
}

export default About
