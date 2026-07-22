import './aboutus.css';

const teamMembers = [
  { name: 'Haris Kamal', role: 'CEO & Co-Founder', bio: 'Fleet operations and logistics technology. Former VP at FleetPro.', avatar: 'HK', color: '#1E6FFF' },
  { name: 'Wahad Ahmad', role: 'CTO & Co-Founder', bio: 'Software engineer with a passion for scalable IoT systems and data platforms.', avatar: 'WA', color: '#7C3AED' },
  { name: 'Salman Rasool', role: 'Head of Product', bio: 'Product leader with deep expertise in building enterprise SaaS solutions for mobility.', avatar: 'SR', color: '#059669' },
];

const values = [
  { icon: '🎯', title: 'Customer Obsession', desc: 'Every feature we build starts with a real problem our customers face. We listen first, build second.' },
  { icon: '🔬', title: 'Innovation First', desc: 'We push the boundaries of what fleet management technology can do — constantly researching, experimenting, and improving.' },
  { icon: '🤝', title: 'Reliability', desc: 'Fleet operations never stop, so neither do we. Our 99.9% uptime SLA means you can always count on us.' },
  { icon: '🌱', title: 'Sustainability', desc: 'By reducing fuel waste and optimizing routes, our customers collectively reduce CO₂ emissions by thousands of tons annually.' },
  { icon: '🔐', title: 'Security & Trust', desc: 'We are SOC 2 Type II certified, GDPR compliant, and treat your fleet data with the highest security standards.' },
  { icon: '🚀', title: 'Continuous Growth', desc: 'We release new features every two weeks, driven by customer feedback and our own pursuit of the perfect fleet platform.' },
];

export default function AboutUs() {
  return (
    <div id="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="section-badge">🏢 About DriveVital</div>
            <h1 className="section-title">We believe every fleet<br /><span>deserves to run perfectly</span></h1>
            <p className="section-subtitle">
              Founded in 2026 by a team of fleet operators and engineers who were tired of outdated, overpriced telematics systems — DriveVital was built to be different. We combine cutting-edge technology with genuine industry expertise to deliver a platform that actually moves the needle.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story-section">
        <div className="container">
          <div className="story-layout">
            <div className="story-text">
              <div className="section-badge">📖 Our Story</div>
              <h2 className="section-title">From frustration<br />to <span>innovation</span></h2>
              <p>
                Our founders Haris Kamal, Wahad Ahmad and Salman Rasool met while working at a regional logistics company where they managed a fleet of 80 delivery vehicles. Despite spending thousands on legacy telematics software, they were drowning in disconnected dashboards, late alerts, and data that told them what happened — not what to do about it.
              </p>
              <p>
                They left to build the platform they always wished existed. One that's intelligent, actionable, and actually helps fleet managers make better decisions in real time.
              </p>
              <p>
                Today, DriveVital serves over 2,000 businesses across Pakistan — from single-van startups to 1,000-vehicle enterprise fleets.
              </p>
            </div>
            <div className="story-milestones">
              {[
                { year: '2026', event: 'DriveVital founded in Lahore, Punjab', icon: '🚀' },
                { year: '2026', event: 'First 100 customers onboarded', icon: '🎯' },
                { year: '2026', event: 'Series A funding — Rs 1M raised', icon: '💰' },
                { year: '2026', event: '200+ customers, 1K vehicles tracked', icon: '⭐' },
              ].map((m, i) => (
                <div key={i} className="milestone-item">
                  <div className="milestone-year">{m.icon} {m.year}</div>
                  <div className="milestone-event">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <div className="section-badge">❤️ Our Values</div>
            <h2 className="section-title">What we stand for</h2>
          </div>
          <div className="grid-3">
            {values.map((v, i) => (
              <div key={i} className="value-card card">
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section about-team-section">
        <div className="container">
          <div className="section-header center">
            <div className="section-badge">👥 The Team</div>
            <h2 className="section-title">The people behind<br /><span>DriveVital</span></h2>
            <p className="section-subtitle section-subtitle-center">
              A diverse team of engineers, operators, and customer advocates united by a mission to make fleet management effortless.
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((m, i) => (
              <div key={i} className="team-card card">
                <div className="team-avatar" style={{ background: m.color }}>{m.avatar}</div>
                <h3 className="team-name">{m.name}</h3>
                <div className="team-role">{m.role}</div>
                <p className="team-bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
