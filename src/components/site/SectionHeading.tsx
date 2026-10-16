export function SectionHeading({ eyebrow, title, intro, dark }: { eyebrow: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <div className="reveal max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl text-gold-gradient`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg ${dark ? "text-navy-muted" : "text-muted-foreground"}`}>{intro}</p>}
    </div>
  );
}
