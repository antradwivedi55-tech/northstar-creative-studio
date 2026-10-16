import { SectionHeading } from "./SectionHeading";

const services = [
  { n: "01", t: "Brand Strategy", d: "Positioning, naming, identity systems and voice that make your brand unmistakable." },
  { n: "02", t: "Content Production", d: "Photo, film and motion content crafted to stop the scroll and tell your story." },
  { n: "03", t: "Digital Marketing", d: "Performance campaigns across search, social and display, built around clear goals." },
  { n: "04", t: "Social Media", d: "Strategy, community management and always-on content calendars that build loyalty." },
  { n: "05", t: "Events & Activations", d: "Launches and brand experiences people talk about long after the lights go down." },
  { n: "06", t: "Business Growth", d: "Market insight, customer journeys and growth roadmaps that turn attention into revenue." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="What we do" title="Everything your brand needs to grow." />
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.t} className="group bg-card p-8 transition-colors duration-300 hover:bg-navy md:p-10">
              <span className="font-display text-sm text-gold">{s.n}</span>
              <h3 className="mt-6 font-display text-2xl font-bold text-foreground group-hover:text-navy-foreground">{s.t}</h3>
              <p className="mt-3 text-muted-foreground group-hover:text-navy-muted">{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
