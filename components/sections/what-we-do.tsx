const activities = [
  {
    svg: '/images/code-graphic.svg',
    title: 'Hackathons',
    description:
      'Time-boxed building sprints where TUM students ship real Claude-powered projects from scratch.',
  },
  {
    svg: '/images/connected-world.svg',
    title: 'Meetups & Workshops',
    description:
      'Hands-on sessions and talks — by members, experts and Anthropic engineers.',
  },
  {
    svg: '/images/hands-connecting.svg',
    title: 'Student Projects',
    description:
      'Ongoing support for members building with the Claude API — resources, feedback, and community.',
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-muted py-16 sm:py-20">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
            What we do
          </span>
          <h2 className="text-headline mt-3">Build. Learn. Ship.</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {activities.map(({ svg, title, description }) => (
            <div
              key={title}
              className="glass-card rounded-2xl shadow-lift p-6 flex flex-col gap-5 transition-shadow duration-300 hover:shadow-lift-lg"
            >
              {/* Anthropic SVG illustration */}
              <div className="flex items-end justify-start h-20">
                <img
                  src={svg}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-auto object-contain object-left-bottom"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-title">{title}</h3>
                <p className="text-sm text-foreground/75">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
