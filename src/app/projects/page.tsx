import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Проєкти | KV DEV",
  description:
    "Портфель KV DEV: клубні будинки, резиденції та квартали класу de luxe у знакових локаціях Києва.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-edge px-5 md:px-10">
            <Reveal>
              <div className="label flex items-center gap-4 text-gold">
                <span className="h-px w-8 bg-gold/60" />
                Портфель
              </div>
            </Reveal>
            <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
              <Reveal delay={0.05} className="md:col-span-8">
                <h1 className="font-display font-light leading-[0.95] text-[clamp(3rem,9vw,8rem)]">
                  Проєкти
                </h1>
              </Reveal>
              <Reveal delay={0.12} className="md:col-span-4">
                <p className="text-[15px] leading-relaxed text-bone-muted">
                  Кожен проєкт KV DEV — самостійний архітектурний висловлювання,
                  вписаний у характер свого району. Від камерних клубних будинків
                  до кварталів на воді.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <ProjectsIndex />

        <div className="h-8 md:h-16" />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
