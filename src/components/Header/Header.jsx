import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png'
import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.container}>
            <NavLink to="/">
                <img src={logo} alt="Kasa" className={styles.picture} />
            </NavLink>
            <nav className={styles.menunav}>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header
