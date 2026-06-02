const members = [
  {
    name: 'Tinatin Gholadze',
    role: 'President',
    details: null,
    linkedin: null,
  },
  {
    name: 'Oskar Breitfeld',
    role: 'Claude Ambassador',
    details: 'M.Sc. Energy Engineer @ TUM · Builder @ SAP · Board @ CBC',
    linkedin: 'https://www.linkedin.com/in/johannes-breitfeld/',
  },
  {
    name: 'Empalo',
    role: 'Claude Ambassador',
    details: null,
    linkedin: null,
  },
  {
    name: 'Benno Kolar',
    role: 'CBC Engineer',
    details: 'Double Bachelor @ TUM · Junior Consultant @ TNG',
    linkedin: 'https://www.linkedin.com/in/benno-kolar/',
  },
];

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return <>{name.slice(0, 2).toUpperCase()}</>;
  return <>{parts[0][0]}{parts[parts.length - 1][0]}</>;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function AboutUs() {
  return (
    <section id="about" className="bg-muted py-16 sm:py-20">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
            The team
          </span>
          <h2 className="text-headline mt-3">About Us</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map(({ name, role, details, linkedin }) => (
            <div
              key={name}
              className="glass-card rounded-2xl shadow-lift p-6 flex flex-col items-center gap-4 text-center"
            >
              {/* Avatar */}
              <div
                className="h-20 w-20 rounded-full flex items-center justify-center text-xl font-semibold text-warm-accent border-2 border-warm-accent/25"
                style={{ background: 'hsl(var(--warm-accent) / 0.08)' }}
              >
                <Initials name={name} />
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <span className="rounded-full bg-warm-accent/10 px-2.5 py-0.5 text-xs font-medium text-warm-accent">
                  {role}
                </span>
                {details && (
                  <p className="text-xs text-foreground/50 leading-relaxed">{details}</p>
                )}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} on LinkedIn`}
                    className="mt-1 inline-flex items-center gap-1.5 text-xs text-foreground/40 hover:text-warm-accent transition-colors"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
