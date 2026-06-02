import { Rocket } from 'lucide-react';

const reasons = [
  {
    illustration: '/images/gift.svg',
    icon: null,
    title: 'Free Resources',
    body: 'Members get access to Claude Pro and free Anthropic API credits — everything you need to start building without worrying about costs.',
  },
  {
    illustration: null,
    icon: Rocket,
    title: 'Community & Events',
    body: 'Hackathons, meetups, talks, and hands-on project support from a community of TUM students who are serious about building with AI.',
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
          {reasons.map(({ illustration, icon: Icon, title, body }) => (
            <div key={title} className="flex gap-5">
              {/* Visual — custom SVG illustration or icon chip */}
              <div className="mt-1 shrink-0">
                {illustration ? (
                  <img
                    src={illustration}
                    alt=""
                    aria-hidden="true"
                    className="h-14 w-auto object-contain"
                  />
                ) : Icon ? (
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: 'hsl(var(--warm-accent) / 0.12)' }}
                  >
                    <Icon className="h-5 w-5 text-warm-accent" />
                  </div>
                ) : null}
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
