import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

// Animated truck that drives across then disappears
function LostTruck() {
  return (
    <div className="lost-truck-wrap">
      <div className="lost-truck">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Truck body */}
          <rect x="10" y="12" width="70" height="32" rx="4" fill="#1E6FFF" opacity="0.9"/>
          {/* Cab */}
          <rect x="76" y="20" width="32" height="24" rx="4" fill="#1558d6"/>
          {/* Window */}
          <rect x="82" y="24" width="18" height="12" rx="2" fill="#60a5fa" opacity="0.7"/>
          {/* Headlight */}
          <circle cx="108" cy="36" r="3" fill="#FCD34D"/>
          <circle cx="108" cy="36" r="5" fill="#FCD34D" opacity="0.2"/>
          {/* Wheels */}
          <circle cx="28" cy="46" r="8" fill="#1a2d4a" stroke="#1E6FFF" strokeWidth="2"/>
          <circle cx="28" cy="46" r="3" fill="#1E6FFF"/>
          <circle cx="68" cy="46" r="8" fill="#1a2d4a" stroke="#1E6FFF" strokeWidth="2"/>
          <circle cx="68" cy="46" r="3" fill="#1E6FFF"/>
          <circle cx="95" cy="46" r="8" fill="#1a2d4a" stroke="#1558d6" strokeWidth="2"/>
          <circle cx="95" cy="46" r="3" fill="#1558d6"/>
          {/* Exhaust */}
          <rect x="14" y="6" width="4" height="8" rx="2" fill="#94a3b8"/>
        </svg>
        {/* Dust trail */}
        <div className="dust-trail">
          <span></span><span></span><span></span>
        </div>
      </div>
      {/* Road */}
      <div className="road">
        <div className="road-dash"></div>
      </div>
    </div>
  );
}

// GPS ping animation
function GpsPing() {
  return (
    <div className="gps-ping-wrap">
      <div className="gps-ping-ring gps-ring-1"></div>
      <div className="gps-ping-ring gps-ring-2"></div>
      <div className="gps-ping-ring gps-ring-3"></div>
      <div className="gps-pin">
        <svg width="28" height="36" viewBox="0 0 24 30" fill="none">
          <path d="M12 0C7.03 0 3 4.03 3 9c0 6.75 9 21 9 21s9-14.25 9-21c0-4.97-4.03-9-9-9z" fill="#1E6FFF"/>
          <circle cx="12" cy="9" r="3.5" fill="white"/>
        </svg>
      </div>
    </div>
  );
}

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Auto-redirect after 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="notfound-page">
      {/* Background grid */}
      <div className="notfound-grid"></div>
      <div className="notfound-glow-1"></div>
      <div className="notfound-glow-2"></div>

      <div className="notfound-container">

        {/* Top — GPS ping + 404 */}
        <div className="notfound-visual">
          <GpsPing />
          <div className="notfound-code">
            <span className="code-4 code-left">4</span>
            <div className="code-zero">
              <div className="zero-inner">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
            </div>
            <span className="code-4 code-right">4</span>
          </div>
        </div>

        {/* Truck animation */}
        <LostTruck />

        {/* Message */}
        <div className="notfound-content">
          <div className="notfound-badge">
            <span className="badge-dot"></span>
            Vehicle Off Route
          </div>
          <h1 className="notfound-title">This route doesn't exist</h1>
          <p className="notfound-subtitle">
            Looks like this vehicle took a wrong turn. The page you're looking for has gone off the grid — our GPS can't locate it.
          </p>

          {/* Status card */}
          <div className="notfound-status-card">
            <div className="status-row">
              <span className="status-label">Vehicle ID</span>
              <span className="status-value">ERR-404</span>
            </div>
            <div className="status-row">
              <span className="status-label">Status</span>
              <span className="status-value status-lost">⚠ Route Not Found</span>
            </div>
            <div className="status-row">
              <span className="status-label">Last Signal</span>
              <span className="status-value">Unknown location</span>
            </div>
            <div className="status-row">
              <span className="status-label">Auto-redirect</span>
              <span className="status-value status-accent">
                Returning to base in {countdown}s
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="notfound-actions">
            <button className="btn-primary" onClick={() => navigate('/')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Return to Base
            </button>
            <button className="btn-outline notfound-contact-btn" onClick={() => { navigate('/'); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 300); }}>
              Report Issue
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
