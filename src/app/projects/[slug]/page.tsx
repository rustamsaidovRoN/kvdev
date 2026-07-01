import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ArrowRight } from "@/components/site/icons";
import {
  projects,
  getProject,
  getNextProject,
  img,
  cityImageAlt,
} from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Проєкт | KV DEV" };
  return {
    title: `${p.name} — ${p.category} | KV DEV`,
    description: p.lead,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  return (
    <>
      <Header />
      <main>
        <ProjectHero project={project} />

        {/* lead + specs */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-edge px-5 md:px-10">
            <div className="grid gap-14 md:grid-cols-12">
              <Reveal className="md:col-span-5">
                <p className="text-balance font-display font-light leading-[1.15] text-[clamp(1.6rem,3vw,2.6rem)]">
                  {project.lead}
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:col-span-6 md:col-start-7">
                {project.specs.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.05} className="border-t border-hair pt-5">
                    <div className="label text-bone-dim">{s.label}</div>
                    <div className="mt-3 font-display text-2xl font-light text-bone md:text-3xl">
                      {s.value}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* overview */}
        <section className="pb-8 md:pb-16">
          <div className="mx-auto max-w-edge px-5 md:px-10">
            <div className="grid gap-10 md:grid-cols-12">
              <Reveal className="md:col-span-3">
                <div className="label text-gold">Про проєкт</div>
              </Reveal>
              <div className="max-w-3xl space-y-7 md:col-span-8 md:col-start-5">
                {project.description.map((par, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <p className="text-[16px] leading-[1.9] text-bone/85 md:text-[18px]">
                      {par}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* gallery */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-edge px-5 md:px-10">
            <div className="grid gap-4 md:grid-cols-12 md:gap-6">
              <GalleryImg src={project.gallery[0]} alt={project.name} className="md:col-span-8" ratio="aspect-[16/10]" />
              <GalleryImg src={project.gallery[1]} alt={project.name} className="md:col-span-4" ratio="aspect-[4/5] md:h-full" />
              <GalleryImg src={project.gallery[2]} alt={project.name} className="md:col-span-4" ratio="aspect-[4/5] md:h-full" />
              <GalleryImg src={project.gallery[3]} alt={project.name} className="md:col-span-8" ratio="aspect-[16/10]" />
            </div>
          </div>
        </section>

        {/* features */}
        <section className="border-t border-hair py-20 md:py-28">
          <div className="mx-auto max-w-edge px-5 md:px-10">
            <div className="grid gap-12 md:grid-cols-12">
              <Reveal className="md:col-span-4">
                <div className="label mb-6 text-gold">Інфраструктура</div>
                <h2 className="font-display font-light leading-[1.05] text-[clamp(1.9rem,4vw,3.2rem)]">
                  Що всередині
                </h2>
              </Reveal>
              <div className="md:col-span-7 md:col-start-6">
                <ul className="grid gap-x-12 sm:grid-cols-2">
                  {project.features.map((f, i) => (
                    <Reveal key={f} delay={(i % 2) * 0.06}>
                      <li className="flex items-center justify-between border-b border-hair py-5">
                        <span className="text-[15px] tracking-[0.02em] text-bone">
                          {f}
                        </span>
                        <span className="font-mono text-[12px] text-bone-dim">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* location */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-edge px-5 md:px-10">
            <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <Reveal>
                  <div className="label mb-8 text-gold">Локація</div>
                  <h2 className="font-display font-light leading-[1.02] text-[clamp(2.2rem,5vw,4rem)]">
                    {project.district}
                  </h2>
                  <p className="mt-6 text-[15px] leading-relaxed text-bone-muted">
                    {project.address}, Київ. Знакова локація з усталеною
                    інфраструктурою, зеленню та швидким доступом до центру міста.
                  </p>
                  <div className="mt-8 flex items-center gap-6 border-t border-hair pt-6">
                    <span className="label text-bone-dim">Статус</span>
                    <span className="text-[14px] text-bone">{project.status}</span>
                    <span className="ml-auto label text-bone-dim">
                      {project.year}
                    </span>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
                <div className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(cityImageAlt, 1500)}
                    alt="Київ"
                    className="aspect-[16/11] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* next project */}
        <Link
          href={`/projects/${next.slug}`}
          className="group relative block h-[62vh] overflow-hidden border-t border-hair"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img(next.cover, 2000)}
            alt={next.name}
            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-55"
          />
          <div className="absolute inset-0 bg-ink/40" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 text-center">
            <span className="label text-bone/70">Наступний проєкт</span>
            <span className="font-display font-light leading-none text-bone transition-colors duration-500 group-hover:text-gold-soft text-[clamp(2.6rem,9vw,7.5rem)]">
              {next.name}
            </span>
            <span className="label flex items-center gap-3 text-gold">
              Дивитись
              <ArrowRight className="w-9 transition-transform duration-500 group-hover:translate-x-2" />
            </span>
          </div>
        </Link>
      </main>
      <Footer />
    </>
  );
}

function GalleryImg({
  src,
  alt,
  className = "",
  ratio = "aspect-[16/10]",
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <Reveal className={className}>
      <div className={`overflow-hidden ${ratio}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img(src, 1500)}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </Reveal>
  );
}
