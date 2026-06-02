import Image from 'next/image';

export function Hero() {
  return (
    <section id="hero" className="overflow-hidden bg-background mesh-gradient">
      {/*
        Single unified grid — no hidden/lg:hidden toggling.
        Mobile: single-column stack (text → image).
        Desktop lg+: two-column side-by-side, image fills full height.
      */}
      <div className="grid lg:grid-cols-2 lg:h-[560px]">

        {/* Text column */}
        <div
          className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-8 sm:py-20 lg:py-16 lg:pr-10"
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

        {/* Image column — fixed height on mobile, fills grid row on desktop */}
        <div className="relative h-56 sm:h-72 lg:h-full">
          <Image
            src="/hero-wallpaper.jpg"
            alt="Claude Builders Club Munich"
            fill
            className="object-contain object-center lg:object-cover lg:object-left"
            priority
          />
        </div>

      </div>
    </section>
  );
}
