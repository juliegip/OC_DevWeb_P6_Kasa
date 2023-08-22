import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A propos de</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h1>Kasa</h1>
      </footer>
    </div>
  )
}

export default RootLayout
