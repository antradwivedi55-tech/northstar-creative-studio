import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import { SectionHeading } from "./SectionHeading";

const projects = [
  { img: p1, t: "Trove Coffee", c: "Brand identity & packaging" },
  { img: p2, t: "After Hours", c: "Brand film production" },
  { img: p3, t: "Halo Launch Night", c: "Event & activation" },
];

export function Portfolio() {
  return (
    <section id="work" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          dark
          eyebrow="Selected work"
          title="Ideas we'd love to make real."
          intro="These are fictional concept projects created to show our style and thinking — not real client work."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.t} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={p.img}
                  alt={`${p.t} concept project`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
                  Concept project
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-navy-foreground">{p.t}</h3>
              <p className="mt-1 text-navy-muted">{p.c}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
