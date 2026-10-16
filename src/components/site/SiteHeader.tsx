import { useState } from "react";
import { navLinks } from "./nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-foreground/10 bg-navy/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-navy-foreground">
          <span className="text-gold">✦</span> Northstar
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-navy-muted transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
            Let's Talk
          </a>
        </nav>
        <button
          className="text-navy-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy-foreground/10 bg-navy px-5 py-4 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-navy-foreground hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
