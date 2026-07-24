"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroImage, img } from "@/lib/projects";
import { ArrowDown } from "@/components/site/icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.5, 0.85]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      {/* background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={img(heroImage, 2400)}
          alt="Преміальна архітектура KV DEV"
          className="h-[115%] w-full animate-k-zoom object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 -z-10 bg-ink"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      {/* vertical edge label */}
      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 items-center gap-4 lg:flex">
        <span className="label writing-vertical rotate-180 text-bone/50">
          Нерухомість · De Luxe
        </span>
        <span className="h-24 w-px bg-hair" />
      </div>

      {/* content */}
      <div className="mx-auto flex w-full max-w-edge flex-1 flex-col justify-end px-5 pb-10 md:px-10 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="label mb-6 flex items-center gap-4 text-gold"
        >
          <span className="h-px w-8 bg-gold/60" />
          Київ · Девелопмент · з 2018
        </motion.div>

        <h1 className="font-display font-light leading-[0.9] tracking-[-0.01em] text-[clamp(2.9rem,9.2vw,9.5rem)]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
            >
              Архітектура,
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-gold-soft"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
            >
              що залишається
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
          className="mt-8 max-w-xl text-[15px] leading-relaxed text-bone/75 md:text-base"
        >
          Ми створюємо житлові простори класу De Luxe у Києві та передмісті.
          Там, де форма, локація й матеріал підпорядковані одному — ідеї
          досконалості життя.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05, ease: EASE }}
          className="mt-12 flex items-end justify-between border-t border-hair pt-6"
        >
          <div className="flex items-center gap-3 text-bone/60">
            <ArrowDown className="h-8 w-2 animate-bounce" />
            <span className="label">Гортайте</span>
          </div>
          <div className="text-right">
            <div className="label text-bone/50">50.4501° N · 30.5234° E</div>
            <div className="mt-1 text-[12px] tracking-[0.1em] text-bone/70">
              Київ, Україна
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
