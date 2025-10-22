import Link from 'next/link';

const heroPoints = [
  'Hyper-personalised AI mentors tracking every learner goal',
  'Industry-backed challenges co-designed with India’s tech leaders',
  'Skill passports aligned to NEP 2020 and global frameworks'
];

const impactHighlights = [
  { label: 'Districts piloting IIFS labs', value: '28+' },
  { label: 'Students mastering AI skills', value: '160K' },
  { label: 'Industry innovation partners', value: '85' }
];

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading">
      <div className="container">
        <div className="grid-split" style={{ gap: '2.5rem', alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <span className="chip">Indian Institute of Future Skills</span>
            <h1
              id="hero-heading"
              className="section-heading"
              style={{ fontSize: 'clamp(2.8rem, 2rem + 2.5vw, 4rem)', lineHeight: 1.1 }}
            >
              Reimagining India’s learning ecosystem with AI-native education.
            </h1>
            <p className="section-subheading" style={{ fontSize: '1.1rem' }}>
              IIFS empowers every district with AI-powered, experiential learning pathways that
              help Indian students imagine, prototype, and build solutions for the world.
            </p>
            <ul className="tag-grid" aria-label="Key differentiators">
              {heroPoints.map(point => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
              <Link className="cta-button primary" href="#programs">
                Explore our learning universe
              </Link>
              <Link className="cta-button secondary" href="#vision">
                View the IIFS transformation blueprint
              </Link>
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(148, 163, 184, 0.2)'
              }}
              aria-label="Impact metrics"
            >
              {impactHighlights.map(item => (
                <div key={item.label} style={{ minWidth: '140px' }}>
                  <div className="stat-value" style={{ fontSize: '2rem' }}>
                    {item.value}
                  </div>
                  <div className="stat-label" style={{ fontSize: '0.75rem' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside
            className="glass-panel"
            style={{
              padding: '2.6rem',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
            aria-label="Preview of IIFS learning stack"
          >
            <div
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(34,211,238,0.25), transparent 70%)',
                top: '-25%',
                right: '-30%'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge">IIFS Learning Graph</span>
              <span style={{ color: 'rgba(226,232,240,0.6)', fontSize: '0.85rem' }}>Updated daily</span>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div className="highlight" style={{ display: 'grid', gap: '0.35rem' }}>
                <span style={{ color: '#0b1120', fontWeight: 700 }}>AI Mentor Signal</span>
                <span>
                  Real-time insights from Athena™, our adaptive mentor, guiding every learner’s
                  mastery journey.
                </span>
              </div>
              <div className="card" style={{ gap: '0.65rem', padding: '1.6rem' }}>
                <span className="badge" style={{ width: 'fit-content' }}>
                  Skill Pathway · Today
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.25rem' }}>Design an AI guardian for smart agriculture</h3>
                  <p>
                    District cohort co-creating precision farming dashboards with satellite and
                    soil data fused via machine learning.
                  </p>
                </div>
                <div className="pill-list">
                  {['Remote Sensing', 'AgriTech', 'Responsible AI'].map(tag => (
                    <span key={tag} className="pill-item">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card" style={{ gap: '0.75rem', padding: '1.6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Learner Pulse</h3>
                  <span style={{ color: '#22d3ee', fontWeight: 600 }}>98% flow state</span>
                </div>
                <p style={{ margin: 0 }}>
                  Students co-leading national hackathons with advanced prototyping, design
                  thinking and ethics sprints.
                </p>
                <div style={{ display: 'grid', gap: '0.45rem', marginTop: '0.3rem' }}>
                  {[
                    'Mentor network of 420 specialists across AI, ClimateTech, Biodesign',
                    'Immersive cluster labs in 4 regional experience centres'
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg,#22d3ee,#6366f1)'
                        }}
                      />
                      <span style={{ color: 'rgba(226,232,240,0.8)', fontSize: '0.92rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
