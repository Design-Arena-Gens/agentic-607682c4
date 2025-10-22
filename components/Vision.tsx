const pillars = [
  {
    title: 'AI-Infused Pedagogy',
    description:
      'Dynamic learning journeys orchestrated by Athena™, India’s first AI mentor network that adapts to linguistic diversity and learner velocity.'
  },
  {
    title: 'District Innovation Labs',
    description:
      'Future skills arenas embedded in schools, colleges and skilling hubs—complete with rapid prototyping, robotics and immersive reality studios.'
  },
  {
    title: 'Industry Impact Grid',
    description:
      'Continuous collaboration with startups, MSMEs, and national missions to translate classroom projects into deployable innovations.'
  }
];

const roadmap = [
  {
    phase: 'Phase 01',
    title: 'Ignite',
    detail: 'AI readiness diagnostics, faculty immersion bootcamps, launch of foundational studios.'
  },
  {
    phase: 'Phase 02',
    title: 'Accelerate',
    detail: 'Launch multi-disciplinary challenges, build district innovation labs, activate mentor grid.'
  },
  {
    phase: 'Phase 03',
    title: 'Lead',
    detail: 'International collaborations, venture incubation, national showcase of student-led solutions.'
  }
];

export function Vision() {
  return (
    <section id="vision" aria-labelledby="vision-heading">
      <div className="container">
        <div className="grid-split" style={{ gap: '2.8rem', alignItems: 'stretch' }}>
          <div style={{ display: 'grid', gap: '1.2rem' }}>
            <span className="chip">Blueprint for Indian education transformation</span>
            <h2 id="vision-heading" className="section-heading">
              From classrooms to creation labs—building India’s most agile learning ecosystem.
            </h2>
            <p className="section-subheading">
              IIFS reconfigures learning around collaboration, creation and citizenship. Our model
              is co-authored with educators, students, and industry leaders to ensure radical
              relevance.
            </p>
            <div className="card" style={{ gap: '1rem', padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.35rem' }}>Mission • 2028</h3>
              <p>
                Equip 10 million learners and 250,000 educators with future skills literacy,
                enabling India to lead the global knowledge economy with responsible AI.
              </p>
              <div className="pill-list">
                {['National Education Policy', 'Digital India Mission', 'Skill India 2.0'].map(item => (
                  <span key={item} className="pill-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="glass-panel" style={{ padding: '2.1rem', display: 'grid', gap: '1.8rem' }}>
            <div className="grid" style={{ gap: '1.3rem' }}>
              {pillars.map(({ title, description }) => (
                <article key={title} className="highlight">
                  <h3 style={{ fontSize: '1.15rem', color: '#0b1120', marginBottom: '0.45rem' }}>{title}</h3>
                  <p style={{ color: 'rgba(15,23,42,0.9)', fontSize: '0.95rem' }}>{description}</p>
                </article>
              ))}
            </div>
            <div className="timeline" aria-label="Implementation roadmap">
              {roadmap.map(({ phase, title, detail }) => (
                <div key={phase} className="timeline-item">
                  <div className="timeline-bullet">{phase}</div>
                  <div
                    style={{
                      background: 'rgba(15,23,42,0.7)',
                      borderRadius: '18px',
                      border: '1px solid rgba(148,163,184,0.18)',
                      padding: '1.2rem'
                    }}
                  >
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>{title}</h3>
                    <p style={{ color: 'rgba(226,232,240,0.75)', marginTop: '0.4rem' }}>{detail}</p>
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
