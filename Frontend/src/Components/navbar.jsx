import { useState, useEffect } from 'react';
import { useTheme } from './theme';
import './navbar.css';
import LogoSVG from './LogoSVG';

/* ── Scroll progress bar — fills inside the pill track ── */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="tpb-progress-track">
      <div className="tpb-progress-fill" style={{ height: `${progress}%` }} />
    </div>
  );
}

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'Features',       href: '#features' },
  { label: 'How It Works',   href: '#how-it-works' },
  { label: 'Fleet Solutions', href: '#solutions' },
  { label: 'Pricing',        href: '#pricing' },
  { label: 'About',          href: '#about' },
  { label: 'Contact',        href: '#contact' },
];

// Sun SVG
function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22"  x2="5.64"  y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1"  y1="12" x2="3"  y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64"  y2="18.36"/>
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
    </svg>
  );
}

// Moon SVG
function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  /* ── track scroll for sticky style ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── scroll-spy via IntersectionObserver ── */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''));
    const observers = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(`#${id}`); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  /* ── close mobile menu on resize ── */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="navbar-container">

        {/* ── Logo ── */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
          aria-label="DriveVital home"
        >
          <LogoSVG height={42} />
        </a>

        {/* ── Desktop links ── */}
        <ul className="navbar-links" role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeLink === link.href ? 'active' : ''}
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
                <span className="nav-underline" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right controls: CTA + hamburger (theme toggle moved to fixed pill) ── */}
        <div className="navbar-actions">

          <a
            href="#contact"
            className="btn-primary navbar-cta"
            onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeLink === link.href ? 'active' : ''}
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mobile-divider" />
          <li className="mobile-bottom-row">
            <button
              className="theme-toggle-mobile"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a
              href="#contact"
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
              onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>

      {/* ══════════════════════════════════════════════════
          FIXED VERTICAL THEME TOGGLE PILL
          Sticks to the right edge of the viewport,
          vertically centered. Sun on top, Moon on bottom.
      ══════════════════════════════════════════════════ */}
      <div className="theme-pill-fixed">
        {/* Scroll progress bar inside the pill track */}
        <ScrollProgressBar />

        {/* Toggle button — centered inside the pill */}
        <button
          className="theme-pill-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {/* Sun icon — top */}
          <span className={`tpb-icon tpb-sun${theme === 'light' ? ' tpb-active' : ''}`}>
            <SunIcon />
          </span>

          {/* Sliding knob */}
          <span className={`tpb-knob${theme === 'dark' ? ' tpb-knob-dark' : ''}`} />

          {/* Moon icon — bottom */}
          <span className={`tpb-icon tpb-moon${theme === 'dark' ? ' tpb-active' : ''}`}>
            <MoonIcon />
          </span>
        </button>
      </div>
    </nav>
  );
}
