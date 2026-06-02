import { Button } from '@/components/ui/button';

const DISCORD_URL = '#';

export function JoinCTA() {
  return (
    <section className="bg-primary">
      <div className="container-wide py-10 sm:py-12">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-base font-medium text-primary-foreground sm:text-lg">
            Join us to receive Claude Pro and free Anthropic API credits.
          </p>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <Button
              className="h-11 rounded-full px-8 text-sm shadow-lift bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Join on Discord
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
