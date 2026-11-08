import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/books', label: 'Books' },
  { to: '/journal', label: "Journal" },
  { to: '/speaking', label: 'Speaking' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="The Author's Studio home" onClick={() => setOpen(false)}>
          <span className="header__wordmark">The Author's Studio</span>
        </Link>
        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>
        <nav id="primary-nav" className={`header__nav ${open ? 'header__nav--open' : ''}`} aria-label="Primary">
          <ul className="header__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
                  onClick={() => setOpen(false)}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/speaking" className="btn btn--primary header__cta" onClick={() => setOpen(false)}>
            Invite Me to Speak
          </Link>
        </nav>
      </div>
    </header>
  )
}