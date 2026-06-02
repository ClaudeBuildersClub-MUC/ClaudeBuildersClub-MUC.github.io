const placeholders = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export function AboutUs() {
  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="container-wide">
        {/* Section header */}
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
            The team
          </span>
          <h2 className="text-headline mt-3">About Us</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placeholders.map(({ id }) => (
            <div
              key={id}
              className="glass-card rounded-2xl shadow-lift p-6 flex flex-col items-center gap-4 text-center"
            >
              {/* Avatar placeholder */}
              <div
                className="h-20 w-20 rounded-full flex items-center justify-center text-warm-accent/40 text-xs font-semibold uppercase tracking-wider border-2 border-dashed border-warm-accent/25"
                style={{ background: 'hsl(var(--warm-accent) / 0.06)' }}
              >
                Photo
              </div>

              {/* Name placeholder */}
              <div className="h-4 w-28 rounded-full bg-foreground/10" />

              {/* Role placeholder */}
              <div className="h-3 w-20 rounded-full bg-foreground/6" />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-foreground/40">
          Team details coming soon.
        </p>
      </div>
    </section>
  );
}
