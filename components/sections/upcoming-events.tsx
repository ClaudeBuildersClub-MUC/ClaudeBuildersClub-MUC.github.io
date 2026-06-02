const events = [
  {
    id: 1,
    name: 'CBC Meeting #3',
    date: 'Friday, 5 June 2025',
    description: 'Talks (TBD).',
    details: 'Details to follow.',
  },
  {
    id: 2,
    name: 'Education-themed Hackathon',
    date: 'Saturday, 13 June 2025',
    description: 'A major hackathon on the theme of education.',
    details: 'Details to follow.',
  },
];

export function UpcomingEvents() {
  return (
    <section id="events" className="bg-background py-16 sm:py-20">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
            What&apos;s next
          </span>
          <h2 className="text-headline mt-3">Upcoming Events</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-2xl shadow-lift p-8 flex flex-col gap-4"
            >
              <span className="w-fit rounded-full bg-warm-accent/10 px-3 py-1 text-xs font-semibold text-warm-accent">
                {event.date}
              </span>
              <h3 className="text-title">{event.name}</h3>
              <p className="text-base text-foreground/80">{event.description}</p>
              <p className="mt-auto text-sm font-medium text-foreground/50">
                {event.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
