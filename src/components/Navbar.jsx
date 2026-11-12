import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoLight from '../assets/images/logo.png';
import logoDark from '../assets/images/logo-black.png';
import { NAV_SECTIONS, WEB_APP_URL } from '../data/content';
import useTheme from '../hooks/useTheme';

const SCROLL_THRESHOLD = 10;
const SPY_OFFSET = 140;

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [theme, toggleTheme] = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);

      if (!isHome) return;
      let current = NAV_SECTIONS[0].id;
      for (const { id } of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= SPY_OFFSET) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container">
        <nav className="nav-inner" aria-label="Main">
          <Link className="nav-brand" to="/" onClick={close}>
            <img src={theme === 'dark' ? logoLight : logoDark} alt="ePocketShop" />
          </Link>

          <ul className={`nav-links${open ? ' open' : ''}`} id="nav-links">
            {NAV_SECTIONS.slice(0, 3).map((s) => (
              <NavItem key={s.id} section={s} active={isHome && activeId === s.id} onClick={close} />
            ))}
            <li>
              <Link className={pathname === '/policy' ? 'active' : undefined} to="/policy" onClick={close}>
                Policies
              </Link>
            </li>
            {NAV_SECTIONS.slice(3).map((s) => (
              <NavItem key={s.id} section={s} active={isHome && activeId === s.id} onClick={close} />
            ))}
          </ul>

          <div className="nav-actions">
            <a className="btn btn-primary btn-sm" href={WEB_APP_URL} target="_blank" rel="noopener noreferrer">
              Sign up
            </a>
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="icon-btn nav-toggle"
              aria-controls="nav-links"
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ section, active, onClick }) {
  const to = section.id === 'home' ? '/' : { pathname: '/', hash: `#${section.id}` };
  return (
    <li>
      <Link className={active ? 'active' : undefined} to={to} onClick={onClick}>
        {section.label}
      </Link>
    </li>
  );
}
