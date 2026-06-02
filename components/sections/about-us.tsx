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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map(({ name, role, details }) => (
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

              {/* Name */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-foreground">{name}</p>

                {/* Role pill */}
                <span className="rounded-full bg-warm-accent/10 px-2.5 py-0.5 text-xs font-medium text-warm-accent">
                  {role}
                </span>

                {/* Details */}
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
