import { Hammer, Users, Lightbulb } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const activities: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Hammer,
    title: 'Hackathons',
    description:
      'Time-boxed building sprints where TUM students ship real Claude-powered projects from scratch.',
  },
  {
    icon: Users,
    title: 'Meetups & Workshops',
    description:
      'Hands-on sessions and talks from builders in the ecosystem — practical knowledge, no fluff.',
  },
  {
    icon: Lightbulb,
    title: 'Student Projects',
    description:
      'Ongoing support for members building with the Claude API — resources, feedback, and community.',
  },
];

export function WhatWeDo() {
  return (
    <section className="bg-muted py-16 sm:py-20">
      <div className="container-wide">
        {/* Section header */}
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
            What we do
          </span>
          <h2 className="text-headline mt-3">Build. Learn. Ship.</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {activities.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-card rounded-2xl shadow-lift p-6 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-lift-lg"
            >
              {/* Icon chip */}
              <div
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: 'hsl(var(--warm-accent) / 0.12)' }}
              >
                <Icon className="h-5 w-5 text-warm-accent" />
              </div>

              <h3 className="text-title">{title}</h3>
              <p className="text-sm text-foreground/75">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
