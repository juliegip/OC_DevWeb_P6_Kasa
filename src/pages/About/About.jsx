import Banner from '../../components/Banner/Banner'
import Dropdown from '../../components/Dropdown/Dropdown'

import styles from './About.module.scss'
import texts from '../../data/app_texts'
import bg from '../../assets/images/about_banner.png'

function About(collapse) {
  return (
    <section className={styles.container}>
      <Banner imgURL={bg}></Banner>
      <Dropdown
        title={texts.fiabilite}
        descr={texts.fiabilite_descr}
        style={styles.collapse}
      />
      <Dropdown
        title={texts.respect}
        descr={texts.respect_descr}
        style={styles.collapse}
      />
      <Dropdown
        title={texts.service}
        descr={texts.security_descr}
        style={styles.collapse}
      />
      <Dropdown
        title={texts.security}
        descr={texts.security_descr}
        style={styles.collapse}
      />
    </section>
  )
}

export default About
