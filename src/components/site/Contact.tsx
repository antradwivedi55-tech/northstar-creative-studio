import { useState, type FormEvent } from "react";
import { SectionHeading } from "./SectionHeading";

type Fields = { name: string; email: string; company: string; details: string };
const empty: Fields = { name: "", email: "", company: "", details: "" };

export function validateContact(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.details.trim().length < 20) e.details = "Tell us a little more (at least 20 characters).";
  if (f.details.length > 2000) e.details = "Please keep it under 2000 characters.";
  return e;
}

export function Contact() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validateContact>>({});
  const [done, setDone] = useState(false);

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validateContact(f);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setDone(true);
      setF(empty);
    }
  };

  const field = (k: keyof Fields, label: string, opts: { type?: string; optional?: boolean; area?: boolean } = {}) => {
    const cls = `mt-2 w-full rounded-md border bg-navy-soft px-4 py-3 text-navy-foreground outline-none transition-colors focus:border-gold ${errors[k] ? "border-destructive" : "border-navy-foreground/15"}`;
    return (
      <label className="block">
        <span className="text-sm font-medium text-navy-foreground">
          {label} {opts.optional && <span className="text-navy-muted">(optional)</span>}
        </span>
        {opts.area ? (
          <textarea rows={5} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className={cls} aria-invalid={!!errors[k]} />
        ) : (
          <input type={opts.type ?? "text"} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className={cls} aria-invalid={!!errors[k]} />
        )}
        {errors[k] && <span className="mt-1 block text-sm text-destructive">{errors[k]}</span>}
      </label>
    );
  };

  return (
    <section id="contact" className="hero-glow py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2">
        <SectionHeading dark eyebrow="Contact" title="Let's build something unforgettable." intro="Share a few details about your project and what you'd like to achieve." />
        {done ? (
          <div role="status" className="rounded-lg border border-gold/40 bg-navy-soft p-8 text-navy-foreground">
            <h3 className="font-display text-2xl font-bold text-gold">Thanks — your details look good.</h3>
            <p className="mt-3 text-navy-muted">
              Please note: this form isn't connected to an email or messaging service yet, so your message has not been sent.
            </p>
            <button onClick={() => setDone(false)} className="mt-6 text-sm font-semibold text-gold underline-offset-4 hover:underline">
              Start again
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {field("name", "Name")}
              {field("email", "Email", { type: "email" })}
            </div>
            {field("company", "Company", { optional: true })}
            {field("details", "Project details", { area: true })}
            <button type="submit" className="rounded-full bg-gold px-8 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
              Check & submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
