"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { img, type Project } from "@/lib/projects";
import { ArrowRight } from "@/components/site/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectHero({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img(project.cover, 2400)}
          alt={project.name}
          className="h-[115%] w-full animate-k-zoom object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/35 to-ink/55" />

      <Link
        href="/projects"
        className="label group absolute left-5 top-24 inline-flex items-center gap-3 text-bone/75 transition-colors hover:text-gold md:left-10 md:top-28"
      >
        <ArrowRight className="w-7 rotate-180 transition-transform duration-500 group-hover:-translate-x-1" />
        Проєкти
      </Link>

      <div className="mx-auto flex w-full max-w-edge flex-1 flex-col justify-end px-5 pb-10 md:px-10 md:pb-14">
        <div className="label mb-6 flex items-center gap-4 text-gold">
          <span>{project.index}</span>
          <span className="h-px w-10 bg-hair" />
          {project.category}
        </div>

        <h1 className="font-display font-light leading-[0.9] tracking-[-0.01em] text-[clamp(3rem,11vw,11rem)]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "108%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
            >
              {project.name}
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-hair pt-6 text-[13px] tracking-[0.04em] text-bone/80"
        >
          <span>{project.district}</span>
          <span className="text-bone-dim">·</span>
          <span>{project.address}</span>
          <span className="ml-auto flex items-center gap-2 text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {project.status}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
