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

/* ── Inline SVG portrait illustrations ── */
function PortraitHaris() {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-portrait-svg">
      {/* Background gradient */}
      <defs>
        <radialGradient id="bg1" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#1E3A6E"/>
          <stop offset="100%" stopColor="#0A1628"/>
        </radialGradient>
        <linearGradient id="skin1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C68642"/>
          <stop offset="100%" stopColor="#A0522D"/>
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="url(#bg1)"/>
      {/* Subtle grid overlay */}
      <rect width="200" height="240" fill="none" stroke="#1E6FFF" strokeWidth="0.3" opacity="0.08"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 19px,#1E6FFF 20px)' }}/>
      {/* Torso / suit */}
      <path d="M30 240 Q40 190 60 175 L80 165 L120 165 L140 175 Q160 190 170 240Z" fill="#1a2744"/>
      <path d="M80 165 L90 185 L100 178 L110 185 L120 165" fill="#243560"/>
      {/* Shirt & tie */}
      <path d="M88 168 L100 220 L112 168 L105 175 L100 170 L95 175Z" fill="white" opacity="0.9"/>
      <path d="M97 172 L100 200 L103 172 L101 178 L100 174 L99 178Z" fill="#1E6FFF"/>
      {/* Neck */}
      <rect x="88" y="148" width="24" height="22" rx="6" fill="url(#skin1)"/>
      {/* Head */}
      <ellipse cx="100" cy="118" rx="38" ry="42" fill="url(#skin1)"/>
      {/* Hair — short dark, slight fade */}
      <path d="M62 108 Q65 70 100 68 Q135 70 138 108 Q130 72 100 70 Q70 72 62 108Z" fill="#1a0f08"/>
      <path d="M63 105 Q62 90 68 80 Q72 74 78 71" stroke="#2a1810" strokeWidth="2" opacity="0.5"/>
      {/* Ear left */}
      <ellipse cx="63" cy="120" rx="7" ry="9" fill="#B8732A"/>
      <path d="M65 115 Q68 120 65 125" stroke="#A0522D" strokeWidth="1.5" fill="none"/>
      {/* Ear right */}
      <ellipse cx="137" cy="120" rx="7" ry="9" fill="#B8732A"/>
      {/* Eyes */}
      <ellipse cx="85" cy="115" rx="8" ry="6" fill="white"/>
      <ellipse cx="115" cy="115" rx="8" ry="6" fill="white"/>
      <circle cx="87" cy="116" r="4.5" fill="#2C1810"/>
      <circle cx="117" cy="116" r="4.5" fill="#2C1810"/>
      <circle cx="89" cy="114" r="1.5" fill="white"/>
      <circle cx="119" cy="114" r="1.5" fill="white"/>
      {/* Eyebrows */}
      <path d="M77 108 Q85 104 93 107" stroke="#1a0f08" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M107 107 Q115 104 123 108" stroke="#1a0f08" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Nose */}
      <path d="M98 118 Q96 128 94 132 Q98 134 100 133 Q102 134 106 132 Q104 128 102 118" fill="#A0522D" opacity="0.5"/>
      {/* Mouth — confident smile */}
      <path d="M90 142 Q100 149 110 142" stroke="#7B3A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M92 143 Q100 147 108 143" stroke="#C46030" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* Subtle cheek shading */}
      <ellipse cx="79" cy="130" rx="8" ry="5" fill="#C06030" opacity="0.18"/>
      <ellipse cx="121" cy="130" rx="8" ry="5" fill="#C06030" opacity="0.18"/>
      {/* Glasses */}
      <rect x="77" y="110" width="18" height="12" rx="4" fill="none" stroke="#1E6FFF" strokeWidth="1.8" opacity="0.85"/>
      <rect x="105" y="110" width="18" height="12" rx="4" fill="none" stroke="#1E6FFF" strokeWidth="1.8" opacity="0.85"/>
      <line x1="95" y1="115" x2="105" y2="115" stroke="#1E6FFF" strokeWidth="1.5" opacity="0.7"/>
      <line x1="63" y1="114" x2="77" y2="114" stroke="#1E6FFF" strokeWidth="1.2" opacity="0.5"/>
      <line x1="123" y1="114" x2="137" y2="114" stroke="#1E6FFF" strokeWidth="1.2" opacity="0.5"/>
      {/* Accent glow at bottom */}
      <rect x="0" y="220" width="200" height="20" fill="url(#bg1)" opacity="0.8"/>
      <line x1="0" y1="220" x2="200" y2="220" stroke="#1E6FFF" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}

