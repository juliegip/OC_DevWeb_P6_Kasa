import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Kasa" />
      <nav className="header-menu">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
