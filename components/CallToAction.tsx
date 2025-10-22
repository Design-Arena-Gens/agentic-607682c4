import Link from 'next/link';

export function CallToAction() {
  return (
    <section id="join" aria-labelledby="join-heading">
      <div className="container">
        <div className="gradient-border">
          <div
            className="glass-panel"
            style={{
              padding: '3rem',
              display: 'grid',
              gap: '1.2rem',
              textAlign: 'center'
            }}
          >
            <span className="chip" style={{ alignSelf: 'center' }}>
              Join the movement
            </span>
            <h2 id="join-heading" className="section-heading" style={{ margin: 0 }}>
              Become part of India’s largest AI-first learning alliance.
            </h2>
            <p className="section-subheading" style={{ margin: '0 auto', maxWidth: '680px' }}>
              Whether you are an educator, policymaker, industry partner or student, IIFS invites
              you to co-create transformative experiences that will redefine India’s learning
              destiny.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link className="cta-button primary" href="#">
                Launch an IIFS lab
              </Link>
              <Link className="cta-button secondary" href="#">
                Download the 2025 whitepaper
              </Link>
            </div>
            <div className="pill-list" style={{ justifyContent: 'center', marginTop: '0.75rem' }}>
              {['Institution partnerships', 'Faculty transformation', 'National innovation grid'].map(
                item => (
                  <span key={item} className="pill-item">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
