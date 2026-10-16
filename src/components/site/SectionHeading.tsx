export function SectionHeading({ eyebrow, title, intro, dark }: { eyebrow: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl ${dark ? "text-navy-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg ${dark ? "text-navy-muted" : "text-muted-foreground"}`}>{intro}</p>}
    </div>
  );
}
