const members = [
  {
    name: 'Tinatin Gholadze',
    role: 'President',
    details: null,
  },
  {
    name: 'Oskar Breitfeld',
    role: 'Claude Ambassador',
    details: null,
  },
  {
    name: 'Empalo',
    role: 'Claude Ambassador',
    details: null,
  },
  {
    name: 'Benno Kolar',
    role: 'CBC Engineer',
    details: 'Double Bachelor @ TUM · Junior Consultant @ TNG',
  },
];

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return <>{name.slice(0, 2).toUpperCase()}</>;
  return <>{parts[0][0]}{parts[parts.length - 1][0]}</>;
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

        <div className="grid gap-4 sm:grid-cols-2">
          {members.map(({ name, role, details }) => (
            <div
              key={name}
              className="glass-card rounded-2xl shadow-lift p-5 flex items-center gap-4"
            >
              {/* Avatar */}
              <div
                className="h-14 w-14 shrink-0 rounded-full flex items-center justify-center text-base font-semibold text-warm-accent border-2 border-warm-accent/25"
                style={{ background: 'hsl(var(--warm-accent) / 0.08)' }}
              >
                <Initials name={name} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5 min-w-0">
                {/* Name + role on same line */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-sm font-semibold text-foreground">{name}</span>
                  <span className="rounded-full bg-warm-accent/10 px-2.5 py-0.5 text-xs font-medium text-warm-accent">
                    {role}
                  </span>
                </div>
                {/* Details below */}
                {details && (
                  <p className="text-xs text-foreground/50 leading-relaxed">{details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
