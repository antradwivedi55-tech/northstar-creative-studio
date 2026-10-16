import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { useReveal } from "@/hooks/use-reveal";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Northstar Creative Studio — Branding, Content & Growth";
const description =
  "A creative agency combining creativity, strategy and technology to help ambitious brands grow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
