'use client';

import { useState } from 'react';

const members = [
  {
    name: 'Tinatin Gholadze',
    role: 'President',
    details: 'M.Sc. Management and Technology @ TUM · Applied AI Engineer',
    linkedin: 'https://www.linkedin.com/in/tina-gholadze/',
    github: null,
  },
  {
    name: 'Oskar Breitfeld',
    role: 'Claude Ambassador',
    details: 'M.Sc. Energy Engineer @ TUM · Builder @ SAP · Board @ CBC',
    linkedin: 'https://www.linkedin.com/in/johannes-breitfeld/',
    github: 'joschi655',
  },
  {
    name: 'Emanuel Ploch',
    role: 'Claude Ambassador',
    details: 'Double Major @ TUM · SynBio AI',
    linkedin: 'https://www.linkedin.com/in/emanuel-ploch/',
    github: null,
  },
  {
    name: 'Benno Kolar',
    role: 'CBC Engineer',
    details: 'Double Bachelor @ TUM · Junior Consultant @ TNG',
    linkedin: 'https://www.linkedin.com/in/benno-kolar/',
    github: 'BambooTheBear',
  },
  {
    name: 'David Romanowski',
    role: 'CBC Head of Outreach',
    details: null,
    linkedin: 'https://www.linkedin.com/in/david-romanovsky-61853525a/',
    github: null,
  },
];

function linkedInUsername(url: string): string {
  return url.replace(/\/$/, '').split('/in/')[1] ?? '';
}

function Avatar({ name, github, linkedin }: { name: string; github: string | null; linkedin: string | null }) {
  const [failed, setFailed] = useState(false);

  const src = github
    ? `https://github.com/${github}.png`
    : linkedin
    ? `https://unavatar.io/linkedin/${linkedInUsername(linkedin)}`
    : null;

  const parts = name.trim().split(' ');
  const initials = parts.length === 1
    ? name.slice(0, 2).toUpperCase()
    : `${parts[0][0]}${parts[parts.length - 1][0]}`;

  if (src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover border-2 border-warm-accent/25"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className="h-20 w-20 rounded-full flex items-center justify-center text-xl font-semibold text-warm-accent border-2 border-warm-accent/25"
      style={{ background: 'hsl(var(--warm-accent) / 0.08)' }}
    >
      {initials}
    </div>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

export function AboutUs() {
  return (
    <section id="about" className="bg-muted py-16 sm:py-20">
      <div className="container-wide">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
            The team
          </span>
          <h2 className="text-headline mt-3">About Us</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {members.map(({ name, role, details, linkedin, github }) => (
            <div
              key={name}
              className="glass-card rounded-2xl shadow-lift p-6 flex flex-col items-center gap-4 text-center"
            >
              <Avatar name={name} github={github} linkedin={linkedin} />

              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <span className="rounded-full bg-warm-accent/10 px-2.5 py-0.5 text-xs font-medium text-warm-accent">
                  {role}
                </span>
                {details && (
                  <p className="text-xs text-foreground/50 leading-relaxed">{details}</p>
                )}
                <div className="mt-1 flex items-center gap-3">
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} on LinkedIn`}
                      className="inline-flex items-center gap-1.5 text-xs text-foreground/40 hover:text-warm-accent transition-colors"
                    >
                      <LinkedInIcon className="h-3.5 w-3.5" />
                      LinkedIn
                    </a>
                  )}
                  {github && (
                    <a
                      href={`https://github.com/${github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} on GitHub`}
                      className="inline-flex items-center gap-1.5 text-xs text-foreground/40 hover:text-warm-accent transition-colors"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
