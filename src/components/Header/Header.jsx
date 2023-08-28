import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="header-menu">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos de</NavLink>
      </nav>
    </header>
  )
}

export default Header
