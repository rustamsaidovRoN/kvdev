"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { site, nav } from "@/lib/site";
import { projects } from "@/lib/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MobileMenu({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col bg-ink px-5 py-6 md:px-10 md:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-semibold tracking-[0.34em] text-bone">
          KV&nbsp;DEV
        </span>
        <button
          type="button"
          onClick={onClose}
          className="group flex items-center gap-3"
          aria-label="Закрити меню"
        >
          <span className="label text-bone/70">Закрити</span>
          <span className="relative block h-5 w-5">
            <span className="absolute left-0 top-1/2 h-px w-5 rotate-45 bg-bone transition-transform duration-300 group-hover:rotate-[135deg]" />
            <span className="absolute left-0 top-1/2 h-px w-5 -rotate-45 bg-bone transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </button>
      </div>

      <div className="mt-14 flex flex-1 flex-col justify-between overflow-y-auto">
        <nav className="flex flex-col">
          {nav.map((n, i) => (
            <motion.div
              key={n.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.06, duration: 0.7, ease: EASE }}
            >
              <Link
                href={n.href}
                onClick={onClose}
                className="block border-b border-hair py-4 font-display text-4xl font-light tracking-wide text-bone transition-colors hover:text-gold sm:text-5xl"
              >
                {n.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-hair pt-8 sm:grid-cols-2">
          <div>
            <div className="label mb-4 text-gold">Проєкти</div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  onClick={onClose}
                  className="text-[13px] tracking-[0.06em] text-bone/70 transition-colors hover:text-bone"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:text-right">
            <div className="label mb-4 text-gold">Контакти</div>
            <a
              href={site.phoneHref}
              className="block text-lg tracking-[0.04em] text-bone transition-colors hover:text-gold"
            >
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="mt-1 block text-[13px] text-bone/70 transition-colors hover:text-gold"
            >
              {site.email}
            </a>
            <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-bone-dim">
              {site.address}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
