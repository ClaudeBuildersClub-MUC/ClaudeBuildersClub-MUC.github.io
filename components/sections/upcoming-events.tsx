import { Calendar, ExternalLink, MapPin } from 'lucide-react';

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

        <div className="flex flex-col gap-8 items-center">
          {/* CBC Meeting #3 */}
          <div className="glass-card rounded-2xl shadow-lift p-8 flex flex-col gap-5 w-full max-w-2xl">
            <div className="flex items-center gap-2 text-warm-accent">
              <Calendar className="h-4 w-4 shrink-0" />
              <span className="text-base font-semibold">Friday, 5 June 2025 · 17:00</span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-title">CBC Meeting #3</h3>
              <p className="text-base text-foreground/80">Talks on Claude Routines and more!</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-auto">
              <div className="flex items-center gap-1.5 text-sm text-foreground/55">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <a
                  href="https://nav.tum.de/room/0101.02.128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-foreground/30 hover:text-warm-accent hover:decoration-warm-accent transition-colors inline-flex items-center gap-1"
                >
                  Theresienstraße 90
                  <ExternalLink className="h-3 w-3 shrink-0 opacity-60" />
                </a>
              </div>
              <a
                href="https://discord.gg/XQ8HZJWc4?event=1511317556387123294"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-warm-accent hover:underline underline-offset-2 transition-colors"
              >
                Join on Discord
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Education Hackathon — Luma embed */}
          <iframe
            src="https://lu.ma/embed/event/evt-rHvzuVnPWVWmOVQ/simple"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
            allow="fullscreen; payment"
            aria-hidden={false}
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
}