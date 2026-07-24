"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/site";
import { ArrowRight } from "@/components/site/icons";

const INTERESTS = [
  "Купівля резиденції",
  "Інвестиції",
  "Партнерство",
  "Інше",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

export function ContactSection({ index = "04" }: { index?: string }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    interest: INTERESTS[0],
    message: "",
  });

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSent(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        interest: INTERESTS[0],
        message: "",
      });
    } catch {
      setError(
        "Не вдалося надіслати заявку. Будь ласка, спробуйте ще раз або зв'яжіться з нами телефоном.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-hair py-24 md:py-32">
      <div className="mx-auto grid max-w-edge gap-16 px-5 md:grid-cols-12 md:px-10">
        {/* left — details */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="label mb-8 flex items-center gap-4 text-gold">
              {index && <span>{index}</span>}
              <span className="h-px w-10 bg-hair" />
              Контакти
            </div>
            <h2 className="max-w-md text-balance font-display font-light leading-[1.04] text-[clamp(2rem,4.8vw,3.6rem)]">
              Обговоримо ваш простір.
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-bone-muted">
              Залиште заявку — персональний менеджер зв'яжеться з вами протягом
              робочого дня, щоб домовитися про приватну зустріч.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-12 space-y-6">
              <ContactRow label="Телефон">
                <a href={site.phoneHref} className="transition-colors hover:text-gold">
                  {site.phone}
                </a>
              </ContactRow>
              <ContactRow label="Email">
                <a href={site.emailHref} className="transition-colors hover:text-gold">
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow label="Години">{site.hours}</ContactRow>
            </dl>

            <div className="mt-10 flex items-center gap-6">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label text-bone-dim transition-colors hover:text-gold"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* right — form */}
        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.05}>
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center border border-hair p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                  <ArrowRight className="w-6 -rotate-45" />
                </div>
                <h3 className="mt-8 font-display text-3xl font-light text-bone">
                  Дякуємо за заявку.
                </h3>
                <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-bone-muted">
                  Ми отримали ваше повідомлення й невдовзі зв'яжемося з вами.
                  Гарного дня!
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="label mt-8 text-gold transition-colors hover:text-gold-soft"
                >
                  Надіслати ще одну
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field
                    label="Ім'я"
                    placeholder="Ваше ім'я"
                    value={form.name}
                    onChange={update("name")}
                    required
                  />
                  <Field
                    label="Телефон"
                    type="tel"
                    placeholder="+38"
                    value={form.phone}
                    onChange={update("phone")}
                    required
                  />
                </div>
                <Field
                  label="Email"
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={update("email")}
                />

                <div>
                  <span className="label text-bone-dim">Мета звернення</span>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {INTERESTS.map((it) => {
                      const active = form.interest === it;
                      return (
                        <button
                          key={it}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, interest: it }))}
                          className={`border px-4 py-2.5 text-[12px] tracking-[0.06em] transition-colors ${
                            active
                              ? "border-gold bg-gold/10 text-gold-soft"
                              : "border-hair text-bone-muted hover:border-bone/40 hover:text-bone"
                          }`}
                        >
                          {it}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="label text-bone-dim" htmlFor="message">
                    Повідомлення
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Коротко опишіть ваш запит"
                    className="mt-3 w-full resize-none border-b border-hair bg-transparent py-4 text-[15px] text-bone outline-none transition-colors placeholder:text-bone-dim focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="label group inline-flex w-full items-center justify-between border border-bone/25 px-8 py-5 text-bone transition-colors hover:border-gold hover:bg-gold hover:text-ink sm:w-auto sm:gap-16"
                >
                  {submitting ? "Надсилаємо..." : "Надіслати заявку"}
                  <ArrowRight className="w-10 transition-transform duration-500 group-hover:translate-x-2" />
                </button>
                {error && (
                  <p className="text-[13px] leading-relaxed text-gold-soft">
                    {error}
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-hair pb-4">
      <dt className="label text-bone-dim">{label}</dt>
      <dd className="text-[15px] tracking-[0.03em] text-bone">{children}</dd>
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="label text-bone-dim">{label}</span>
      <input
        {...props}
        className="mt-3 w-full border-b border-hair bg-transparent py-4 text-[15px] text-bone outline-none transition-colors placeholder:text-bone-dim focus:border-gold"
      />
    </label>
  );
}
