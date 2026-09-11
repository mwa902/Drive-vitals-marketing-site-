import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from './theme';
import './navbar.css';
import LogoSVG from './LogoSVG';

/* ══════════════════════════════════════════════════
   SCROLL-TRACK THEME TOGGLE
   Rendered via React Portal → directly into <body>
   so it is NEVER clipped by the fixed navbar.
   The knob physically rides the vertical scroll track.
══════════════════════════════════════════════════ */
function ScrollThemeToggle({ theme, toggleTheme }) {
  const [progress,  setProgress]  = useState(0);
  const [spinning,  setSpinning]  = useState(false);
  const [hovered,   setHovered]   = useState(false);

  const TRACK_H = 160;
  const KNOB_H  = 44;

  /* live scroll progress */
  useEffect(() => {
    const update = () => {
      const el  = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const knobTop = progress * (TRACK_H - KNOB_H);
  const isDark  = theme === 'dark';

  const handleClick = () => {
    setSpinning(true);
    toggleTheme();
    setTimeout(() => setSpinning(false), 500);
  };

  const widget = (
    <div
      className="stt-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Vertical track ── */}
      <div className="stt-track">
        <div className="stt-track-fill" style={{ height: `${progress * 100}%` }} />
      </div>

      {/* ── Cap dots ── */}
      <span className="stt-dot stt-dot-top" />
      <span className="stt-dot stt-dot-bottom" />

      {/* ── The button — rides the track ── */}
      <button
        className={`stt-knob ${isDark ? 'stt-dark' : 'stt-light'}${hovered ? ' stt-hovered' : ''}`}
        style={{ top: `${knobTop}px` }}
        onClick={handleClick}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span className="stt-ring" />
        <span className={`stt-icon${spinning ? ' stt-spin' : ''}`}>
          {isDark ? <SunIcon /> : <MoonIcon />}
        </span>
        <span className="stt-shimmer" />
        <span className="stt-tooltip">
          {isDark ? 'Light mode' : 'Dark mode'}
        </span>
      </button>
    </div>
  );

  /* Portal renders straight into <body> — zero chance of being clipped */
  return createPortal(widget, document.body);
}

/* ── Icons ── */
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1"  y1="12" x2="3"  y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78"  x2="5.64"  y2="18.36"/>
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

/* ── Nav links ── */
const navLinks = [
  { label: 'Home',            href: '#home' },
  { label: 'Features',        href: '#features' },
  { label: 'How It Works',    href: '#how-it-works' },
  { label: 'Fleet Solutions', href: '#solutions' },
  { label: 'Pricing',         href: '#pricing' },
  { label: 'About',           href: '#about' },
  { label: 'Contact',         href: '#contact' },
];

/* ══════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════ */
export default function Navbar() {
  const { theme, toggleTheme }    = useTheme();
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''));
    const obs = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveLink(`#${id}`); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 1024) setMenuOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── The navbar bar itself ── */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
        <div className="navbar-container">

          {/* Logo */}
          <a href="#home" className="navbar-logo"
            onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
            aria-label="DriveVital home">
            <LogoSVG height={42} />
          </a>

          {/* Desktop links */}
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

          {/* Right actions */}
          <div className="navbar-actions">
            <a href="#contact" className="btn-primary navbar-cta"
              onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}>
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <button className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu" aria-expanded={menuOpen}>
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
          <ul role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href}
                  className={activeLink === link.href ? 'active' : ''}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href); }}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-divider" />
            <li className="mobile-bottom-row">
              <button className="theme-toggle-mobile" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a href="#contact" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}
                onClick={e => { e.preventDefault(); handleNavClick('#contact'); }}>
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── Scroll-track theme toggle — portalled to <body> ── */}
      <ScrollThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}
