export function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer-content">
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div className="footer-logo">IIFS</div>
            <p style={{ color: 'rgba(226,232,240,0.7)', maxWidth: '320px' }}>
              Indian Institute of Future Skills is a catalyst for India’s AI-driven renaissance—
              ensuring every learner is future ready.
            </p>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            <a href="#programs">Programs</a>
            <a href="#labs">Innovation Labs</a>
            <a href="#vision">Vision</a>
          </div>
          <div className="footer-links">
            <span>Connect</span>
            <a href="#join">Partnerships</a>
            <a href="mailto:hello@iifs.in">hello@iifs.in</a>
            <a href="#">Impact Report</a>
          </div>
          <div className="footer-links">
            <span>Headquarters</span>
            <p style={{ margin: 0 }}>Bengaluru · Hyderabad · New Delhi</p>
            <p style={{ margin: 0 }}>Pan-India satellite innovation hubs</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Indian Institute of Future Skills. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
