import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'
// TODO: Drop your logo.png into src/assets/ and uncomment the line below
// import logo from '../assets/logo.png'

export default function Navbar({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          {/* Once logo.png is added, replace the text below with:
              <img src={logo} alt="Bright Little Butterflies LLC" className="navbar__logo-img" />
          */}
          <span className="navbar__logo-text">
            🦋 <span className="logo-bright">Bright</span>{' '}
            <span className="logo-little">Little</span>{' '}
            <span className="logo-butterflies">Butterflies</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Meet Us &amp; Contact</a>
          <a href="#contact" className="navbar__enroll-btn" onClick={closeMenu}>
            Enroll Now
          </a>
        </nav>

        <div className="navbar__actions">
          <ThemeToggle variant="nav" isDark={isDark} onToggle={onToggleTheme} />

          {/* Hamburger toggle (mobile) */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
