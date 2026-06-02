import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background mesh-gradient">
      <div className="container-wide py-20 sm:py-28 lg:py-36">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Text — first in DOM = first on mobile (top), left on desktop */}
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-warm-accent/30 bg-warm-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
              Official TUM Student Club · Supported by Anthropic
            </span>

            <h1 className="text-display">
              Claude Builders Club —{' '}
              <span className="gradient-text">Munich</span>
            </h1>

            <p className="text-subtitle text-foreground/75">
              Enabling the next generation of Builders @ TUM
            </p>
          </div>

          {/* Image — second in DOM = below text on mobile, right on desktop */}
          <div className="relative h-64 sm:h-80 lg:h-[520px]">
            <Image
              src="/hero-wallpaper.webp"
              alt="Claude Builders Club Munich"
              fill
              className="object-contain object-center lg:object-right"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
