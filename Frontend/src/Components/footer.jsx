import './footer.css';
import LogoSVG from './LogoSVG';

const footerLinks = {
  Product: [
    { label: 'Features',       href: '#features' },
    { label: 'Fleet Solutions', href: '#solutions' },
    { label: 'Pricing',        href: '#pricing' },
    { label: 'Integrations',   href: '#' },
    { label: 'Security',       href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers',  href: '#' },
    { label: 'Press',    href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Contact',  href: '#contact' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Blog',          href: '#' },
    { label: 'Case Studies',  href: '#' },
    { label: 'Webinars',      href: '#' },
    { label: 'Support',       href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy',    href: '#' },
    { label: 'Data handling',    href: '#' },
  ],
};

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/drivevitals/posts/?feedView=all',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleClick = (e, href) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">

      {/* ── CTA Banner ── */}
      <div className="footer-cta">
        <div className="footer-cta-bg" />
        <div className="container">
          <div className="footer-cta-inner">
            <div className="footer-cta-text">
              <h2>Ready to transform your fleet?</h2>
              <p>See how a clearer view of your vehicles can improve daily operations.</p>
            </div>
            <div className="footer-cta-btns">
              <a
                href="#contact"
                className="btn-primary"
                onClick={e => handleClick(e, '#contact')}
              >
                Book a consultation
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="btn-ghost"
                onClick={e => handleClick(e, '#contact')}
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">

            {/* Brand column */}
            <div className="footer-brand">
              <div className="footer-logo">
                <LogoSVG height={46} />
              </div>
              <p className="footer-brand-desc">
                The most advanced fleet management platform built to maximize uptime,
                reduce costs, and keep your drivers safe.
              </p>

              <div className="footer-social">
                {socialLinks.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="social-link"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <div className="footer-contact-info">
                <div className="contact-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.47 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+92 (332) 0241610</span>
                </div>
                <div className="contact-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>drivevitalsofficial@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-col">
                <h4>{category}</h4>
                <ul>
                  {links.map(link => (
                    <li key={link.label}>
                      <a href={link.href} onClick={e => handleClick(e, link.href)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>&copy; {year} DriveVital. All rights reserved.</p>
            <div className="footer-bottom-badges">
              <span className="footer-badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Your data stays protected
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