function PortraitWahad() {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-portrait-svg">
      <defs>
        <radialGradient id="bg2" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#2D1B69"/>
          <stop offset="100%" stopColor="#0A0A1A"/>
        </radialGradient>
        <linearGradient id="skin2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4956A"/>
          <stop offset="100%" stopColor="#B5703A"/>
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="url(#bg2)"/>
      {/* Hoodie / casual tech look */}
      <path d="M25 240 Q35 185 65 168 L82 160 L118 160 L135 168 Q165 185 175 240Z" fill="#1e1e2e"/>
      <path d="M82 160 L88 172 L100 164 L112 172 L118 160" fill="#28284a"/>
      {/* Kangaroo pocket */}
      <rect x="72" y="198" width="56" height="28" rx="8" fill="#28284a"/>
      {/* Neck */}
      <rect x="86" y="144" width="28" height="22" rx="7" fill="url(#skin2)"/>
      {/* Head — slightly rounder */}
      <ellipse cx="100" cy="112" rx="40" ry="44" fill="url(#skin2)"/>
      {/* Hair — curly / voluminous */}
      <path d="M60 105 Q58 75 75 63 Q88 55 100 55 Q112 55 125 63 Q142 75 140 105" fill="#0d0d0d"/>
      <path d="M60 105 Q56 88 62 76 Q66 68 72 64" stroke="#1a1a1a" strokeWidth="3" opacity="0.7"/>
      <path d="M140 105 Q144 88 138 76 Q134 68 128 64" stroke="#1a1a1a" strokeWidth="3" opacity="0.7"/>
      {/* Ear left */}
      <ellipse cx="61" cy="118" rx="7" ry="9" fill="#BF7A40"/>
      {/* Ear right */}
      <ellipse cx="139" cy="118" rx="7" ry="9" fill="#BF7A40"/>
      {/* Eyes — slightly narrower */}
      <ellipse cx="84" cy="113" rx="9" ry="5.5" fill="white"/>
      <ellipse cx="116" cy="113" rx="9" ry="5.5" fill="white"/>
      <circle cx="86" cy="114" r="4" fill="#1a1205"/>
      <circle cx="118" cy="114" r="4" fill="#1a1205"/>
      <circle cx="88" cy="112" r="1.4" fill="white"/>
      <circle cx="120" cy="112" r="1.4" fill="white"/>
      {/* Eyebrows — thicker, arched */}
      <path d="M76 106 Q84 101 92 104" stroke="#0d0d0d" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M108 104 Q116 101 124 106" stroke="#0d0d0d" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Nose */}
      <path d="M97 116 Q95 127 93 130 Q97 133 100 132 Q103 133 107 130 Q105 127 103 116" fill="#9A5A28" opacity="0.45"/>
      {/* Mouth — slight smirk */}
      <path d="M91 140 Q100 148 112 141" stroke="#7A3A14" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      {/* Beard / stubble */}
      <path d="M82 138 Q86 148 100 152 Q114 148 118 138" fill="#2a1810" opacity="0.35"/>
      <path d="M88 135 Q92 145 100 148 Q108 145 112 135" stroke="#3a2010" strokeWidth="0.8" fill="none" opacity="0.4"/>
      {/* Cheeks */}
      <ellipse cx="78" cy="128" rx="9" ry="5" fill="#C07040" opacity="0.15"/>
      <ellipse cx="122" cy="128" rx="9" ry="5" fill="#C07040" opacity="0.15"/>
      {/* Accent glow */}
      <rect x="0" y="220" width="200" height="20" fill="url(#bg2)" opacity="0.8"/>
      <line x1="0" y1="220" x2="200" y2="220" stroke="#7C3AED" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}

