import { Reveal } from "@/components/motion/Reveal";
import { cityImage, img } from "@/lib/projects";

const STATS = [
  { value: "17", label: "років на ринку" },
  { value: "14", label: "реалізованих проєктів" },
  { value: "320K", label: "м² збудовано" },
  { value: "06", label: "районів Києва" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-t border-hair">
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img(cityImage, 2000)}
          alt="Київ на світанку"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>

      <div className="mx-auto max-w-edge px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="label mb-14 flex items-center gap-4 text-gold">
            <span className="h-px w-8 bg-gold/60" />
            KV DEV у цифрах
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-y-14 md:grid-cols-4 md:gap-8">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              className="border-t border-hair pt-6"
            >
              <div className="font-display font-light leading-none text-bone text-[clamp(3rem,7vw,6rem)]">
                {s.value}
              </div>
              <div className="mt-5 max-w-[10rem] text-[13px] leading-snug tracking-[0.06em] text-bone-muted">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
