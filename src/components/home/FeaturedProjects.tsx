"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { featuredProjects, img, type Project } from "@/lib/projects";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight } from "@/components/site/icons";

function Row({ project, i }: { project: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);
  const reverse = i % 2 === 1;

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div
        ref={ref}
        className="grid items-center gap-8 border-t border-hair py-10 md:grid-cols-12 md:gap-14 md:py-16"
      >
        <div
          className={`md:col-span-7 ${reverse ? "md:order-2 md:col-start-6" : ""}`}
        >
          <div className="relative aspect-[16/11] overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 h-[118%] w-full">
              <img
                src={img(project.cover, 1600)}
                alt={project.name}
                className="h-full w-full object-cover transition-transform [transition-duration:1200ms] ease-out group-hover:scale-105"
              />
            </motion.div>
            <div className="label absolute left-5 top-5 bg-ink/55 px-3 py-1.5 text-bone backdrop-blur-sm">
              {project.status}
            </div>
          </div>
        </div>

        <div
          className={`md:col-span-4 ${
            reverse ? "md:order-1 md:col-start-1" : "md:col-start-9"
          }`}
        >
          <div className="font-mono text-[13px] tracking-[0.1em] text-gold">
            {project.index}
          </div>
          <h3 className="mt-4 font-display font-light leading-[0.95] text-bone transition-colors duration-500 group-hover:text-gold-soft text-[clamp(2.4rem,5vw,4.2rem)]">
            {project.name}
          </h3>
          <div className="label mt-3 text-bone/50">{project.category}</div>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-1 text-[13px] tracking-[0.04em] text-bone-muted">
            <span>{project.district}</span>
            <span className="text-bone-dim">·</span>
            <span>{project.year}</span>
          </div>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-bone-muted">
            {project.lead}
          </p>
          <div className="label mt-9 inline-flex items-center gap-3 text-bone">
            Дивитись проєкт
            <ArrowRight className="w-9 text-gold transition-transform duration-500 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-edge px-5 md:px-10">
        <div className="mb-6 flex flex-col gap-8 md:mb-10 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="label mb-7 flex items-center gap-4 text-gold">
              <span>02</span>
              <span className="h-px w-10 bg-hair" />
              Проєкти
            </div>
            <h2 className="font-display font-light leading-[1.02] text-[clamp(2rem,5vw,4rem)]">
              Обрані роботи
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="label group inline-flex items-center gap-3 text-bone transition-colors hover:text-gold"
            >
              Усі проєкти
              <ArrowRight className="w-9 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </Reveal>
        </div>

        <div>
          {featuredProjects.map((p, i) => (
            <Row key={p.slug} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
