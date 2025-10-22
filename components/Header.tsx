import Link from 'next/link';

const navLinks = [
  { href: '#programs', label: 'Programs' },
  { href: '#labs', label: 'Innovation Labs' },
  { href: '#vision', label: 'Vision' },
  { href: '#voices', label: 'Voices' }
];

export function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(16px)',
        background: 'rgba(2,6,23,0.75)',
        borderBottom: '1px solid rgba(148,163,184,0.12)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.5rem'
        }}
      >
        <Link href="#home" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem' }}>
          IIFS
        </Link>
        <nav aria-label="Primary navigation" style={{ display: 'flex', gap: '1.1rem', alignItems: 'center' }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'rgba(226,232,240,0.75)',
                fontSize: '0.95rem',
                fontWeight: 500
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link className="cta-button primary" href="#join" style={{ padding: '0.65rem 1.25rem', fontSize: '0.9rem' }}>
            Partner with IIFS
          </Link>
        </nav>
      </div>
    </header>
  );
}
