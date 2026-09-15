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

const teamMembers = [
  {
    name: 'Haris Kamal',
    role: 'CEO & Co-Founder',
    bio: 'Fleet operations and logistics technology expert. Former VP at FleetPro with 10+ years driving innovation in mobility.',
    color: '#1E6FFF',
    linkedin: '#',
    twitter: '#',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    skills: [['Strategy', 96], ['Operations', 92], ['Leadership', 98]],
    tag: 'Signal Pilot',
    vibe: 'signal',
  },
  {
    name: 'Wahad Ahmad',
    role: 'CTO & Co-Founder',
    bio: 'Software engineer with a passion for scalable IoT systems and data platforms. Built infrastructure handling millions of data points daily.',
    color: '#F06B5F',
    linkedin: '#',
    twitter: '#',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    skills: [['Engineering', 99], ['IoT Systems', 95], ['Architecture', 97]],
    tag: 'Glitch Builder',
    vibe: 'glitch',
  },
  {
    name: 'Salman Rasool',
    role: 'Head of Product',
    bio: 'Product leader with deep expertise in building enterprise SaaS solutions for mobility and logistics markets across South Asia.',
    color: '#059669',
    linkedin: '#',
    twitter: '#',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
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
            {teamMembers.map((m, i) => (
              <div
                key={i}
                className={`team-card-new team-card-${m.vibe} reveal delay-${i + 1}`}
                data-vibe={m.vibe}
                style={{ '--mc': m.color }}
              >
                {/* Photo area */}
                <div className="tcn-photo">
                  <img src={m.image} alt={m.name} className="team-portrait-img" />
                  {/* Overlay gradient */}
                  <div className="tcn-photo-overlay" />
                  {/* Tag badge top-right */}
                  <div className="tcn-tag" style={{ background: m.color }}>
                    {m.tag}
                  </div>
                  {/* Social links — slide up on hover */}
                  <div className="tcn-socials">
                      <a href={m.linkedin} className="tcn-social-btn" aria-label="LinkedIn">
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
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