function PortraitSalman() {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-portrait-svg">
      <defs>
        <radialGradient id="bg3" cx="50%" cy="55%" r="65%">
          <stop offset="0%" stopColor="#0D3325"/>
          <stop offset="100%" stopColor="#060E10"/>
        </radialGradient>
        <linearGradient id="skin3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8B88A"/>
          <stop offset="100%" stopColor="#C8885A"/>
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="url(#bg3)"/>
      {/* Smart casual blazer */}
      <path d="M28 240 Q38 188 68 170 L84 162 L116 162 L132 170 Q162 188 172 240Z" fill="#1a2a1a"/>
      {/* Lapels */}
      <path d="M84 162 L78 180 L100 172 L100 162Z" fill="#243424" opacity="0.9"/>
      <path d="M116 162 L122 180 L100 172 L100 162Z" fill="#243424" opacity="0.9"/>
      {/* Shirt underneath */}
      <path d="M90 166 L100 220 L110 166 L105 173 L100 168 L95 173Z" fill="white" opacity="0.85"/>
      {/* Neck */}
      <rect x="87" y="146" width="26" height="20" rx="6" fill="url(#skin3)"/>
      {/* Head */}
      <ellipse cx="100" cy="114" rx="37" ry="41" fill="url(#skin3)"/>
      {/* Hair — neat, side-parted */}
      <path d="M63 100 Q65 68 100 66 Q135 68 137 100" fill="#1C1208"/>
      <path d="M63 100 Q62 82 70 72" stroke="#2a1e10" strokeWidth="2" opacity="0.6"/>
      {/* Part line */}
      <path d="M88 66 Q90 80 90 95" stroke="#2e2010" strokeWidth="1.5" opacity="0.4"/>
      {/* Ears */}
      <ellipse cx="64" cy="118" rx="7" ry="9" fill="#CF9060"/>
      <ellipse cx="136" cy="118" rx="7" ry="9" fill="#CF9060"/>
      {/* Eyes */}
      <ellipse cx="85" cy="113" rx="8.5" ry="5.5" fill="white"/>
      <ellipse cx="115" cy="113" rx="8.5" ry="5.5" fill="white"/>
      <circle cx="87" cy="114" r="4.2" fill="#1e1408"/>
      <circle cx="117" cy="114" r="4.2" fill="#1e1408"/>
      <circle cx="89" cy="112" r="1.5" fill="white"/>
      <circle cx="119" cy="112" r="1.5" fill="white"/>
      {/* Eyebrows — clean arched */}
      <path d="M77 106 Q85 102 93 105" stroke="#1C1208" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
      <path d="M107 105 Q115 102 123 106" stroke="#1C1208" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
      {/* Nose */}
      <path d="M97 117 Q95 127 93 131 Q97 133 100 132 Q103 133 107 131 Q105 127 103 117" fill="#A86030" opacity="0.4"/>
      {/* Warm genuine smile */}
      <path d="M88 141 Q100 150 112 141" stroke="#7A3A20" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d="M90 142 Q100 148 110 142" stroke="#CC7040" strokeWidth="1" fill="none" opacity="0.5"/>
      {/* Dimples */}
      <circle cx="89" cy="142" r="2.5" fill="#B06030" opacity="0.25"/>
      <circle cx="111" cy="142" r="2.5" fill="#B06030" opacity="0.25"/>
      {/* Cheeks */}
      <ellipse cx="79" cy="130" rx="8" ry="5" fill="#D07040" opacity="0.2"/>
      <ellipse cx="121" cy="130" rx="8" ry="5" fill="#D07040" opacity="0.2"/>
      {/* Accent line */}
      <rect x="0" y="220" width="200" height="20" fill="url(#bg3)" opacity="0.8"/>
      <line x1="0" y1="220" x2="200" y2="220" stroke="#059669" strokeWidth="1" opacity="0.3"/>
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
    linkedin: '#',
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
    linkedin: '#',
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
    linkedin: '#',
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
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
