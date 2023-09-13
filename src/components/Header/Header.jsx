import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Kasa" />
      <nav className={styles.links}>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
