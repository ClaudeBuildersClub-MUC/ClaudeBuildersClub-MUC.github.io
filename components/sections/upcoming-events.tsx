import { Calendar, ExternalLink, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'CBC Meeting #3',
    date: 'Friday, 5 June 2025',
    description: 'Talks on Claude Routines and more!',
    location: 'Theresienstraße 90',
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
              className="glass-card rounded-2xl shadow-lift p-8 flex flex-col gap-5"
            >
              {/* Date — prominent with calendar icon */}
              <div className="flex items-center gap-2 text-warm-accent">
                <Calendar className="h-4 w-4 shrink-0" />
                <span className="text-base font-semibold">{event.date}</span>
              </div>

              {/* Title + description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-title">{event.name}</h3>
                <p className="text-base text-foreground/80">{event.description}</p>
              </div>

              {/* Prize badge */}
              {event.prize && (
                <p className="w-fit rounded-full border border-warm-accent/40 px-3 py-1 text-sm font-semibold text-warm-accent"
                   style={{ background: 'hsl(var(--warm-accent) / 0.08)' }}>
                  🏆 {event.prize}
                </p>
              )}

              {/* Location */}
              <div className="mt-auto flex items-center gap-1.5 text-sm text-foreground/55">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {event.locationHref ? (
                  <a
                    href={event.locationHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 decoration-foreground/30 hover:text-warm-accent hover:decoration-warm-accent transition-colors inline-flex items-center gap-1"
                  >
                    {event.location}
                    <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
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
