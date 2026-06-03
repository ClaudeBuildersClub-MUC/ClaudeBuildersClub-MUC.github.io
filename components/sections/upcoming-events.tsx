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

        <div className="flex justify-center">
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
