import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="overflow-hidden bg-background mesh-gradient">

      {/* ── Mobile: stacked ── */}
      <div className="flex flex-col gap-8 py-16 px-6 sm:px-8 lg:hidden">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-warm-accent/30 bg-warm-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
            Official TUM Student Club · by Anthropic
          </span>
          <h1 className="text-display">
            Claude Builders Club —{' '}
            <span className="gradient-text">Munich</span>
          </h1>
          <p className="text-subtitle text-foreground/75">
            Enabling the next generation of Builders @ TUM
          </p>
        </div>
        <div className="relative h-56 sm:h-72">
          <Image
            src="/hero-wallpaper.jpg"
            alt="Claude Builders Club Munich"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* ── Desktop: fixed-height split, image borders text ── */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:h-[560px]">

        {/* Text — left column */}
        <div
          className="flex flex-col justify-center gap-6 py-16 pr-10"
          style={{ paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))' }}
        >
          <span className="w-fit rounded-full border border-warm-accent/30 bg-warm-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
            Official TUM Student Club · by Anthropic
          </span>
          <h1 className="text-display">
            Claude Builders Club —{' '}
            <span className="gradient-text">Munich</span>
          </h1>
          <p className="text-subtitle text-foreground/75">
            Enabling the next generation of Builders @ TUM
          </p>
        </div>

        {/* Image — right column fills exact section height */}
        <div className="relative">
          <Image
            src="/hero-wallpaper.jpg"
            alt="Claude Builders Club Munich"
            fill
            className="object-cover object-left"
            priority
          />
        </div>

      </div>

    </section>
  );
}
