import { useState, useEffect } from 'react'
import './Css/Navbar.css'

function Navbars() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbars${scrolled ? ' scrolled' : ''}`}>
      <a href="#home" className="nav-logo">Ragupathy V</a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#home"    onClick={closeMenu}>Home</a></li>
        <li><a href="#about"   onClick={closeMenu}>About</a></li>
        <li><a href="#skills"  onClick={closeMenu}>Skills</a></li>
        <li><a href="#project" onClick={closeMenu}>Projects</a></li>
      </ul>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbars
