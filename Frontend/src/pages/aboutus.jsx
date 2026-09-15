import { useEffect } from 'react';
import './aboutus.css';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function PortraitHaris() {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-portrait-svg">
      <defs>
        <linearGradient id="harisBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="url(#harisBg)" />
      <path d="M32 220C48 196 67 185 100 185C133 185 152 196 168 220V240H32V220Z" fill="#1F2937"/>
      <path d="M74 188H126L116 156H84L74 188Z" fill="#F8FAFC"/>
      <path d="M90 155H110V188H90V155Z" fill="#F5F5F5"/>
      <ellipse cx="100" cy="118" rx="38" ry="42" fill="#F2D1AE"/>
      <path d="M62 112C62 74 78 58 100 58C122 58 138 74 138 112C134 90 120 80 100 80C80 80 66 90 62 112Z" fill="#1A120D"/>
      <path d="M66 111C68 93 81 82 100 82C119 82 132 93 134 111C125 98 112 92 100 92C88 92 75 98 66 111Z" fill="#221510" opacity="0.9"/>
      <path d="M72 111C77 109 83 108 88 109" stroke="#1A120D" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M112 109C117 108 123 109 128 111" stroke="#1A120D" strokeWidth="2.6" strokeLinecap="round"/>
      <path d="M76 125C80 119 86 116 93 117" stroke="#1A120D" strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M124 117C117 116 111 119 107 125" stroke="#1A120D" strokeWidth="2.8" strokeLinecap="round"/>
      <rect x="75" y="111" width="18" height="12" rx="4" fill="none" stroke="#1E6FFF" strokeWidth="1.8" opacity="0.9"/>
      <rect x="107" y="111" width="18" height="12" rx="4" fill="none" stroke="#1E6FFF" strokeWidth="1.8" opacity="0.9"/>
      <line x1="93" y1="117" x2="107" y2="117" stroke="#1E6FFF" strokeWidth="1.5" opacity="0.85"/>
      <circle cx="86" cy="116" r="4.5" fill="#1B120D"/>
      <circle cx="114" cy="116" r="4.5" fill="#1B120D"/>
      <circle cx="87.5" cy="114.5" r="1.4" fill="#fff"/>
      <circle cx="115.5" cy="114.5" r="1.4" fill="#fff"/>
      <path d="M95 120C96 126 98 128 100 130C102 128 104 126 105 120" stroke="#9C5A38" strokeWidth="1.8" fill="none"/>
      <path d="M82 134C90 140 95 143 100 143C105 143 110 140 118 134" stroke="#7A3B1C" strokeWidth="2.3" strokeLinecap="round"/>
      <path d="M80 129C86 138 92 142 100 142C108 142 114 138 120 129" stroke="#8E4F2B" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
      <path d="M84 141C90 146 95 148 100 148C105 148 110 146 116 141" stroke="#2F180E" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M88 139C90 144 95 146 100 146C105 146 110 144 112 139" stroke="#4F2B15" strokeWidth="1.5" fill="none" opacity="0.9"/>
    </svg>
  );
}

function PortraitWahad() {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-portrait-svg">
      <defs>
        <linearGradient id="wahadBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#312E81" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="url(#wahadBg)" />
      <path d="M30 220C48 195 68 185 100 185C132 185 152 195 170 220V240H30V220Z" fill="#1F2937"/>
      <path d="M82 187H118V208H82V187Z" fill="#F2D1AE"/>
      <ellipse cx="100" cy="118" rx="36" ry="40" fill="#F1D1AF"/>
      <path d="M64 111C64 78 81 60 100 60C119 60 136 78 136 111C131 93 118 82 100 82C82 82 69 93 64 111Z" fill="#0F172A"/>
      <path d="M68 108C72 88 85 76 100 76C115 76 128 88 132 108" stroke="#1F2937" strokeWidth="3" strokeLinecap="round"/>
      <rect x="71" y="111" width="20" height="13" rx="4" fill="none" stroke="#1F2937" strokeWidth="2"/>
      <rect x="109" y="111" width="20" height="13" rx="4" fill="none" stroke="#1F2937" strokeWidth="2"/>
      <line x1="91" y1="117" x2="109" y2="117" stroke="#1F2937" strokeWidth="2"/>
      <circle cx="85" cy="117" r="4" fill="#191919"/>
      <circle cx="115" cy="117" r="4" fill="#191919"/>
      <circle cx="86.5" cy="115.5" r="1.3" fill="#fff"/>
      <circle cx="116.5" cy="115.5" r="1.3" fill="#fff"/>
      <path d="M84 103C87 101 90 101 93 103" stroke="#1F2937" strokeWidth="2.4" strokeLinecap="round"/>
      <path d="M107 103C110 101 113 101 116 103" stroke="#1F2937" strokeWidth="2.4" strokeLinecap="round"/>
      <path d="M95 122C96 127 98 130 100 132C102 130 104 127 105 122" stroke="#9C5A38" strokeWidth="1.8" fill="none"/>
      <path d="M87 140C92 143 96 144 100 144C104 144 108 143 113 140" stroke="#7A3B1C" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M85 136C92 145 96 148 100 148C104 148 108 145 115 136" stroke="#4B2E2A" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M88 132C92 135 96 136 100 136C104 136 108 135 112 132" stroke="#000" strokeWidth="1.5" opacity="0.35"/>
    </svg>
  );
}

function PortraitSalman() {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-portrait-svg">
      <defs>
        <linearGradient id="salmanBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#14532D" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="url(#salmanBg)" />
      <path d="M30 220C48 196 67 185 100 185C133 185 152 196 170 220V240H30V220Z" fill="#1F2937"/>
      <path d="M80 186H120L110 157H90L80 186Z" fill="#F8FAFC"/>
      <ellipse cx="100" cy="117" rx="36" ry="40" fill="#F1D1AF"/>
      <path d="M64 106C64 75 79 60 100 60C121 60 136 75 136 106C131 90 120 80 100 80C80 80 69 90 64 106Z" fill="#1C1917"/>
      <path d="M66 108C71 90 83 79 100 79C117 79 129 90 134 108" stroke="#221A16" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="86" cy="118" r="4" fill="#191919"/>
      <circle cx="114" cy="118" r="4" fill="#191919"/>
      <circle cx="87.5" cy="116.5" r="1.3" fill="#fff"/>
      <circle cx="115.5" cy="116.5" r="1.3" fill="#fff"/>
      <path d="M80 104C84 101 88 101 92 103" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M108 103C112 101 116 101 120 104" stroke="#1C1917" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M96 123C97 128 99 130 100 132C101 130 103 128 104 123" stroke="#9C5A38" strokeWidth="1.8" fill="none"/>
      <path d="M88 139C94 143 97 145 100 145C103 145 106 143 112 139" stroke="#7A3B1C" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M84 134C88 141 94 145 100 145C106 145 112 141 116 134" stroke="#9A5B38" strokeWidth="1.5" opacity="0.8"/>
      <path d="M90 132C94 136 97 138 100 138C103 138 106 136 110 132" stroke="#221A16" strokeWidth="1.4" opacity="0.35"/>
    </svg>
  );
}

const PORTRAITS = [PortraitHaris, PortraitWahad, PortraitSalman];

const teamMembers = [
  {
    name: 'Haris Kamal',
    role: 'CEO & Co-Founder',
    bio: 'Fleet operations and logistics technology expert. Former VP at FleetPro with 10+ years driving innovation in mobility.',
    color: '#1E6FFF',
    linkedin: 'https://www.linkedin.com/in/hariskamalrana/',
    twitter: '#',
    skills: [['Strategy', 96], ['Operations', 92], ['Leadership', 98]],
    tag: 'Signal Pilot',
    vibe: 'signal',
  },
  {
    name: 'Wahad Ahmad',
    role: 'CTO & Co-Founder',
    bio: 'Software engineer with a passion for scalable IoT systems and data platforms. Built infrastructure handling millions of data points daily.',
    color: '#F06B5F',
    linkedin: 'https://www.linkedin.com/in/wahad-ahmed-916696294/',
    twitter: '#',
    skills: [['Engineering', 99], ['IoT Systems', 95], ['Architecture', 97]],
    tag: 'Glitch Builder',
    vibe: 'glitch',
  },
  {
    name: 'Salman Rasool',
    role: 'Head of Product',
    bio: 'Product leader with deep expertise in building enterprise SaaS solutions for mobility and logistics markets across South Asia.',
    color: '#059669',
    linkedin: 'https://www.linkedin.com/in/salman-rasool-4bb32b34b/',
    twitter: '#',
    skills: [['Product', 94], ['UX Research', 91], ['Roadmapping', 96]],
    tag: 'Orbit Maker',
    vibe: 'orbit',
  },
];

const values = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Customer Obsession',
    desc: 'Every feature we build starts with a real problem our customers face. We listen first, build second.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Innovation First',
    desc: 'We push the boundaries of what fleet management technology can do — constantly researching, experimenting, and improving.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Reliability',
    desc: 'Fleet operations never stop, so neither do we. Our 99.9% uptime SLA means you can always count on us.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Security & Trust',
    desc: 'We are SOC 2 Type II certified, GDPR compliant, and treat your fleet data with the highest security standards.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Continuous Growth',
    desc: 'We release new features every two weeks, driven by customer feedback and our own pursuit of the perfect fleet platform.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Sustainability',
    desc: 'By reducing fuel waste and optimizing routes, our customers collectively reduce CO₂ emissions by thousands of tons annually.',
  },
];

