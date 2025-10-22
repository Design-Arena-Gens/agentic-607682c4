const tracks = [
  {
    title: 'AI for Bharat Labs',
    description:
      'Multilingual AI tools, conversational agents and data commons curated for India’s public good missions.',
    focus: 'Skilling Outcomes',
    detail: 'Learners deploy chatbots for agriculture, health and civic services with human-in-the-loop validation.'
  },
  {
    title: 'Climate & Sustainable Futures',
    description:
      'Climate-tech studios combining satellite data, IoT, and predictive analytics to build resilient communities.',
    focus: 'Innovation Challenge',
    detail: 'State-level hackathons generating climate intelligence dashboards for disaster readiness.'
  },
  {
    title: 'Emergent Industries',
    description:
      'Space tech, metaverse, biotech and advanced manufacturing pathways co-created with strategic partners.',
    focus: 'Career Pathways',
    detail: 'Learners earn co-branded micro-credentials with ISRO, DRDO, MeitY, and industry alliances.'
  }
];

const labFeatures = [
  'Immersive XR studios for collaborative prototyping',
  'Rapid hardware labs with robotics and edge AI toolkits',
  'Ethics sandbox + policy studio for future governance',
  'Entrepreneurship launchpad with venture mentorship'
];

export function Innovation() {
  return (
    <section id="labs" aria-labelledby="labs-heading">
      <div className="container">
        <div className="grid-split" style={{ gap: '2.5rem' }}>
          <div className="video-frame" role="presentation">
            <div className="video-pulse" />
            <div className="video-glare" />
            <div className="video-content">
              <div className="play-button">▶</div>
              <p style={{ fontSize: '1.05rem', color: 'rgba(226,232,240,0.85)' }}>
                Dive into the IIFS Innovation Labs—where India’s youth design autonomous drones,
                smart agriculture systems and inclusive public services.
              </p>
              <span style={{ color: 'rgba(226,232,240,0.6)', fontSize: '0.85rem' }}>
                Experience centre · Bengaluru · Hyderabad · Pune
              </span>
            </div>
          </div>
          <div style={{ display: 'grid', gap: '1.75rem' }}>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <span className="chip">Innovation labs</span>
              <h2 id="labs-heading" className="section-heading">
                National grid of living labs for India-first innovations.
              </h2>
              <p className="section-subheading">
                Each lab is an ecosystem: AI mentors, domain experts, policy advisors and industry
                partners helping learners design solutions that scale across India and the world.
              </p>
            </div>
            <div className="card-grid">
              {tracks.map(({ title, description, focus, detail }) => (
                <article key={title} className="card">
                  <span className="badge">{focus}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p style={{ color: '#22d3ee', fontWeight: 600 }}>{detail}</p>
                </article>
              ))}
            </div>
            <ul className="tag-grid" style={{ marginTop: '0.5rem' }}>
              {labFeatures.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
