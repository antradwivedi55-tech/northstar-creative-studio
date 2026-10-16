import { SectionHeading } from "./SectionHeading";

const steps = [
  { t: "Discover", d: "We listen, research and audit to understand your business, audience and opportunities." },
  { t: "Strategise", d: "We define positioning, priorities and a clear plan with measurable goals." },
  { t: "Create", d: "We design, produce and launch work that's bold, consistent and on-brand." },
  { t: "Grow", d: "We track results, optimise and scale what works to keep you moving forward." },
];

export function Process() {
  return (
    <section id="process" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Our process" title="Four steps from idea to impact." />
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-lg bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
              <span className="font-display text-5xl font-bold text-gold">0{i + 1}</span>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.t}</h3>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
