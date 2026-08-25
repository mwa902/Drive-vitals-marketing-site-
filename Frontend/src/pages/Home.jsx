import { useEffect, useState } from 'react';

/* ══════════════════════════════════════
   Scroll Reveal Hook
   Observes every .reveal* element and
   adds .visible when it enters viewport
══════════════════════════════════════ */
function useScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
    const els = document.querySelectorAll(selectors);

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

/* ══════════════════════════════════════
   HERO SECTION
══════════════════════════════════════ */
function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Trusted by 2,000+ Fleet Operators
          </div>

          <h1 className="hero-title">
            Manage Your Fleet<br />
            <span className="hero-title-accent">Smarter, Faster,</span><br />
            More Profitably
          </h1>

          <p className="hero-subtitle">
            DriveVital is the all-in-one fleet management platform that helps you track
            vehicles in real time, reduce fuel costs, schedule maintenance, and keep every
            driver safe — all from one powerful dashboard.
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              className="btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Start Free Trial
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="btn-ghost"
              onClick={e => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              Watch Demo
            </a>
          </div>

          <div className="hero-trust">
            {['No credit card required', 'Free 14-day trial', '24/7 support'].map(t => (
              <div key={t} className="trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="hero-visual">
          <div className="dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dots"><span/><span/><span/></div>
              <span className="mockup-title">Fleet Dashboard</span>
              <div className="mockup-status">
                <span className="status-dot" />Live
              </div>
            </div>
            <div className="mockup-body">
              <div className="mockup-stats">
                {[
                  {
                    label: 'Active Vehicles', value: '124', trend: '+3',
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v4h-7V8zM5.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>,
                  },
                  {
                    label: 'Fuel Saved', value: '18%', trend: '+2%',
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 22V8l9-6 9 6v14H3zM12 22V12"/></svg>,
                  },
                  {
                    label: 'On-Time Rate', value: '97.4%', trend: '+1.2%',
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>,
                  },
                ].map(s => (
                  <div key={s.label} className="stat-card">
                    <div className="stat-icon">{s.icon}</div>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                    <div className="stat-trend">+{s.trend}</div>
                  </div>
                ))}
              </div>

              <div className="mockup-map">
                <div className="map-bg" />
                {[
                  { x: '20%', y: '30%' }, { x: '45%', y: '20%' },
                  { x: '65%', y: '50%' }, { x: '35%', y: '60%' },
                  { x: '75%', y: '25%' },
                ].map((pos, i) => (
                  <div key={i} className="map-vehicle" style={{ left: pos.x, top: pos.y }}>
                    <div className="vehicle-ping" />
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#1E6FFF">
                      <rect x="2" y="7" width="20" height="10" rx="2"/>
                    </svg>
                  </div>
                ))}
                <div className="route-line" />
              </div>

              <div className="mockup-alerts">
                {[
                  { text: 'Vehicle #A12 — Scheduled maintenance due', type: 'warn' },
                  { text: 'Route optimized — Saved 23 min', type: 'success' },
                  { text: 'Driver John D. — ETA on time', type: 'info' },
                ].map(a => (
                  <div key={a.text} className={`alert-item alert-${a.type}`}>
                    <div className="alert-dot" />
                    <span>{a.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   STATS BANNER
══════════════════════════════════════ */
function StatsBanner() {
  const stats = [
    {
      value: '2,000+',
      label: 'Businesses Worldwide',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    },
    {
      value: '150K+',
      label: 'Vehicles Tracked Daily',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v4h-7V8zM5.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>,
    },
    {
      value: '99.9%',
      label: 'Platform Uptime',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    },
    {
      value: 'Rs 11.6M',
      label: 'Fuel Costs Saved',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    },
  ];

  return (
    <section className="stats-banner">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className={`stat-item reveal delay-${i + 1}`}>
              <div className="stat-item-icon">{s.icon}</div>
              <div className="stat-number">{s.value}</div>
              <div className="stat-text">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   FEATURES SECTION — animated live panel
══════════════════════════════════════ */
const LIVE_EVENTS = [
  { type: 'success', vehicle: 'TRK-047', msg: 'Route optimised — saved 18 min', time: '0s ago' },
  { type: 'warn',    vehicle: 'VAN-012', msg: 'Maintenance due in 320 km',       time: '4s ago' },
  { type: 'info',    vehicle: 'TRK-091', msg: 'Geofence exit — Site B',           time: '9s ago' },
  { type: 'success', vehicle: 'BUS-003', msg: 'On-time arrival at depot',         time: '15s ago' },
  { type: 'warn',    vehicle: 'TRK-022', msg: 'Hard braking event detected',      time: '21s ago' },
  { type: 'info',    vehicle: 'VAN-058', msg: 'Fuel refill logged — 45 L',        time: '28s ago' },
  { type: 'success', vehicle: 'TRK-110', msg: 'Driver safety score +3 pts',       time: '34s ago' },
  { type: 'warn',    vehicle: 'BUS-007', msg: 'Idle time exceeded — 12 min',      time: '40s ago' },
];

function LiveFeedPanel() {
  const [events, setEvents] = useState(LIVE_EVENTS.slice(0, 5));
  const [tick, setTick]     = useState(0);
  const [stats, setStats]   = useState({ active: 124, saved: 18, ontime: 97 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(t => t + 1);
      // rotate in a new event at top
      setEvents(prev => {
        const next = LIVE_EVENTS[(tick + 5) % LIVE_EVENTS.length];
        return [{ ...next, time: 'just now', _new: true }, ...prev.slice(0, 4)];
      });
      // jitter stats slightly
      setStats(s => ({
        active: Math.min(130, Math.max(118, s.active + (Math.random() > 0.5 ? 1 : -1))),
        saved:  Math.min(22,  Math.max(14,  s.saved  + (Math.random() > 0.6 ? 1 : 0))),
        ontime: Math.min(99,  Math.max(95,  s.ontime + (Math.random() > 0.5 ? 1 : -1))),
      }));
    }, 2800);
    return () => clearInterval(interval);
  }, [tick]);

  const dotColor = { success: '#22C55E', warn: '#F59E0B', info: '#1E6FFF' };

  return (
    <div className="feat-live-panel">
      {/* Header bar */}
      <div className="feat-panel-header">
        <div className="feat-panel-title">
          <span className="feat-panel-live-dot" />
          Fleet Activity Feed
        </div>
        <span className="feat-panel-count">{stats.active} vehicles online</span>
      </div>

      {/* Mini stat row */}
      <div className="feat-panel-stats">
        <div className="feat-mini-stat">
          <span className="feat-mini-val" style={{ color: '#22C55E' }}>{stats.saved}%</span>
          <span className="feat-mini-label">Fuel Saved</span>
        </div>
        <div className="feat-mini-divider" />
        <div className="feat-mini-stat">
          <span className="feat-mini-val" style={{ color: '#1E6FFF' }}>{stats.ontime}%</span>
          <span className="feat-mini-label">On-Time</span>
        </div>
        <div className="feat-mini-divider" />
        <div className="feat-mini-stat">
          <span className="feat-mini-val" style={{ color: '#F59E0B' }}>0</span>
          <span className="feat-mini-label">Incidents</span>
        </div>
      </div>

      {/* Live event list */}
      <div className="feat-panel-feed">
        {events.map((e, i) => (
          <div
            key={`${e.vehicle}-${e.time}-${i}`}
            className={`feat-event${e._new ? ' feat-event-new' : ''}`}
          >
            <span className="feat-event-dot" style={{ background: dotColor[e.type] }} />
            <div className="feat-event-body">
              <span className="feat-event-vehicle">{e.vehicle}</span>
              <span className="feat-event-msg">{e.msg}</span>
            </div>
            <span className="feat-event-time">{e.time}</span>
          </div>
        ))}
      </div>

      {/* Animated progress bars */}
      <div className="feat-panel-bars">
        {[
          { label: 'Fleet Efficiency', pct: 87, color: '#1E6FFF' },
          { label: 'Route Optimisation', pct: 74, color: '#22C55E' },
          { label: 'Driver Score Avg', pct: 91, color: '#F59E0B' },
        ].map(b => (
          <div key={b.label} className="feat-bar-row">
            <div className="feat-bar-meta">
              <span>{b.label}</span>
              <span style={{ color: b.color, fontWeight: 700 }}>{b.pct}%</span>
            </div>
            <div className="feat-bar-track">
              <div
                className="feat-bar-fill"
                style={{ width: `${b.pct}%`, background: b.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v4h-7V8zM5.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>,
      title: 'Vehicle Status Cards',
      desc: 'Monitor the real-time status of every vehicle — active, idle, maintenance, offline — at a glance.',
      highlight: true,
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Driver Safety Scoring',
      desc: 'AI scores every driver on speed, braking, and cornering to reduce incidents by up to 40%.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      title: 'Predictive Maintenance',
      desc: 'Schedules service windows based on mileage, engine data, and history automatically.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title: 'Fleet Table',
      desc: 'Centralized table with status, location, driver, and maintenance info for every vehicle.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
      title: 'Fuel Management',
      desc: 'Track consumption per vehicle, flag waste, and cut total fuel costs significantly.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
      title: 'Advanced Analytics',
      desc: 'KPI dashboards, custom reports, and automated PDF exports for every stakeholder.',
    },
  ];

  return (
    <section id="features" className="section feat-section">
      <div className="container">
        {/* Header */}
        <div className="section-header center reveal" style={{ marginBottom: '56px' }}>
          <div className="section-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Core Features
          </div>
          <h2 className="section-title">
            Everything your fleet needs,<br />
            <span>in one platform</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From a single van to a thousand vehicles — DriveVital scales with your business
            and delivers the tools that matter.
          </p>
        </div>

        {/* Two-column: cards left, live panel right */}
        <div className="feat-layout">
          <div className="features-grid-half">
            {features.map((f, i) => (
              <div
                key={i}
                className={`feature-card card reveal delay-${(i % 3) + 1}${f.highlight ? ' feature-card-highlight' : ''}`}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
                <a
                  href="#contact"
                  className="feature-link"
                  onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Learn more
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Live animated fleet panel */}
          <div className="feat-panel-wrap reveal-right">
            <LiveFeedPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   HOW IT WORKS
══════════════════════════════════════ */
function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Install & Connect',
      desc: 'Plug our compact GPS devices into your vehicles or connect via OBD-II. Setup takes under 5 minutes per vehicle — no mechanics needed.',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    },
    {
      step: '02',
      title: 'Set Your Goals',
      desc: 'Tell DriveVital what matters most — fuel savings, driver safety, delivery windows, or compliance. We configure your dashboard accordingly.',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="11"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>,
    },
    {
      step: '03',
      title: 'Monitor & Optimize',
      desc: 'Watch your fleet in real time. Receive smart alerts, optimize routes on the fly, and get AI-powered recommendations to improve efficiency.',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    },
    {
      step: '04',
      title: 'Save & Scale',
      desc: 'Watch costs drop month over month. Add more vehicles as you grow — DriveVital handles fleets of any size with no performance loss.',
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    },
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="hiw-layout">
          <div className="section-header reveal-left">
            <div className="section-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm1-11V7h-2v6l5.25 3.15.75-1.23-4-2.42z"/>
              </svg>
              How It Works
            </div>
            <h2 className="section-title">Up and running<br /><span>in minutes</span></h2>
            <p className="section-subtitle">
              No complex installations, no IT department required. DriveVital is designed so
              any fleet manager can be fully operational the same day.
            </p>
            <a
              href="#contact"
              className="btn-primary"
              style={{ marginTop: '32px', display: 'inline-flex' }}
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Get Started Today
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="steps-list reveal-right">
            {steps.map((s, i) => (
              <div key={i} className="step-item">
                <div className="step-connector">
                  <div className="step-number">{s.step}</div>
                  {i < steps.length - 1 && <div className="step-line" />}
                </div>
                <div className="step-content">
                  <div className="step-icon-wrap">{s.icon}</div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   FLEET SOLUTIONS — interactive tabs
══════════════════════════════════════ */
function SolutionsSection() {
  const [active, setActive] = useState(0);

  const solutions = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Delivery & Logistics',
      color: '#1E6FFF',
      bg: 'rgba(30,111,255,0.08)',
      title: 'Last-mile delivery,\nperfected',
      desc: 'Optimize every route, track packages in real time, and give customers live ETA updates. Cut delivery costs by up to 30% from day one.',
      features: ['AI route optimization', 'Proof of delivery', 'Customer ETA alerts', 'Load management'],
      stats: [{ val: '30%', label: 'Fuel reduction' }, { val: '2×', label: 'Deliveries/day' }, { val: '99%', label: 'On-time rate' }],
      scene: 'delivery',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
        </svg>
      ),
      label: 'Field Service',
      color: '#059669',
      bg: 'rgba(5,150,105,0.08)',
      title: 'Dispatch smarter,\nrespond faster',
      desc: 'Automatically dispatch the nearest technician, track job completion in real time, and integrate with your CRM for seamless work order management.',
      features: ['Smart auto-dispatch', 'Job scheduling board', 'CRM integration', 'Live time tracking'],
      stats: [{ val: '40%', label: 'Faster response' }, { val: '3×', label: 'Jobs completed' }, { val: '95%', label: 'SLA achieved' }],
      scene: 'field',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="2 20 12 4 22 20 2 20"/>
          <line x1="12" y1="12" x2="12" y2="16"/>
          <line x1="12" y1="19" x2="12.01" y2="19"/>
        </svg>
      ),
      label: 'Construction',
      color: '#D97706',
      bg: 'rgba(217,119,6,0.08)',
      title: 'Every asset,\nalways visible',
      desc: 'Track heavy machinery and vehicles across multiple job sites. Geofence boundaries, monitor idle time, and prevent unauthorized equipment use.',
      features: ['Multi-site asset tracking', 'Geofence alerts', 'Idle time reports', 'Theft prevention'],
      stats: [{ val: '0', label: 'Asset losses' }, { val: '25%', label: 'Less idle time' }, { val: '100%', label: 'Site visibility' }],
      scene: 'construction',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" rx="1"/>
          <path d="M16 8h4l3 3v4h-7V8zM5.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
      ),
      label: 'Transportation',
      color: '#7C3AED',
      bg: 'rgba(124,58,237,0.08)',
      title: 'Passenger safety,\non every route',
      desc: 'Manage passenger fleets with live bus tracking, automated scheduling, and compliance reporting that keeps regulators happy.',
      features: ['Real-time bus tracking', 'Automated scheduling', 'Compliance reports', 'Passenger safety logs'],
      stats: [{ val: '98%', label: 'Schedule accuracy' }, { val: '45%', label: 'Admin saved' }, { val: '0', label: 'Compliance fines' }],
      scene: 'transport',
    },
  ];

  const sol = solutions[active];

  return (
    <section id="solutions" className="section sol-section">
      <div className="container">
        {/* Header */}
        <div className="section-header center reveal" style={{ marginBottom: '48px' }}>
          <div className="section-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
            Industry Solutions
          </div>
          <h2 className="section-title">Built for your<br /><span>industry</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            DriveVital adapts to the unique demands of every sector, with pre-configured
            workflows designed for your team.
          </p>
        </div>

        {/* Tab bar */}
        <div className="sol-tabs reveal">
          {solutions.map((s, i) => (
            <button
              key={i}
              className={`sol-tab${active === i ? ' active' : ''}`}
              style={{ '--tab-color': s.color }}
              onClick={() => setActive(i)}
            >
              <span className="sol-tab-icon">{s.icon}</span>
              <span className="sol-tab-label">{s.label}</span>
              {active === i && <span className="sol-tab-indicator" style={{ background: s.color }} />}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="sol-panel" key={active}>
          {/* Left — scene */}
          <div className="sol-scene-wrap">
            <SolutionScene scene={sol.scene} color={sol.color} />
          </div>

          {/* Right — text */}
          <div className="sol-content">
            <div className="sol-content-badge" style={{ background: sol.bg, color: sol.color }}>
              {sol.icon}
              {sol.label}
            </div>

            <h3 className="sol-content-title">
              {sol.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h3>

            <p className="sol-content-desc">{sol.desc}</p>

            {/* Stats row */}
            <div className="sol-stats">
              {sol.stats.map((st, i) => (
                <div key={i} className="sol-stat">
                  <span className="sol-stat-val" style={{ color: sol.color }}>{st.val}</span>
                  <span className="sol-stat-label">{st.label}</span>
                </div>
              ))}
            </div>

            {/* Feature list */}
            <ul className="sol-feature-list">
              {sol.features.map((f, i) => (
                <li key={i} style={{ animationDelay: `${i * 0.07}s` }}>
                  <span className="sol-check" style={{ background: sol.color }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="btn-primary"
              style={{ marginTop: '28px', background: sol.color, boxShadow: `0 8px 24px ${sol.color}55` }}
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Get Started — {sol.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Animated SVG scene per industry ── */
function SolutionScene({ scene, color }) {
  if (scene === 'delivery') return (
    <div className="sol-scene">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="sol-scene-svg">
        {/* Road */}
        <rect x="0" y="210" width="400" height="40" rx="4" fill="rgba(30,111,255,0.08)"/>
        <line x1="0" y1="230" x2="400" y2="230" stroke="rgba(30,111,255,0.15)" strokeWidth="2" strokeDasharray="24 12"/>
        {/* Buildings background */}
        {[[40,80,60,130],[120,100,50,110],[200,70,60,140],[290,90,55,120],[350,60,40,150]].map(([x,h,w,y],i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill={`rgba(30,111,255,${0.06 + i*0.02})`} stroke={`rgba(30,111,255,0.12)`} strokeWidth="1"/>
        ))}
        {/* GPS pin markers */}
        {[[80,170],[200,160],[330,175]].map(([x,y],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="12" fill={color} opacity="0.15" className={`sol-ping sol-ping-${i}`}/>
            <circle cx={x} cy={y} r="5"  fill={color}/>
            <line x1={x} y1={y+5} x2={x} y2={y+20} stroke={color} strokeWidth="2" opacity="0.5"/>
          </g>
        ))}
        {/* Moving delivery truck */}
        <g className="sol-truck">
          <rect x="0" y="192" width="54" height="18" rx="4" fill={color}/>
          <rect x="36" y="186" width="18" height="24" rx="2" fill={`${color}cc`}/>
          <circle cx="10" cy="212" r="6" fill="#0a1628" stroke={color} strokeWidth="2"/>
          <circle cx="42" cy="212" r="6" fill="#0a1628" stroke={color} strokeWidth="2"/>
          <rect x="4"  y="196" width="14" height="8" rx="1" fill="rgba(255,255,255,0.3)"/>
          <rect x="38" y="190" width="12" height="8" rx="1" fill="rgba(255,255,255,0.25)"/>
        </g>
        {/* Route dotted line */}
        <path d="M 60 210 Q 150 150 240 200 Q 320 170 380 200" stroke={color} strokeWidth="2" strokeDasharray="6 4" opacity="0.4"/>
        {/* Speed lines */}
        <line x1="64" y1="198" x2="80" y2="198" stroke={color} strokeWidth="1.5" opacity="0.5" className="sol-speedline-1"/>
        <line x1="64" y1="204" x2="76" y2="204" stroke={color} strokeWidth="1"   opacity="0.35" className="sol-speedline-2"/>
      </svg>
    </div>
  );

  if (scene === 'field') return (
    <div className="sol-scene">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="sol-scene-svg">
        {/* Grid lines */}
        {[0,1,2,3,4].map(i => (
          <line key={i} x1={i*100} y1="0" x2={i*100} y2="300" stroke="rgba(5,150,105,0.06)" strokeWidth="1"/>
        ))}
        {[0,1,2,3].map(i => (
          <line key={i} x1="0" y1={i*100} x2="400" y2={i*100} stroke="rgba(5,150,105,0.06)" strokeWidth="1"/>
        ))}
        {/* Signal circles — dispatcher */}
        <circle cx="200" cy="140" r="70" stroke={color} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.2" className="sol-signal-ring-1"/>
        <circle cx="200" cy="140" r="110" stroke={color} strokeWidth="1" strokeDasharray="4 6" opacity="0.12" className="sol-signal-ring-2"/>
        {/* Dispatch hub */}
        <circle cx="200" cy="140" r="28" fill={`${color}20`} stroke={color} strokeWidth="2"/>
        <circle cx="200" cy="140" r="12" fill={color}/>
        <text x="200" y="144" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">HQ</text>
        {/* Technician vans */}
        {[[80,80,'T1'],[320,90,'T2'],[90,220,'T3'],[310,210,'T4']].map(([x,y,id],i) => (
          <g key={i}>
            <line x1={x} y1={y} x2="200" y2="140" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.25"/>
            <rect x={x-16} y={y-10} width="32" height="20" rx="4" fill={color} opacity="0.85"/>
            <circle cx={x-8} cy={y+12} r="4" fill="#0a1628" stroke={color} strokeWidth="1.5"/>
            <circle cx={x+8} cy={y+12} r="4" fill="#0a1628" stroke={color} strokeWidth="1.5"/>
            <text x={x} y={y+4} textAnchor="middle" fontSize="7" fill="white" fontWeight="700">{id}</text>
            <circle cx={x+14} cy={y-8} r="6" fill="#22C55E" className={`sol-dispatch-dot sol-dd-${i}`}/>
            <text x={x+14} y={y-4} textAnchor="middle" fontSize="5" fill="white" fontWeight="800">✓</text>
          </g>
        ))}
      </svg>
    </div>
  );

  if (scene === 'construction') return (
    <div className="sol-scene">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="sol-scene-svg">
        {/* Ground */}
        <rect x="0" y="240" width="400" height="60" rx="0" fill="rgba(217,119,6,0.06)"/>
        <line x1="0" y1="240" x2="400" y2="240" stroke={`${color}30`} strokeWidth="1.5"/>
        {/* Geofence boundary */}
        <rect x="40" y="60" width="320" height="180" rx="12" stroke={color} strokeWidth="2" strokeDasharray="8 6" opacity="0.35" className="sol-geofence"/>
        <text x="200" y="52" textAnchor="middle" fontSize="10" fill={color} fontWeight="700" opacity="0.6">SITE BOUNDARY</text>
        {/* Excavator — static structure */}
        <rect x="80" y="190" width="70" height="50" rx="4" fill={`${color}cc`}/>
        <rect x="90" y="170" width="50" height="25" rx="3" fill={color}/>
        <line x1="140" y1="170" x2="190" y2="130" stroke={color} strokeWidth="6" strokeLinecap="round" className="sol-excavator-arm"/>
        <line x1="190" y1="130" x2="210" y2="160" stroke={color} strokeWidth="5" strokeLinecap="round" className="sol-excavator-bucket"/>
        <rect x="210" y="158" width="18" height="12" rx="2" fill={color}/>
        {/* Crane */}
        <rect x="270" y="100" width="12" height="140" rx="2" fill={`${color}bb`}/>
        <line x1="276" y1="100" x2="340" y2="100" stroke={color} strokeWidth="5" strokeLinecap="round"/>
        <line x1="340" y1="100" x2="340" y2="160" stroke={color} strokeWidth="2" strokeDasharray="4 3" className="sol-crane-hook"/>
        <rect x="332" y="158" width="16" height="10" rx="2" fill={color}/>
        {/* Tracker badges */}
        {[[115,183,'Excavator'],[276,95,'Crane']].map(([x,y,label],i) => (
          <g key={i}>
            <rect x={x-24} y={y-16} width="48" height="14" rx="3" fill="#0a1628" stroke={color} strokeWidth="1" opacity="0.9"/>
            <circle cx={x-16} cy={y-9} r="3" fill="#22C55E" className={`sol-tracker sol-tr-${i}`}/>
            <text x={x-4} y={y-5} fontSize="6" fill="white" fontWeight="600" opacity="0.9">{label}</text>
          </g>
        ))}
      </svg>
    </div>
  );

  // transport
  return (
    <div className="sol-scene">
      <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="sol-scene-svg">
        {/* Road */}
        <rect x="0" y="200" width="400" height="50" fill="rgba(124,58,237,0.07)"/>
        <line x1="0" y1="225" x2="400" y2="225" stroke={`${color}30`} strokeWidth="2" strokeDasharray="20 10"/>
        {/* Bus stops */}
        {[60,180,320].map((x,i) => (
          <g key={i}>
            <rect x={x-4} y="160" width="8" height="40" rx="2" fill={`${color}60`}/>
            <rect x={x-18} y="152" width="36" height="12" rx="3" fill={`${color}40`} stroke={color} strokeWidth="1" opacity="0.6"/>
            <circle cx={x} cy={i===1?145:148} r="4" fill={color} opacity="0.5" className={`sol-stop-pulse sol-sp-${i}`}/>
          </g>
        ))}
        {/* Bus 1 */}
        <g className="sol-bus-1">
          <rect x="0" y="196" width="70" height="30" rx="6" fill={color}/>
          <rect x="4"  y="200" width="16" height="14" rx="2" fill="rgba(255,255,255,0.25)"/>
          <rect x="24" y="200" width="16" height="14" rx="2" fill="rgba(255,255,255,0.25)"/>
          <rect x="44" y="200" width="16" height="14" rx="2" fill="rgba(255,255,255,0.25)"/>
          <circle cx="14" cy="228" r="6" fill="#0a1628" stroke={color} strokeWidth="2"/>
          <circle cx="54" cy="228" r="6" fill="#0a1628" stroke={color} strokeWidth="2"/>
          <rect x="60" y="202" width="10" height="16" rx="2" fill={`${color}bb`}/>
          <text x="35" y="196" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">BUS-01</text>
        </g>
        {/* Bus 2 — going other way, offset */}
        <g className="sol-bus-2">
          <rect x="330" y="196" width="70" height="30" rx="6" fill={`${color}bb`}/>
          <rect x="336" y="200" width="16" height="14" rx="2" fill="rgba(255,255,255,0.2)"/>
          <rect x="356" y="200" width="16" height="14" rx="2" fill="rgba(255,255,255,0.2)"/>
          <circle cx="344" cy="228" r="6" fill="#0a1628" stroke={color} strokeWidth="2"/>
          <circle cx="384" cy="228" r="6" fill="#0a1628" stroke={color} strokeWidth="2"/>
          <text x="365" y="196" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">BUS-02</text>
        </g>
        {/* Schedule panel */}
        <rect x="120" y="60" width="160" height="90" rx="10" fill="rgba(124,58,237,0.08)" stroke={`${color}30`} strokeWidth="1"/>
        <text x="200" y="82" textAnchor="middle" fontSize="9" fill={color} fontWeight="700">LIVE SCHEDULE</text>
        {[['Route 4A','On Time','#22C55E'],['Route 7B','+2 min','#F59E0B'],['Route 12','On Time','#22C55E']].map(([r,s,c],i) => (
          <g key={i}>
            <text x="136" y={100+i*18} fontSize="8" fill="rgba(255,255,255,0.7)">{r}</text>
            <circle cx="240" cy={96+i*18} r="4" fill={c}/>
            <text x="248" y={100+i*18} fontSize="8" fill={c} fontWeight="600">{s}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════
   OUR APPROACH
══════════════════════════════════════ */
function ApproachSection() {
  const approaches = [
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>),
      title: 'Discover', color: '#1E6FFF',
      desc: 'We audit your current fleet operations and identify inefficiencies, cost leaks, and safety gaps that are costing you money.',
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>),
      title: 'Strategize', color: '#7C3AED',
      desc: 'We build a tailored roadmap aligned to your business goals — fuel savings, driver safety, or rapid scale.',
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>),
      title: 'Integrate', color: '#059669',
      desc: 'Seamless hardware installation and platform onboarding with zero downtime for your fleet operations.',
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>),
      title: 'Monitor', color: '#0891B2',
      desc: 'Real-time dashboards give you full visibility — every vehicle, every driver, every route, live 24/7.',
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0v10l4.5 4.5"/></svg>),
      title: 'Optimize', color: '#D97706',
      desc: 'AI continuously analyzes data and pushes smart recommendations to reduce costs and eliminate risk.',
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
      title: 'Scale', color: '#DC2626',
      desc: 'As your fleet grows, DriveVital grows with you — adding vehicles, users, and sites in seconds.',
    },
  ];

  /* Each node orbits its own ring.
     orbitNode keyframe: node translates to its radius, then
     the container rotates — node counter-rotates to stay upright. */
  const nodes = [
    { idx: 0, r: 80,  speed: 9  },
    { idx: 3, r: 80,  speed: 9  },
    { idx: 1, r: 138, speed: 14 },
    { idx: 4, r: 138, speed: 14 },
    { idx: 2, r: 192, speed: 20 },
    { idx: 5, r: 192, speed: 20 },
  ];

  // Evenly space pairs on each ring (180° apart)
  const startAngles = { 80: 60, 138: 130, 192: 200 };

  return (
    <section id="approach" className="section approach-section">
      <div className="container">
        <div className="approach-layout">

          {/* ── Left: animated Earth orbit ── */}
          <div className="approach-orbit-wrap reveal-left">
            <div className="approach-orbit">
              <div className="orbit-ring orbit-ring-1" />
              <div className="orbit-ring orbit-ring-2" />
              <div className="orbit-ring orbit-ring-3" />

              {/* Earth */}
              <div className="orbit-earth">
                <svg width="86" height="86" viewBox="0 0 86 86" fill="none">
                  <defs>
                    <radialGradient id="eg" cx="38%" cy="35%" r="65%">
                      <stop offset="0%"  stopColor="#4db6ff"/>
                      <stop offset="45%" stopColor="#1565c0"/>
                      <stop offset="100%" stopColor="#061428"/>
                    </radialGradient>
                    <radialGradient id="es" cx="28%" cy="26%" r="52%">
                      <stop offset="0%"  stopColor="rgba(255,255,255,0.38)"/>
                      <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                    </radialGradient>
                    <clipPath id="ec"><circle cx="43" cy="43" r="37"/></clipPath>
                  </defs>
                  <circle cx="43" cy="43" r="37" fill="url(#eg)"/>
                  <g clipPath="url(#ec)" fill="rgba(34,197,94,0.78)">
                    <ellipse cx="30" cy="28" rx="10" ry="6" transform="rotate(-18 30 28)"/>
                    <ellipse cx="50" cy="24" rx="7"  ry="4" transform="rotate(8 50 24)"/>
                    <ellipse cx="26" cy="44" rx="8"  ry="11" transform="rotate(-8 26 44)"/>
                    <ellipse cx="54" cy="42" rx="12" ry="7"  transform="rotate(14 54 42)"/>
                    <ellipse cx="60" cy="58" rx="6"  ry="4"  transform="rotate(-4 60 58)"/>
                    <ellipse cx="36" cy="60" rx="5"  ry="7"  transform="rotate(4 36 60)"/>
                  </g>
                  <circle cx="43" cy="43" r="37" fill="none" stroke="rgba(100,181,255,0.3)" strokeWidth="2.5"/>
                  <circle cx="43" cy="43" r="37" fill="url(#es)"/>
                  {/* Equator dashed ring */}
                  <ellipse cx="43" cy="43" rx="42" ry="9" fill="none"
                    stroke="rgba(30,111,255,0.45)" strokeWidth="1.5" strokeDasharray="4 3"/>
                </svg>
              </div>

              {/* Orbiting nodes — CSS animation via inline style */}
              {nodes.map((n) => {
                const a = approaches[n.idx];
                // pair on same ring start 180° apart
                const pairIndex = nodes.filter(x => x.r === n.r).indexOf(n);
                const startDeg = (startAngles[n.r] || 0) + pairIndex * 180;
                const animName = `orb${n.idx}`;
                const dir = n.r === 138 ? 'reverse' : 'normal';
                return (
                  <div
                    key={n.idx}
                    className="orbit-arm"
                    style={{
                      position: 'absolute',
                      top: '50%', left: '50%',
                      width: `${n.r * 2}px`,
                      height: `${n.r * 2}px`,
                      marginLeft: `-${n.r}px`,
                      marginTop: `-${n.r}px`,
                      borderRadius: '50%',
                      animation: `orbitSpin ${n.speed}s linear infinite ${dir}`,
                      animationDelay: `${-pairIndex * (n.speed / 2)}s`,
                    }}
                  >
                    {/* Node sits at top of the arm (12 o'clock) */}
                    <div
                      className="orbit-node"
                      style={{
                        position: 'absolute',
                        top: '-24px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        '--node-color': a.color,
                        /* counter-rotate so label stays upright */
                        animation: `orbitSpin ${n.speed}s linear infinite ${dir === 'normal' ? 'reverse' : 'normal'}`,
                        animationDelay: `${-pairIndex * (n.speed / 2)}s`,
                      }}
                    >
                      <div className="orbit-node-icon" style={{ color: a.color }}>
                        {a.icon}
                      </div>
                      <div className="orbit-node-label">{a.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: heading + cards ── */}
          <div className="approach-content reveal-right">
            <div className="section-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Our Approach
            </div>
            <h2 className="section-title">How we deliver<br /><span>real results</span></h2>
            <p className="section-subtitle" style={{ marginBottom: '28px' }}>
              Every DriveVital deployment follows a proven six-step methodology built to
              deliver measurable ROI from day one — not months later.
            </p>
            <div className="approach-cards">
              {approaches.map((a, i) => (
                <div key={i} className="approach-card" style={{ '--card-color': a.color }}>
                  <div className="approach-card-icon-wrap">{a.icon}</div>
                  <div className="approach-card-body">
                    <div className="approach-card-num">STEP {String(i + 1).padStart(2, '0')}</div>
                    <div className="approach-card-title">{a.title}</div>
                    <p className="approach-card-desc">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   PRICING
══════════════════════════════════════ */
function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: 'Rs 24,999',
      period: '/month',
      desc: 'Perfect for small fleets getting started with telematics.',
      features: ['Up to 10 vehicles', 'Real-time Monitoring System', 'Basic driver scoring', 'Email alerts', 'Standard reports', '8/5 email support'],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: 'Rs 74,999',
      period: '/month',
      desc: 'The most popular plan for growing fleet businesses.',
      features: ['Up to 50 vehicles', 'Everything in Starter', 'Weekly Report Generation', 'Maintenance alert', 'Fuel management', 'Advanced analytics', '24/7 priority support', 'API access'],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'Tailored solutions for large fleets with complex requirements.',
      features: ['Unlimited vehicles', 'Everything in Pro', 'Custom integrations', 'Dedicated account manager', 'On-site training', 'SLA guarantee', 'White-label options', 'Custom reporting'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="section-header center reveal">
          <div className="section-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            Transparent Pricing
          </div>
          <h2 className="section-title">Simple pricing,<br /><span>no surprises</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Every plan includes a 14-day free trial. No credit card required. Cancel any time.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`pricing-card card reveal delay-${i + 1}${p.popular ? ' pricing-popular' : ''}`}
            >
              {p.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-price">
                <span className="price-amount">{p.price}</span>
                <span className="price-period">{p.period}</span>
              </div>
              <p className="plan-desc">{p.desc}</p>
              <div className="plan-divider" />
              <ul className="plan-features">
                {p.features.map(f => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={p.popular ? 'btn-primary' : 'btn-outline'}
                style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', paddingTop: '24px', display: 'inline-flex' }}
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════ */
/* ══════════════════════════════════════
   TESTIMONIALS — infinite marquee + ticker
══════════════════════════════════════ */
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Hamza Akmal',
      role: 'Fleet Director, Pakistan Logistic Co.',
      avatar: 'HA',
      color: '#1E6FFF',
      metric: '22% fuel cut',
      text: 'DriveVital transformed our operations completely. We reduced fuel costs by 22% in the first three months and our on-time delivery rate jumped from 87% to 97%.',
      rating: 5,
    },
    {
      name: 'Sarah Maalik',
      role: 'Operations Manager, BuildRight',
      avatar: 'SM',
      color: '#059669',
      metric: '$40K repairs saved',
      text: 'The predictive maintenance feature alone has saved us over $40,000 in unexpected repairs this year. The platform is incredibly intuitive.',
      rating: 5,
    },
    {
      name: 'Haider Mubarak',
      role: 'CEO, City Express Transport',
      avatar: 'HM',
      color: '#7C3AED',
      metric: 'Best route optimizer',
      text: 'We evaluated five different fleet platforms before choosing DriveVital. The route optimization is genuinely the best in the market.',
      rating: 5,
    },
    {
      name: 'Ali Raza',
      role: 'Logistics Head, FastCargo Ltd',
      avatar: 'AR',
      color: '#D97706',
      metric: '35% on-time boost',
      text: 'Delivery SLAs improved dramatically. The live ETA alerts keep our customers happy and our ops team focused on what matters.',
      rating: 5,
    },
    {
      name: 'Nadia Khan',
      role: 'VP Operations, Metro Bus Authority',
      avatar: 'NK',
      color: '#0891B2',
      metric: '0 compliance fines',
      text: 'Compliance reporting used to take our team three days per month. With DriveVital it\'s automated and takes minutes. Zero fines since we started.',
      rating: 5,
    },
  ];

  // duplicate for seamless loop
  const doubled = [...testimonials, ...testimonials];

  const [hovered, setHovered] = useState(false);

  return (
    <section className="testi-section">
      <div className="container">
        <div className="section-header center reveal" style={{ marginBottom: '56px' }}>
          <div className="section-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Customer Stories
          </div>
          <h2 className="section-title">What fleet managers<br /><span>say about us</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real results from real fleets across Pakistan and beyond.
          </p>
        </div>
      </div>

      {/* Infinite marquee — full width, no container constraint */}
      <div
        className="testi-marquee-wrap"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Fade masks */}
        <div className="testi-mask-left"  />
        <div className="testi-mask-right" />

        <div className={`testi-track${hovered ? ' paused' : ''}`}>
          {doubled.map((t, i) => (
            <div key={i} className="testi-card" style={{ '--tc': t.color }}>
              {/* Glow orb */}
              <div className="testi-glow" style={{ background: t.color }} />

              {/* Header */}
              <div className="testi-card-head">
                <div className="testi-avatar" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}>
                  {t.avatar}
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
                {/* Metric badge */}
                <div className="testi-metric" style={{ background: `${t.color}18`, color: t.color, borderColor: `${t.color}35` }}>
                  {t.metric}
                </div>
              </div>

              {/* Stars */}
              <div className="testi-stars">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="testi-text">"{t.text}"</p>

              {/* Bottom bar */}
              <div className="testi-bar" style={{ background: t.color }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom trust row */}
      <div className="container">
        <div className="testi-trust-row reveal">
          {[
            { val: '2,000+', label: 'Fleet operators trust DriveVital' },
            { val: '4.9 / 5', label: 'Average customer rating' },
            { val: '97%',     label: 'Would recommend to peers' },
            { val: '< 2 hrs', label: 'Average support response time' },
          ].map((s, i) => (
            <div key={i} className="testi-trust-item">
              <span className="testi-trust-val">{s.val}</span>
              <span className="testi-trust-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ROOT EXPORT
══════════════════════════════════════ */
export default function Home() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <StatsBanner />
      <FeaturesSection />
      <HowItWorksSection />
      <SolutionsSection />
      <ApproachSection />
      <PricingSection />
      <TestimonialsSection />
    </>
  );
}