export default function AboutUs() {
  useScrollReveal();

  return (
    <div id="about">

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="about-hero-grid" />
          <div className="about-hero-glow" />
        </div>
        <div className="container">
          <div className="about-hero-content">
            <div className="section-badge reveal">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
              </svg>
              About DriveVital
            </div>
            <h1 className="section-title about-hero-title reveal delay-1">
              We believe every fleet<br /><span>deserves to run perfectly</span>
            </h1>
            <p className="section-subtitle about-hero-subtitle reveal delay-2">
              Founded in 2026 by a team of fleet operators and engineers who were tired of
              outdated, overpriced telematics systems — DriveVital was built to be different.
              We combine cutting-edge technology with genuine industry expertise to deliver a
              platform that actually moves the needle.
            </p>
            <div className="about-hero-stats reveal delay-3">
              {[
                { value: '2,000+', label: 'Customers' },
                { value: '150K+',  label: 'Vehicles' },
                { value: '99.9%',  label: 'Uptime' },
              ].map(s => (
                <div key={s.label} className="about-hero-stat">
                  <span className="about-hero-stat-value">{s.value}</span>
                  <span className="about-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section about-story-section">
        <div className="container">
          <div className="story-layout">
            <div className="story-text reveal-left">
              <div className="section-badge">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Our Story
              </div>
              <h2 className="section-title">From frustration<br />to <span>innovation</span></h2>
              <p>
                Our founders Haris Kamal, Wahad Ahmad and Salman Rasool met while working at a
                regional logistics company where they managed a fleet of 80 delivery vehicles.
                Despite spending thousands on legacy telematics software, they were drowning in
                disconnected dashboards, late alerts, and data that told them what happened —
                not what to do about it.
              </p>
              <p>
                They left to build the platform they always wished existed. One that's
                intelligent, actionable, and actually helps fleet managers make better
                decisions in real time.
              </p>
              <p>
                Today, DriveVital serves over 2,000 businesses across Pakistan — from
                single-van startups to 1,000-vehicle enterprise fleets.
              </p>
            </div>

            <div className="story-milestones reveal-right">
              {[
                {
                  year: '2026',
                  event: 'DriveVital founded in Lahore, Punjab',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  ),
                },
                {
                  year: '2026',
                  event: 'First 100 customers onboarded',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                },
                {
                  year: '2026',
                  event: 'Series A funding — Rs 1M raised',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"/>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                  ),
                },
                {
                  year: '2026',
                  event: '200+ customers, 1K vehicles tracked',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                  ),
                },
              ].map((m, i) => (
                <div key={i} className={`milestone-item reveal delay-${i + 1}`}>
                  <div className="milestone-icon">{m.icon}</div>
                  <div className="milestone-body">
                    <div className="milestone-year">{m.year}</div>
                    <div className="milestone-event">{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section about-values-section">
        <div className="container">
          <div className="section-header center reveal">
            <div className="section-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              Our Values
            </div>
            <h2 className="section-title">What we stand for</h2>
          </div>
          <div className="grid-3">
            {values.map((v, i) => (
              <div key={i} className={`value-card card reveal delay-${(i % 3) + 1}`}>
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section about-team-section">
        <div className="container">
          <div className="section-header center reveal">
            <div className="section-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              The Team
            </div>
            <h2 className="section-title">
              The team behind<br /><span>DriveVital</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A diverse team of engineers, operators, and customer advocates united by
              a mission to make fleet management effortless.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((m, i) => {
              const Portrait = PORTRAITS[i];
              return (
                <div
                  key={i}
                  className={`team-card-new team-card-${m.vibe} reveal delay-${i + 1}`}
                  data-vibe={m.vibe}
                  style={{ '--mc': m.color }}
                >
                  {/* Photo area */}
                  <div className="tcn-photo">
                    <Portrait />
                    {/* Overlay gradient */}
                    <div className="tcn-photo-overlay" />
                    {/* Tag badge top-right */}
                    <div className="tcn-tag" style={{ background: m.color }}>
                      {m.tag}
                    </div>
                    {/* Social links — slide up on hover */}
                    <div className="tcn-socials">
                      <a href={m.linkedin} target="_blank" rel="noreferrer" className="tcn-social-btn" aria-label="LinkedIn">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                        </svg>
                      </a>
                      <a href={m.twitter} className="tcn-social-btn" aria-label="Twitter">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Info area */}
                  <div className="tcn-info">
                    {/* Color accent bar */}
                    <div className="tcn-accent-bar" style={{ background: m.color }} />

                    <div className="tcn-header">
                      <div>
                        <h3 className="tcn-name">{m.name}</h3>
                        <div className="tcn-role" style={{ color: m.color }}>{m.role}</div>
                      </div>
                      {/* Online indicator */}
                      <div className="tcn-online">
                        <span className="tcn-dot" style={{ background: '#22C55E' }} />
                        <span>Available</span>
                      </div>
                    </div>

                    <p className="tcn-bio">{m.bio}</p>

                    {/* Skill bars */}
                    <div className="tcn-skills">
                      {m.skills.map(([skill, val]) => (
                        <div key={skill} className="tcn-skill">
                          <div className="tcn-skill-meta">
                            <span>{skill}</span>
                            <span style={{ color: m.color, fontWeight: 700 }}>{val}%</span>
                          </div>
                          <div className="tcn-skill-track">
                            <div
                              className="tcn-skill-fill"
                              style={{ '--fill': `${val}%`, '--color': m.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
