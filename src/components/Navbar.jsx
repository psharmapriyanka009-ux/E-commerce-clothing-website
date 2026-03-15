import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/men', label: 'Men' },
  { to: '/women', label: 'Women' },
  { to: '/collections', label: 'Shop All' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link className="brand-mark" to="/" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-dot" />
          Luxe Thread Co.
        </Link>

        <button
          className="mobile-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              to={item.to}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink className="cart-link" to="/cart" onClick={() => setIsMenuOpen(false)}>
            Cart
            <span>{itemCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
