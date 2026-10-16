import { Compass, Clapperboard, Megaphone, MessageCircleHeart, PartyPopper, TrendingUp, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services: { n: string; t: string; d: string; Icon: LucideIcon }[] = [
  { n: "01", t: "Brand Strategy", d: "Positioning, naming, identity systems and voice that make your brand unmistakable.", Icon: Compass },
  { n: "02", t: "Content Production", d: "Photo, film and motion content crafted to stop the scroll and tell your story.", Icon: Clapperboard },
  { n: "03", t: "Digital Marketing", d: "Performance campaigns across search, social and display, built around clear goals.", Icon: Megaphone },
  { n: "04", t: "Social Media", d: "Strategy, community management and always-on content calendars that build loyalty.", Icon: MessageCircleHeart },
  { n: "05", t: "Events & Activations", d: "Launches and brand experiences people talk about long after the lights go down.", Icon: PartyPopper },
  { n: "06", t: "Business Growth", d: "Market insight, customer journeys and growth roadmaps that turn attention into revenue.", Icon: TrendingUp },
];

export function Services() {
  return (
    <section id="services" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="What we do" title="Everything your brand needs to grow." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ n, t, d, Icon }, i) => (
            <article key={t} style={{ transitionDelay: `${i * 80}ms` }} className="reveal card-premium group relative overflow-hidden rounded-2xl p-8 md:p-10">
              <span className="absolute right-6 top-6 font-display text-4xl font-bold text-gold/15">{n}</span>
              <div className="icon-bubble animate-float group-hover:scale-110">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mt-8 font-display text-xl font-bold tracking-wide text-gold">{t}</h3>
              <p className="mt-3 leading-relaxed text-navy-muted">{d}</p>
              <span className="mt-6 block h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-24" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
