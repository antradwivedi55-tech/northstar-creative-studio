import { navLinks } from "./nav";

const socials = ["Instagram", "LinkedIn", "YouTube", "TikTok"];

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy text-navy-muted">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <a href="#top" className="font-display text-lg font-bold text-navy-foreground">
          <span className="text-gold">✦</span> Northstar Creative Studio
        </a>
        <nav className="flex flex-wrap gap-6 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold">{l.label}</a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-4 text-sm">
          {socials.map((s) => (
            <a key={s} href="#" aria-label={`${s} (coming soon)`} className="hover:text-gold">{s}</a>
          ))}
        </div>
      </div>
      <p className="pb-8 text-center text-xs">© {new Date().getFullYear()} Northstar Creative Studio</p>
    </footer>
  );
}
