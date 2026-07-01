"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { site, nav } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          scrolled
            ? "border-b border-hair bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-edge items-center justify-between px-5 transition-all duration-500 md:px-10 ${
            scrolled ? "py-4" : "py-6"
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="label text-bone/60 transition-colors duration-300 hover:text-bone"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              className="hidden text-[13px] tracking-[0.06em] text-bone/80 transition-colors hover:text-gold xl:block"
            >
              {site.phone}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group flex items-center gap-3 lg:hidden"
              aria-label="Відкрити меню"
            >
              <span className="label text-bone/70">Меню</span>
              <span className="flex flex-col items-end gap-[6px]">
                <span className="h-px w-6 bg-bone transition-all duration-300 group-hover:w-4" />
                <span className="h-px w-6 bg-bone" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
