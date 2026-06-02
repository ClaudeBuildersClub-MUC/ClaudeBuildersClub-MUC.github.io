const members = [
  {
    name: 'Tinatin Gholadze',
    role: 'President',
  },
  {
    name: 'Oskar Breitfeld',
    role: 'Claude Ambassador',
  },
  {
    name: 'Empalo',
    role: 'Claude Ambassador',
  },
  {
    name: 'Benno Kolar',
    role: 'CBC Engineer · Double Bachelor @ TUM · Junior Consultant @ TNG',
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
          {members.map(({ name, role }) => (
            <div
              key={name}
              className="glass-card rounded-2xl shadow-lift p-6 flex flex-col items-center gap-4 text-center"
            >
              <div
                className="h-20 w-20 rounded-full flex items-center justify-center text-xl font-semibold text-warm-accent border-2 border-warm-accent/25"
                style={{ background: 'hsl(var(--warm-accent) / 0.08)' }}
              >
                <Initials name={name} />
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="text-xs text-foreground/55 leading-relaxed">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
