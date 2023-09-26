import styles from './Footer.module.scss'
import logo from '../../assets/images/LOGO-footer.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="" />
      <p className={styles.text}>&copy; 2020 Kasa. All rights reserved </p>
    </footer>
  )
}

export default Footer
