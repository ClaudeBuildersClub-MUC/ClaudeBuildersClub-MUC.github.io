const DISCORD_URL = 'https://discord.gg/pND8b8gyj';
const YEAR = 2025;

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-warm">
      <div className="container-wide py-8">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-sm font-medium text-foreground/80">
            Claude Builders Club — Munich
          </span>

          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-warm-accent transition-colors"
            >
              Discord
            </a>
            <span>·</span>
            <span>© {YEAR}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
