import { Button } from '@/components/ui/button';

const DISCORD_URL = 'https://discord.gg/pND8b8gyj';

const NAV_LINKS = [
  { label: 'Events',      href: '#events' },
  { label: 'What We Do',  href: '#what-we-do' },
  { label: 'Why Join',    href: '#why-join' },
  { label: 'About',       href: '#about' },
];

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

        {/* CTA */}
        <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
          <Button size="sm" className="rounded-full px-5">
            Join Discord
          </Button>
        </a>

      </div>
    </header>
  );
}
