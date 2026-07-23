"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, img } from "@/lib/projects";
import { ArrowUpRight } from "@/components/site/icons";

export function ProjectsIndex() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <div className="mx-auto max-w-edge px-5 md:px-10">
      {/* desktop: list + sticky preview */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              onMouseEnter={() => setActive(i)}
              className="group block border-t border-hair py-8 last:border-b"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-baseline gap-6">
                  <span className="w-8 font-mono text-[12px] text-bone-dim">
                    {p.index}
                  </span>
                  <div>
                    <h3
                      className={`font-display font-light leading-none transition-colors duration-300 text-[clamp(2rem,3.4vw,3.4rem)] ${
                        i === active ? "text-gold-soft" : "text-bone"
                      }`}
                    >
                      {p.name}
                    </h3>
                    <div className="mt-3 flex items-center gap-5 pl-0.5">
                      <span className="label text-bone/45">{p.category}</span>
                      <span className="text-[12px] text-bone-dim">
                        {p.district} · {p.year}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="label text-bone-dim">{p.status}</span>
                  <ArrowUpRight className="w-4 -translate-x-2 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.slug}
                  src={img(current.cover, 1200)}
                  alt={current.name}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="label text-bone">{current.name}</span>
              <span className="label text-gold">{current.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* mobile: cards */}
      <div className="grid gap-12 lg:hidden">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={img(p.cover, 1200)}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="label absolute left-4 top-4 bg-ink/55 px-3 py-1.5 text-bone backdrop-blur-sm">
                {p.status}
              </div>
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-display text-3xl font-light text-bone">
                {p.name}
              </h3>
              <span className="font-mono text-[12px] text-gold">{p.index}</span>
            </div>
            <div className="label mt-2 text-bone/50">{p.category}</div>
            <div className="mt-3 text-[13px] text-bone-muted">
              {p.district} · {p.year}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
