import { useState, useEffect } from 'react';
import './contact.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const offices = [
  {
    city: 'Lahore, Punjab',
    address: '132-B Ali Akbar Street, Valencia Town, Lahore, Punjab',
    phone: '+92 332 0241610',
  },
];

/* ══════════════════════════════════════
   PHONE MODAL
══════════════════════════════════════ */
function PhoneModal({ onClose }) {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close-x" onClick={onClose} aria-label="Close">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="modal-icon-wrap modal-icon-blue">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.47 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <h2 className="modal-title">Call Us Directly</h2>
        <p className="modal-subtitle">Our fleet specialists are available Mon–Sat, 9am–7pm PKT</p>
        <a href="tel:+923320241610" className="modal-phone-number">+92 332 0241610</a>
        <p className="modal-note">Tap the number above to call on mobile</p>
        <button className="btn-primary modal-return-btn" onClick={onClose}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Return
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   EMAIL MODAL
══════════════════════════════════════ */
function EmailModal({ onClose }) {
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close-x" onClick={onClose} aria-label="Close">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="modal-icon-wrap modal-icon-purple">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <h2 className="modal-title">Email Us</h2>
        <p className="modal-subtitle">We reply to every inquiry within 2 business hours</p>
        <a href="mailto:drivevitalsofficial@gmail.com" className="modal-email-address">
          drivevitalsofficial@gmail.com
        </a>
        <p className="modal-note">Click the address above to open your email client</p>
        <button className="btn-primary modal-return-btn" onClick={onClose}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Return
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   DEMO MODAL
══════════════════════════════════════ */
function DemoModal({ onClose }) {
  const [form, setForm] = useState({ company: '', phonenumber: '', email: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong.');
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box modal-box-lg" onClick={e => e.stopPropagation()}>
        <button className="modal-close-x" onClick={onClose} aria-label="Close">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h2 className="modal-title">Request Received!</h2>
            <p className="modal-subtitle">
              Thank you for your interest. Our team will reach out within{' '}
              <strong>2 hours</strong> to schedule your demo.
            </p>
            <button className="btn-primary modal-return-btn" onClick={onClose}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Return
            </button>
          </div>
        ) : (
          <>
            <div className="modal-icon-wrap modal-icon-green">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8"  y1="2" x2="8"  y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h2 className="modal-title">Book a Free Demo</h2>
            <p className="modal-subtitle">
              Tell us about your company and we'll schedule a personalised demo for you.
            </p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="dm-company">Company Name *</label>
                <input id="dm-company" name="company" type="text" placeholder="Your company"
                  value={form.company} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="dm-phone">Phone Number *</label>
                <input id="dm-phone" name="phonenumber" type="tel" placeholder="+92 300 0000000"
                  value={form.phonenumber} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="dm-email">Email Address *</label>
                <input id="dm-email" name="email" type="email" placeholder="you@company.com"
                  value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="dm-desc">Why do you need DriveVital? *</label>
                <textarea id="dm-desc" name="description" rows={4}
                  placeholder="Tell us about your fleet size, current challenges, and what you're hoping to achieve..."
                  value={form.description} onChange={handleChange} required />
              </div>

              {error && (
                <div className="form-error">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {error}
                </div>
              )}

              <div className="modal-form-actions">
                <button type="button" className="btn-outline" onClick={onClose}>Cancel</button>
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading
                    ? <><div className="spinner" /> Submitting...</>
                    : <>Submit Request <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>
                  }
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN CONTACT PAGE
══════════════════════════════════════ */
export default function Contact() {
  const [activeModal, setActiveModal] = useState(null);

  const [formData, setFormData] = useState({
    fullname: '', email: '', company: '', phonenumber: '',
    fleetsize: '', inquirytype: 'demo', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong.');
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError('');
    setFormData({ fullname: '', email: '', company: '', phonenumber: '', fleetsize: '', inquirytype: 'demo', message: '' });
  };

  const contactOptions = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      title: 'Live Chat',
      desc: 'Chat with our team in real time',
      action: 'Start Chat',
      modal: null,
      color: '#22C55E',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.47 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Phone Support',
      desc: 'Talk to a fleet specialist',
      action: 'Call Now',
      modal: 'phone',
      color: '#1E6FFF',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email Us',
      desc: 'We reply within 2 business hours',
      action: 'Send Email',
      modal: 'email',
      color: '#7C3AED',
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8"  y1="2" x2="8"  y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: 'Book a Demo',
      desc: 'See DriveVital in action live',
      action: 'Schedule Demo',
      modal: 'demo',
      color: '#F59E0B',
    },
  ];

  return (
    <div id="contact">
      {/* Modals */}
      {activeModal === 'phone' && <PhoneModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'email' && <EmailModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'demo'  && <DemoModal  onClose={() => setActiveModal(null)} />}

      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <div className="contact-hero-grid" />
          <div className="contact-hero-glow" />
        </div>
        <div className="container">
          <div className="contact-hero-content">
            <div className="section-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Get In Touch
            </div>
            <h1 className="section-title contact-hero-title">
              Let's build a smarter<br /><span>fleet together</span>
            </h1>
            <p className="section-subtitle contact-hero-subtitle">
              Whether you're ready to start your free trial, want a live demo, or just have
              questions — our fleet specialists are ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact option cards ── */}
      <section className="section-sm contact-options-section">
        <div className="container">
          <div className="contact-options-grid">
            {contactOptions.map((opt, i) => (
              <div
                key={i}
                className={`contact-option contact-option-${opt.modal || 'office'} card`}
                onClick={() => opt.modal && setActiveModal(opt.modal)}
                role={opt.modal ? 'button' : undefined}
                tabIndex={opt.modal ? 0 : undefined}
                onKeyDown={e => e.key === 'Enter' && opt.modal && setActiveModal(opt.modal)}
              >
                <div className="co-icon-wrap">
                  {opt.icon}
                </div>
                <h3 className="co-title">{opt.title}</h3>
                <p className="co-desc">{opt.desc}</p>
                <button
                  className="co-btn"
                  onClick={e => { e.stopPropagation(); opt.modal && setActiveModal(opt.modal); }}
                >
                  {opt.action}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main form + info ── */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">

            {/* Form */}
            <div className="contact-form-wrap">
              <h2 className="section-title form-title">Send us a message</h2>
              <p className="form-intro-text">
                Fill out the form and a fleet specialist will get back to you within 2 hours.
              </p>

              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3>Message sent!</h3>
                  <p>Thank you for reaching out. Our team will contact you within 2 business hours.</p>
                  <button className="btn-primary form-reset-btn" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullname">Full Name *</label>
                      <input id="fullname" name="fullname" type="text" placeholder="John Smith"
                        value={formData.fullname} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Work Email *</label>
                      <input id="email" name="email" type="email" placeholder="john@company.com"
                        value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company Name *</label>
                      <input id="company" name="company" type="text" placeholder="Your company"
                        value={formData.company} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phonenumber">Phone Number *</label>
                      <input id="phonenumber" name="phonenumber" type="tel" placeholder="+92 300 0000000"
                        value={formData.phonenumber} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fleetsize">Fleet Size</label>
                      <select id="fleetsize" name="fleetsize" value={formData.fleetsize} onChange={handleChange}>
                        <option value="">Select fleet size</option>
                        <option value="1-10">1–10 vehicles</option>
                        <option value="11-50">11–50 vehicles</option>
                        <option value="51-200">51–200 vehicles</option>
                        <option value="201-500">201–500 vehicles</option>
                        <option value="500+">500+ vehicles</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inquirytype">Inquiry Type</label>
                      <select id="inquirytype" name="inquirytype" value={formData.inquirytype} onChange={handleChange}>
                        <option value="demo">Request a Demo</option>
                        <option value="trial">Free Trial</option>
                        <option value="pricing">Pricing Question</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows={5}
                      placeholder="Tell us about your fleet and what you're looking to achieve..."
                      value={formData.message} onChange={handleChange} required />
                  </div>

                  {error && (
                    <div className="form-error">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                      {error}
                    </div>
                  )}

                  <button type="submit" className="btn-primary form-submit" disabled={loading}>
                    {loading
                      ? <><div className="spinner" /> Sending...</>
                      : <>Send Message <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>
                    }
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className="contact-info-panel">
              <div className="info-section">
                <h3>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Our Office
                </h3>
                {offices.map((o, i) => (
                  <div key={i} className="office-item">
                    <div className="office-flag-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="2" y1="12" x2="22" y2="12"/>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="office-city">{o.city}</div>
                      <div className="office-detail">{o.address}</div>
                      <div className="office-phone">{o.phone}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-section">
                <h3>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  Support Hours
                </h3>
                <div className="hours-grid">
                  <div className="hours-item"><span>Demo calls</span><span className="hours-value">By appointment</span></div>
                  <div className="hours-item"><span>Email enquiries</span><span className="hours-value">Within 1 business day</span></div>
                  <div className="hours-item"><span>Phone support</span><span className="hours-value">Mon–Sat 9–7 PKT</span></div>
                </div>
              </div>

              <div className="info-section">
                <h3>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                  What you can expect
                </h3>
                <div className="trust-grid">
                  {['A clear fleet assessment', 'A tailored walkthrough', 'Practical rollout advice', 'Local human support'].map(t => (
                    <div key={t} className="trust-tag">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
