import Image from 'next/image';

export function Hero() {
  return (
    // overflow-hidden moved to the image div only — keeping it on the section
    // clips the background-clip:text gradient on "Munich" at the bottom edge.
    <section id="hero" className="bg-background mesh-gradient">
      <div className="grid lg:grid-cols-2 lg:h-[560px]">

        {/* Text column */}
        <div
          className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-8 sm:py-20 lg:py-16 lg:pr-10"
          style={{ paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))' }}
        >
          {/* Badge — shortened so it stays one line on narrow phones */}
          <span className="w-fit rounded-full border border-warm-accent/30 bg-warm-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-warm-accent">
            TUM Student Club · by Anthropic
          </span>

          <h1 className="text-display">
            Claude Builders Club —{' '}
            {/* inline-block + pb-1 gives the gradient background room so
                overflow-hidden on any ancestor can't clip the bottom */}
            <span className="gradient-text inline-block pb-1">Munich</span>
          </h1>

          <p className="text-subtitle text-foreground/75">
            Enabling the next generation of Builders @ TUM
          </p>
        </div>

        {/* Image column — overflow-hidden here prevents horizontal bleed */}
        <div className="relative h-56 sm:h-72 lg:h-full overflow-hidden">
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
