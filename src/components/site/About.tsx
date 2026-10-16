import { SectionHeading } from "./SectionHeading";

const pillars = [
  { t: "Creativity", d: "We chase ideas that feel fresh and human, then craft them with care down to the last frame and pixel." },
  { t: "Strategy", d: "Every idea starts with your goals, your audience and your market — so creativity always has a purpose." },
  { t: "Growth", d: "We measure, learn and refine, building momentum that keeps compounding long after launch." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2">
        <SectionHeading
          eyebrow="About us"
          title="A studio built for brands with big plans."
          intro="Northstar is a team of strategists, designers, filmmakers and marketers working as one. We partner closely with founders and teams to find what makes them different — and make sure the world notices."
        />
        <div className="space-y-10">
          {pillars.map((p) => (
            <div key={p.t} className="border-l-2 border-gold pl-6">
              <h3 className="font-display text-2xl font-bold">{p.t}</h3>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
