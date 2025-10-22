const programs = [
  {
    title: 'Foundational AI Studios (Classes 6-8)',
    description:
      'Curiosity-fuelled journeys blending computational thinking, storytelling and responsible AI exploration.',
    outcomes: ['AI literacy badges', 'Design thinking sprints', 'Community showcase projects']
  },
  {
    title: 'Future Skills Accelerator (Classes 9-12)',
    description:
      'Multi-disciplinary cohorts building prototypes across mobility, climate, space-tech, health and defence.',
    outcomes: ['Capstone with industry mentors', 'Skill passport + micro-credentials', 'National innovation challenges']
  },
  {
    title: 'LaunchPad Labs (Higher-Ed & Lifelong)',
    description:
      'Immersive residencies co-created with startups and research labs to fast-track AI-first careers.',
    outcomes: ['Advanced stack mastery', 'Startup venture studio support', 'Global internship network']
  }
];

export function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          <span className="chip">Learning universe</span>
          <h2 id="programs-heading" className="section-heading">
            A continuum of future skills pathways from school to workforce.
          </h2>
          <p className="section-subheading">
            Every learning sprint at IIFS connects to national missions, industry breakthroughs and
            local community impact—ensuring a future-ready India that leads with empathy.
          </p>
        </div>
        <div className="card-grid">
          {programs.map(({ title, description, outcomes }) => (
            <article key={title} className="card">
              <header style={{ display: 'grid', gap: '0.6rem' }}>
                <span className="badge">3-6 Month Journey</span>
                <h3>{title}</h3>
              </header>
              <p>{description}</p>
              <ul style={{ display: 'grid', gap: '0.5rem', color: 'rgba(226,232,240,0.78)' }}>
                {outcomes.map(item => (
                  <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        marginTop: '0.35rem',
                        background: 'linear-gradient(135deg,#22d3ee,#6366f1)'
                      }}
                    />
                    <span style={{ fontSize: '0.95rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="card-footer">
                <span>Immersion cohorts every quarter</span>
                <span style={{ color: '#22d3ee', fontWeight: 600 }}>Apply →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
