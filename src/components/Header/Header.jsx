import { Link } from 'react-router-dom'


function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">A propos </Link>
        </nav>
    )

}

export default Header