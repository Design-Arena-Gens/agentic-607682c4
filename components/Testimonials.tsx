const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Grade 11 · Pune',
    quote:
      'At IIFS, I built an AI system that predicts crop health for my village. We tested it with farmers, and now I am leading a student cooperative to scale it.'
  },
  {
    name: 'Dr. Raghav Rao',
    role: 'Principal · Government Model School, Hyderabad',
    quote:
      'IIFS transformed our teachers into co-creators. The AI mentor tools personalises every class, and our students now collaborate with international experts weekly.'
  },
  {
    name: 'Ayesha Khan',
    role: 'Lead, National AI Mission',
    quote:
      'The IIFS talent pipeline gives us young innovators who can deploy responsible AI solutions for government and social impact projects from day one.'
  }
];

export function Testimonials() {
  return (
    <section id="voices" aria-labelledby="voices-heading">
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.2rem' }}>
          <span className="chip">Voices from the future</span>
          <h2 id="voices-heading" className="section-heading">
            Learners, educators and partners building India’s future skills movement.
          </h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(({ name, role, quote }) => (
            <figure key={name} className="testimonial-card">
              <blockquote style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                “{quote}”
              </blockquote>
              <figcaption className="testimonial-meta">
                <div>
                  <strong style={{ color: 'rgba(226,232,240,0.95)' }}>{name}</strong>
                  <div>{role}</div>
                </div>
                <span style={{ color: '#22d3ee', fontWeight: 600 }}>Impact verified</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
