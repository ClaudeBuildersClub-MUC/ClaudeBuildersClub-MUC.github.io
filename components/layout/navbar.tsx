import { Button } from '@/components/ui/button';

const DISCORD_URL = 'https://discord.gg/pND8b8gyj';
const LINKEDIN_URL = 'https://www.linkedin.com/company/claude-builders-club-munich/';

const NAV_LINKS = [
  { label: 'Events',      href: '#events' },
  { label: 'What We Do',  href: '#what-we-do' },
  { label: 'Why Join',    href: '#why-join' },
  { label: 'About',       href: '#about' },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border-subtle bg-background/95 backdrop-blur-sm">
      <div className="container-wide flex h-full items-center justify-between gap-6">

        {/* Wordmark */}
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-warm-accent transition-colors"
        >
          CBC Munich
        </a>

        {/* Section links — hidden on mobile */}
        <nav className="hidden items-center gap-6 sm:flex" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="link-underline text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/50 hover:text-warm-accent transition-colors"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="rounded-full px-5">
              Join Discord
            </Button>
          </a>
        </div>

      </div>
    </header>
  );
}
