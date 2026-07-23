import { Reveal } from "@/components/motion/Reveal";
import { manifestoImage, img } from "@/lib/projects";

export function Manifesto() {
  return (
    <section id="philosophy" className="scroll-mt-24 py-24 md:py-36">
      <div className="mx-auto max-w-edge px-5 md:px-10">
        <Reveal>
          <div className="label flex items-center gap-4 text-gold">
            <span>01</span>
            <span className="h-px w-10 bg-hair" />
            Філософія
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-10 max-w-5xl text-balance font-display font-light leading-[1.06] text-[clamp(1.9rem,4.7vw,4.1rem)]">
            Кожен проєкт — це{" "}
            <span className="italic text-gold-soft">діалог</span> між містом,
            людиною та часом.
          </h2>
        </Reveal>

        <div className="mt-16 grid items-end gap-10 md:mt-24 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <Reveal>
              <div className="overflow-hidden">
                <img
                  src={img(manifestoImage, 1500)}
                  alt="Інтер'єр резиденції KV DEV"
                  className="aspect-[4/5] w-full object-cover md:aspect-[16/13]"
                />
              </div>
            </Reveal>
          </div>

          <div className="space-y-7 md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <p className="text-[15px] leading-relaxed text-bone-muted">
                Ми віримо, що дім — це не квадратні метри, а середовище, яке
                формує щоденний ритм людини. Тому кожне рішення — від посадки
                будівлі до фактури дверної ручки — ми приймаємо свідомо.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-[15px] leading-relaxed text-bone-muted">
                За сімнадцять років ми реалізували проєкти в найзнаковіших
                локаціях Києва разом із провідними архітекторами та майстрами.
                Результат — будинки, що з роками стають лише цінніші.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="pt-4 font-display text-2xl font-light italic text-bone">
                — Засновники KV DEV
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
