import { Reveal } from "@/components/motion/Reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Архітектура",
    text: "Співпрацюємо з провідними бюро й ставимося до кожного елемента як до майбутньої частини життя резидентів.",
  },
  {
    n: "02",
    title: "Матеріали",
    text: "Натуральний камінь, дерево, бронза та скло — лише довговічні матеріали, що з роками гарнішають.",
  },
  {
    n: "03",
    title: "Локація",
    text: "Обираємо ділянки у знакових районах Києва та передмістя, де історія та інфраструктура створюють базу довговічності проєкту.",
  },
  {
    n: "04",
    title: "Сервіс",
    text: "Приватний консьєрж, керуюча компанія та підтримка мешканця протягом усього життя проєкту.",
  },
];

export function Approach() {
  return (
    <section className="border-t border-hair py-24 md:py-32">
      <div className="mx-auto max-w-edge px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-8">
            <div className="label mb-8 flex items-center gap-4 text-gold">
              <span>03</span>
              <span className="h-px w-10 bg-hair" />
              Підхід
            </div>
            <h2 className="max-w-3xl text-balance font-display font-light leading-[1.08] text-[clamp(1.8rem,4.2vw,3.4rem)]">
              Чотири принципи, що визначають кожен наш проєкт.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border-t border-hair sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 0.08}
              className="border-b border-hair bg-ink pt-8 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <div className="pr-6">
                <div className="font-mono text-[13px] text-gold">{p.n}</div>
                <h3 className="mt-6 font-display text-3xl font-light text-bone">
                  {p.title}
                </h3>
                <p className="mt-4 pb-8 text-[14px] leading-relaxed text-bone-muted">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
