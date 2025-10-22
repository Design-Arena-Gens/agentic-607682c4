const stats = [
  {
    value: '4D Curriculum Spine',
    label: 'Deep tech, design, domain, and development integrated into every pathway',
    trend: 'NEP 2020 aligned · 52 interdisciplinary studios'
  },
  {
    value: '94% Career Readiness',
    label: 'Learners demonstrating industry-grade prototypes within 18 weeks',
    trend: 'Mentor verified · Capstone at TRL 5'
  },
  {
    value: 'Ethics-by-Design',
    label: 'Responsible AI, sustainability and inclusivity embedded in every brief',
    trend: 'Global SDG guidance · 3 social impact challenges per cohort'
  }
];

export function Stats() {
  return (
    <section aria-labelledby="stats-heading">
      <div className="container">
        <div className="grid-split" style={{ gap: '2.5rem', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span className="chip">Why IIFS now</span>
            <h2 id="stats-heading" className="section-heading">
              The bridge between Bharat’s classrooms and India’s trillion-dollar digital vision.
            </h2>
            <p className="section-subheading">
              India stands on the cusp of an AI-first future. IIFS embeds cutting-edge labs inside
              schools, universities and district skill hubs, accelerating learners into
              future-proof careers with purpose.
            </p>
            <ul className="tag-grid" style={{ marginTop: '1.25rem' }}>
              {[
                'Experiential studios for classes 6-12 & higher-ed',
                'National AI mentorship grid across 26 domains',
                'Live challenge credits with global innovation partners'
              ].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid" style={{ gap: '1.25rem' }}>
            {stats.map(({ value, label, trend }) => (
              <article key={value} className="stat-card" aria-label={value}>
                <div className="stat-value" style={{ fontSize: '2.4rem' }}>
                  {value}
                </div>
                <p style={{ color: 'rgba(226,232,240,0.8)', marginTop: '0.8rem', fontSize: '1rem' }}>
                  {label}
                </p>
                <div className="stat-trend">{trend}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
