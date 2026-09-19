const plans = [
	['Starter', 'Up to 10 vehicles', 'A focused starting point for small fleets.'],
	['Professional', 'Up to 50 vehicles', 'A connected operating view for growing teams.'],
	['Enterprise', 'Unlimited vehicles', 'A practical plan for complex operations.'],
];

export default function PricingSection() {
	return <section id="pricing" className="section pricing-section"><div className="container"><div className="section-header center reveal"><div className="section-badge">Straightforward planning</div><h2 className="section-title">Choose your fleet's<br /><span>next gear</span></h2><p className="section-subtitle section-subtitle-centered">We will understand your operation first, then recommend the right setup.</p></div><div className="pricing-grid">{plans.map(([name, capacity, description], index) => <div key={name} className={`pricing-card card reveal delay-${index + 1}${name === 'Professional' ? ' pricing-popular' : ''}`}><div className="plan-kicker">{capacity}</div><div className="plan-name">{name}</div><div className="plan-price"><span className="price-amount">Custom quote</span></div><p className="plan-desc">{description}</p><div className="plan-divider" /><ul className="plan-features"><li>Fleet monitoring</li><li>Reports and alerts</li></ul><a href="#contact" className="btn-primary pricing-cta">Discuss your fleet</a></div>)}</div></div></section>;
}


