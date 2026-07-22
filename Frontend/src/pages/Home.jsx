// Hero Section
function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Trusted by 2,000+ Fleet Operators
          </div>
          <h1 className="hero-title">
            Manage Your Fleet<br />
            <span className="hero-title-accent">Smarter, Faster,</span><br />
            More Profitably
          </h1>
          <p className="hero-subtitle">
            DriveVital is the all-in-one fleet management platform that helps you track vehicles in real time, reduce fuel costs, schedule maintenance, and keep every driver safe — all from one powerful dashboard.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Start Free Trial
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#how-it-works" className="btn-ghost" onClick={e => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              Watch Demo
            </a>
          </div>
          <div className="hero-trust">
            {['No credit card required', 'Free 14-day trial', '24/7 support'].map(t => (
              <div key={t} className="trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FFF" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="dashboard-mockup animate-float">
            <div className="mockup-header">
              <div className="mockup-dots"><span></span><span></span><span></span></div>
              <span className="mockup-title">Fleet Dashboard</span>
              <div className="mockup-status"><span className="status-dot live"></span>Live</div>
            </div>
            <div className="mockup-body">
              <div className="mockup-stats">
                {[
                  { label: 'Active Vehicles', value: '124', icon: '🚚', trend: '+3' },
                  { label: 'Fuel Saved', value: '18%', icon: '⛽', trend: '+2%' },
                  { label: 'On-Time Rate', value: '97.4%', icon: '✅', trend: '+1.2%' },
                ].map(s => (
                  <div key={s.label} className="stat-card">
                    <div className="stat-icon">{s.icon}</div>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                    <div className="stat-trend">↑ {s.trend}</div>
                  </div>
                ))}
              </div>
              <div className="mockup-map">
                <div className="map-bg"></div>
                {[
                  { x: '20%', y: '30%' }, { x: '45%', y: '20%' },
                  { x: '65%', y: '50%' }, { x: '35%', y: '60%' },
                  { x: '75%', y: '25%' },
                ].map((pos, i) => (
                  <div key={i} className="map-vehicle" style={{ left: pos.x, top: pos.y }}>
                    <div className="vehicle-ping"></div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#1E6FFF"><path d="M8 17l-5-5 5-5 1.41 1.41L6.83 11H16V4h2v9a2 2 0 0 1-2 2H6.83l2.58 2.59L8 19V17z" transform="rotate(90,12,12)"/><rect x="2" y="7" width="20" height="10" rx="2" fill="#1E6FFF" opacity=".8"/></svg>
                  </div>
                ))}
                <div className="route-line"></div>
              </div>
              <div className="mockup-alerts">
                {[
                  { text: 'Vehicle #A12 — Scheduled maintenance due', type: 'warn' },
                  { text: 'Route optimized — Saved 23 min', type: 'success' },
                  { text: 'Driver John D. — ETA on time', type: 'info' },
                ].map(a => (
                  <div key={a.text} className={`alert-item alert-${a.type}`}>
                    <div className="alert-dot"></div>
                    <span>{a.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse"><div className="scroll-wheel"></div></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

// Stats Banner
function StatsBanner() {
  const stats = [
    { value: '2,000+', label: 'Businesses Worldwide', icon: '🌍' },
    { value: '150K+', label: 'Vehicles Tracked Daily', icon: '🚚' },
    { value: '99.9%', label: 'Platform Uptime', icon: '⚡' },
    { value: 'Rs 11.6M', label: 'Fuel Costs Saved', icon: '💰' },
  ];
  return (
    <section className="stats-banner">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-emoji">{s.icon}</div>
              <div className="stat-number">{s.value}</div>
              <div className="stat-text">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
      title: 'Vehicle Status Cards',
      desc: 'Monitor the real-time status of every vehicle in your fleet. Instantly identify active, idle, maintenance, and offline vehicles to improve operational efficiency.',
      highlight: true,
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Driver Safety Scoring',
      desc: 'AI-powered behavior analysis scores every driver on speed, braking, acceleration, and cornering to reduce incidents by up to 40%.',
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      title: 'Predictive Maintenance',
      desc: 'Never miss a service window. DriveVital schedules maintenance based on mileage, engine data, and historical patterns automatically.',
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>,
      title: 'Fleet Table',
      desc: 'View and manage all fleet vehicles in a centralized table with key details such as status, location, driver, and maintenance information.',
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
      title: 'Fuel Management',
      desc: 'Track fuel consumption per vehicle, identify waste, and get actionable insights to cut your fleet\'s total fuel costs significantly.',
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title: 'Advanced Analytics',
      desc: 'Turn your fleet data into competitive advantage. Customizable reports, KPI dashboards, and automated PDF exports for stakeholders.',
    },
  ];

  return (
    <section id="features" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header center">
          <div className="section-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Core Features
          </div>
          <h2 className="section-title">Everything your fleet needs,<br /><span>in one platform</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From a single van to a thousand vehicles — DriveVital scales with your business and delivers the tools that matter.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className={`feature-card card${f.highlight ? ' feature-card-highlight' : ''}`}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <a href="#contact" className="feature-link" onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Install & Connect',
      desc: 'Plug our compact GPS devices into your vehicles or connect via OBD-II. Setup takes under 5 minutes per vehicle — no mechanics needed.',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    },
    {
      step: '02',
      title: 'Set Your Goals',
      desc: 'Tell DriveVital what matters most — fuel savings, driver safety, delivery windows, or compliance. We configure your dashboard accordingly.',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    },
    {
      step: '03',
      title: 'Monitor & Optimize',
      desc: 'Watch your fleet in real time. Receive smart alerts, optimize routes on the fly, and get AI-powered recommendations to improve efficiency.',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    },
    {
      step: '04',
      title: 'Save & Scale',
      desc: 'Watch costs drop month over month. Add more vehicles as you grow — DriveVital handles fleets of any size with no performance loss.',
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    },
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="hiw-layout">
          <div className="section-header">
            <div className="section-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-11v5m0-8v1"/></svg>
              How It Works
            </div>
            <h2 className="section-title">Up and running<br /><span>in minutes</span></h2>
            <p className="section-subtitle">
              No complex installations, no IT department required. DriveVital is designed so any fleet manager can be fully operational the same day.
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }} onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Get Started Today
            </a>
          </div>
          <div className="steps-list">
            {steps.map((s, i) => (
              <div key={i} className="step-item">
                <div className="step-connector">
                  <div className="step-number">{s.step}</div>
                  {i < steps.length - 1 && <div className="step-line"></div>}
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

// Fleet Solutions Section
function SolutionsSection() {
  const solutions = [
    {
      title: 'Delivery & Logistics',
      icon: '📦',
      desc: 'Optimize last-mile delivery routes, track packages in real time, and keep customers informed with automated ETA notifications.',
      features: ['Route optimization', 'Proof of delivery', 'Customer notifications', 'Load management'],
    },
    {
      title: 'Field Service',
      icon: '🔧',
      desc: 'Dispatch the nearest technician, monitor job completion, and manage work orders with seamless CRM integration.',
      features: ['Smart dispatching', 'Job scheduling', 'CRM integration', 'Time tracking'],
    },
    {
      title: 'Construction & Heavy Equipment',
      icon: '🏗️',
      desc: 'Track construction vehicles, heavy machinery, and equipment across multiple sites. Prevent theft and monitor idle time.',
      features: ['Asset tracking', 'Geofencing', 'Idle monitoring', 'Theft prevention'],
    },
    {
      title: 'Transportation & Passenger',
      icon: '🚌',
      desc: 'Manage passenger transport fleets with real-time bus tracking, driver scheduling, and compliance reporting.',
      features: ['Passenger tracking', 'Schedule management', 'Compliance tools', 'Safety reports'],
    },
  ];

  return (
    <section id="solutions" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header center">
          <div className="section-badge">🏢 Industry Solutions</div>
          <h2 className="section-title">Built for your<br /><span>industry</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            DriveVital adapts to the unique demands of every sector, with pre-configured workflows designed for your team.
          </p>
        </div>
        <div className="solutions-grid">
          {solutions.map((s, i) => (
            <div key={i} className="solution-card card">
              <div className="solution-icon">{s.icon}</div>
              <h3 className="solution-title">{s.title}</h3>
              <p className="solution-desc">{s.desc}</p>
              <ul className="solution-features">
                {s.features.map(f => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '24px' }} onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Our Approach Section
function ApproachSection() {
  const approaches = [
    { icon: '🔍', title: 'Discover', desc: 'We audit your current fleet operations and identify inefficiencies, cost leaks, and safety gaps.' },
    { icon: '🎯', title: 'Strategize', desc: 'We build a tailored roadmap aligned to your business goals — fuel savings, safety, or scale.' },
    { icon: '⚙️', title: 'Integrate', desc: 'Seamless hardware installation and platform onboarding with zero downtime for your fleet.' },
    { icon: '📊', title: 'Monitor', desc: 'Real-time dashboards give you full visibility — every vehicle, every driver, every route, live.' },
    { icon: '🤖', title: 'Optimize', desc: 'AI continuously analyzes data and pushes smart recommendations to reduce costs and risks.' },
    { icon: '📈', title: 'Scale', desc: 'As your fleet grows, DriveVital grows with you — adding vehicles, users, and sites in seconds.' },
  ];

  // Positions for 6 nodes on a circle (clock positions: 12, 2, 4, 6, 8, 10)
  const angles = [270, 330, 30, 90, 150, 210]; // degrees, starting top
  const radius = 42; // % of container

  return (
    <section id="approach" className="section approach-section">
      <div className="container">
        <div className="approach-layout">

          {/* Left — circle diagram */}
          <div className="approach-diagram-wrap">
            <div className="approach-circle-container">
              {/* Outer decorative rings */}
              <div className="approach-ring approach-ring-1"></div>
              <div className="approach-ring approach-ring-2"></div>

              {/* Center hub */}
              <div className="approach-center-hub">
                <svg width="36" height="36" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="8" fill="#1E6FFF"/>
                  <path d="M6 20L10 12L14 16L18 10L22 20H6Z" fill="white" fillOpacity="0.9"/>
                  <circle cx="14" cy="8" r="2.5" fill="white"/>
                </svg>
                <span>DriveVital</span>
              </div>

              {/* Connector lines */}
              <svg className="approach-lines" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {angles.map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x2 = 200 + radius * 1.68 * Math.cos(rad);
                  const y2 = 200 + radius * 1.68 * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1="200" y1="200"
                      x2={x2} y2={y2}
                      stroke="rgba(30,111,255,0.2)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>

              {/* Node items */}
              {approaches.map((a, i) => {
                const angle = angles[i];
                const rad = (angle * Math.PI) / 180;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                return (
                  <div
                    key={i}
                    className="approach-node"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="approach-node-icon">{a.icon}</div>
                    <div className="approach-node-label">{a.title}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — text + cards */}
          <div className="approach-content">
            <div className="section-badge">🧭 Our Approach</div>
            <h2 className="section-title">How we deliver<br /><span>real results</span></h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>
              Every DriveVital deployment follows a proven six-step methodology built to deliver measurable ROI from day one — not months later.
            </p>
            <div className="approach-cards">
              {approaches.map((a, i) => (
                <div key={i} className="approach-card">
                  <div className="approach-card-num">0{i + 1}</div>
                  <div className="approach-card-body">
                    <div className="approach-card-title">
                      <span>{a.icon}</span> {a.title}
                    </div>
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
        <div className="section-header center">
          <div className="section-badge">💰 Transparent Pricing</div>
          <h2 className="section-title">Simple pricing,<br /><span>no surprises</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Every plan includes a 14-day free trial. No credit card required. Cancel any time.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div key={i} className={`pricing-card card${p.popular ? ' pricing-popular' : ''}`}>
              {p.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-price">
                <span className="price-amount">{p.price}</span>
                <span className="price-period">{p.period}</span>
              </div>
              <p className="plan-desc">{p.desc}</p>
              <div className="plan-divider"></div>
              <ul className="plan-features">
                {p.features.map(f => (
                  <li key={f}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
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

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Hamza Akmal',
      role: 'Fleet Director, Pakistan Logistic Company.',
      avatar: 'HA',
      text: 'DriveVital transformed our operations completely. We reduced fuel costs by 22% in the first three months and our on-time delivery rate jumped from 87% to 97%. I can\'t imagine managing our 200-vehicle fleet without it.',
      rating: 5,
    },
    {
      name: 'Sarah Maalik',
      role: 'Operations Manager, BuildRight Construction',
      avatar: 'SM',
      text: 'The predictive maintenance feature alone has saved us over $40,000 in unexpected repairs this year. The platform is incredibly intuitive and our drivers actually love the safety coaching feature.',
      rating: 5,
    },
    {
      name: 'Haider Mubarak',
      role: 'CEO, City Express Transport',
      avatar: 'HM',
      text: 'We evaluated five different fleet platforms before choosing DriveVital. The route optimization is genuinely the best in the market, and the customer support team is always available when we need them.',
      rating: 5,
    },
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header center">
          <div className="section-badge">⭐ Customer Stories</div>
          <h2 className="section-title">What fleet managers<br /><span>say about us</span></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card card">
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Home export
export default function Home() {
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
