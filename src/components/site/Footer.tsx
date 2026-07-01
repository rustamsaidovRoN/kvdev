import Link from "next/link";
import { site, nav } from "@/lib/site";
import { projects } from "@/lib/projects";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-hair bg-ink">
      <div className="mx-auto max-w-edge px-5 md:px-10">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-7 max-w-xs text-[14px] leading-relaxed text-bone-muted">
              Девелопер житлової нерухомості класу de luxe. Створюємо
              архітектуру, що переживає час, — від {site.founded} року.
            </p>
            <div className="mt-8 space-y-1.5">
              <a
                href={site.phoneHref}
                className="block text-lg tracking-[0.04em] text-bone transition-colors hover:text-gold"
              >
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="block text-[14px] text-bone-muted transition-colors hover:text-gold"
              >
                {site.email}
              </a>
              <p className="pt-2 text-[12px] uppercase tracking-[0.16em] text-bone-dim">
                {site.address}
              </p>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="label mb-6 text-bone-dim">Навігація</div>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-[14px] tracking-[0.04em] text-bone-muted transition-colors hover:text-bone"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="label mb-6 text-bone-dim">Проєкти</div>
            <ul className="space-y-3">
              {projects.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group flex items-center justify-between text-[14px] tracking-[0.04em] text-bone-muted transition-colors hover:text-bone"
                  >
                    <span>{p.name}</span>
                    <span className="text-[11px] text-bone-dim">{p.district}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-hair py-8">
          <div className="select-none font-display text-[20vw] font-light leading-[0.8] tracking-tight text-bone/[0.05] md:text-[16vw]">
            KV DEV
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-hair py-7 text-[11px] tracking-[0.14em] text-bone-dim md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} KV DEV. Усі права захищені.</span>
          <div className="flex items-center gap-6">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
          <a href="#" className="transition-colors hover:text-gold">
            Політика конфіденційності
          </a>
        </div>
      </div>
    </footer>
  );
}
