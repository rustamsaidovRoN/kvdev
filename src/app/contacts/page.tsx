import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { ContactSection } from "@/components/contact/ContactSection";
import { cityImageAlt, img } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакти | KV DEV",
  description:
    "Зв'яжіться з KV DEV — телефон, email та заявка на приватну зустріч.",
};

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-edge px-5 md:px-10">
            <Reveal>
              <div className="label flex items-center gap-4 text-gold">
                <span className="h-px w-8 bg-gold/60" />
                Зв'язатися
              </div>
            </Reveal>
            <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
              <Reveal delay={0.05} className="md:col-span-8">
                <h1 className="font-display font-light leading-[0.95] text-[clamp(3rem,9vw,8rem)]">
                  Контакти
                </h1>
              </Reveal>
              <Reveal delay={0.12} className="md:col-span-4">
                <p className="text-[15px] leading-relaxed text-bone-muted">
                  Ми відкриті до діалогу — щодо купівлі резиденції, інвестицій чи
                  партнерства. Оберіть зручний спосіб зв'язку.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="pb-8">
          <div className="mx-auto max-w-edge px-5 md:px-10">
            <Reveal>
              <div className="relative overflow-hidden">
                <img
                  src={img(cityImageAlt, 2000)}
                  alt="Київ"
                  className="aspect-[21/9] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <div className="label text-bone/80">{site.city}</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <ContactSection index="" />
      </main>
      <Footer />
    </>
  );
}
