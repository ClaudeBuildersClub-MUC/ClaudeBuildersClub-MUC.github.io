const events = [
  {
    id: 1,
    name: 'CBC Meeting #3',
    date: 'Friday, 5 June 2025',
    description: 'Talks on Claude Routines and more!',
    location: 'Theresienstr. 90',
    locationHref: 'https://nav.tum.de/room/0101.02.128',
    prize: null,
  },
  {
    id: 2,
    name: 'Education-themed Hackathon',
    date: 'Saturday, 13 June 2025',
    description: 'A major hackathon on the theme of education.',
    location: 'CDTM Offices — TBD',
    locationHref: null,
    prize: '$1,500 in Anthropic API Credits',
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
              {/* Date */}
              <span className="w-fit rounded-full bg-warm-accent/10 px-3 py-1 text-xs font-semibold text-warm-accent">
                {event.date}
              </span>

              {/* Title + description */}
              <h3 className="text-title">{event.name}</h3>
              <p className="text-base text-foreground/80">{event.description}</p>

              {/* Prize badge */}
              {event.prize && (
                <p className="w-fit rounded-full border border-warm-accent/40 bg-warm-accent/8 px-3 py-1 text-sm font-semibold text-warm-accent">
                  🏆 {event.prize}
                </p>
              )}

              {/* Location */}
              <div className="mt-auto flex items-center gap-1.5 text-sm text-foreground/55">
                <span>📍</span>
                {event.locationHref ? (
                  <a
                    href={event.locationHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline hover:text-warm-accent transition-colors"
                  >
                    {event.location}
                  </a>
                ) : (
                  <span>{event.location}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
