import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowRight } from "@/components/site/icons";

export function CtaBand() {
  return (
    <section className="border-t border-hair py-24 md:py-32">
      <div className="mx-auto flex max-w-edge flex-col gap-10 px-5 md:flex-row md:items-end md:justify-between md:px-10">
        <Reveal>
          <div className="label mb-6 flex items-center gap-4 text-gold">
            <span className="h-px w-8 bg-gold/60" />
            Зв'язатися
          </div>
          <h2 className="max-w-2xl text-balance font-display font-light leading-[1.03] text-[clamp(2.2rem,5.4vw,4.6rem)]">
            Готові знайти{" "}
            <span className="italic text-gold-soft">свій простір</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/contacts"
            className="label group inline-flex items-center gap-10 border border-bone/25 px-8 py-5 text-bone transition-colors hover:border-gold hover:bg-gold hover:text-ink"
          >
            Залишити заявку
            <ArrowRight className="w-10 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
