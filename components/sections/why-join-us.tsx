const reasons = [
  {
    illustration: '/images/gift.svg',
    title: 'Free Resources',
    body: 'Members get access to Claude Pro and free Anthropic API credits — everything the builders and founders of tomorrow need to start building today.',
  },
  {
    illustration: '/images/hand-holding-book.svg',
    title: 'Community & Events',
    body: 'Hackathons, meetups, talks, and hands-on project support — by members, experts and Anthropic engineers.',
  },
];

export function WhyJoinUs() {
  return (
    <section id="why-join" className="bg-background py-16 sm:py-20">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
            Why join
          </span>
          <h2 className="text-headline mt-3">Why Join Us</h2>
        </div>

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:gap-x-20">
          {reasons.map(({ illustration, title, body }) => (
            <div key={title} className="flex gap-5">
              <div className="mt-1 shrink-0">
                <img
                  src={illustration}
                  alt=""
                  aria-hidden="true"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-base text-foreground/75">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
