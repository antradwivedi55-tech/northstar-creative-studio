export function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-16 text-navy-foreground">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl content-center px-5 py-24 md:px-8">
        <p className="eyebrow">Branding · Content · Growth</p>
        <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-8xl">
          We Turn Ambitious Brands Into <em className="text-gold">Unforgettable</em> Businesses.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-navy-muted md:text-xl">
          Northstar blends bold creativity, sharp strategy and smart technology — from brand identity and video to
          campaigns and events — so your business is seen, remembered and chosen.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#work" className="rounded-full bg-gold px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
            Explore Our Work
          </a>
          <a href="#contact" className="rounded-full border border-navy-foreground/30 px-7 py-3.5 font-semibold transition-colors hover:border-gold hover:text-gold">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
