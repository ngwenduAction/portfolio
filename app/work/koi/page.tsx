import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectLinkList from "@/components/site/ProjectLinkList";
import Reveal from "@/components/site/Reveal";
import { getFeaturedWorkBySlug } from "@/content/featured-work";
import { createProjectMetadata } from "@/lib/project-metadata";

export function generateMetadata(): Metadata {
  const project = getFeaturedWorkBySlug("koi");

  if (!project) {
    return {};
  }

  return createProjectMetadata(project);
}

export default function KoiPage() {
  const project = getFeaturedWorkBySlug("koi");

  if (!project) {
    notFound();
  }

  return (
    <main id="main-content">
      <section className="section-shell border-t-0 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="page-shell">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <Link className="text-link" href="/#work">
                Back to selected work
              </Link>
              <Link
                className="quiet-link text-sm uppercase tracking-[0.22em] text-white/52"
                href="/"
              >
                Ngwendu Gambu
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(18rem,0.88fr)_minmax(0,1.12fr)] lg:items-stretch">
            <Reveal>
              <aside className="panel-strong flex h-full flex-col gap-8">
                <div className="flex items-end justify-between gap-4">
                  <span className="status-pill">{project.status}</span>
                  <span className="font-display text-5xl text-white/18">
                    {project.index}
                  </span>
                </div>

                <div>
                  <p className="eyebrow">{project.caseStudy.introLabel}</p>
                  <p className="font-display text-3xl leading-tight text-white sm:text-[2.6rem]">
                    {project.thesis}
                  </p>
                </div>

                <div className="grid gap-4">
                  {project.caseStudy.heroSignals.map((signal) => (
                    <div
                      key={signal.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4"
                    >
                      <p className="eyebrow mb-1">{signal.label}</p>
                      <p className="body-copy-soft">{signal.value}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </Reveal>

            <Reveal delay={0.12}>
              <header className="surface-frame flex min-h-[27rem] flex-col justify-between px-6 py-6 sm:px-8 sm:py-8 lg:min-h-[31rem]">
                <div
                  aria-hidden="true"
                  className="surface-orbit -left-16 top-10 h-40 w-40 opacity-55"
                />
                <div
                  aria-hidden="true"
                  className="surface-orbit right-10 top-14 h-24 w-24 opacity-50"
                />
                <div
                  aria-hidden="true"
                  className="surface-orbit bottom-8 right-14 h-56 w-56 opacity-38"
                />

                <div className="relative z-10 max-w-4xl">
                  <p className="eyebrow">{project.label}</p>
                  <h1 className="display-title mt-4">{project.title}</h1>
                  <p className="body-copy mt-7 max-w-3xl">{project.summary}</p>
                  <p className="body-copy mt-5 max-w-3xl">
                    {project.caseStudy.introSummary}
                  </p>
                </div>

                <div className="relative z-10 mt-8 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow mb-1">Architecture</p>
                    <p className="body-copy-soft">{project.systems}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Stack</p>
                    <p className="body-copy-soft">{project.rendering}</p>
                  </div>
                </div>
              </header>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(0,1.16fr)_minmax(18rem,0.84fr)]">
          <Reveal>
            <article className="panel space-y-6">
              <div>
                <p className="eyebrow">Role and focus</p>
                <h2 className="section-title text-[2.35rem] sm:text-[3rem]">
                  Full-stack engineering, relational data architecture, and
                  premium interface control engineered as one product system.
                </h2>
              </div>

              <div className="grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow mb-2">Role</p>
                  <p className="body-copy-soft">{project.role}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2">Focus</p>
                  <ul className="space-y-2">
                    {project.focus.map((item) => (
                      <li key={item} className="body-copy-soft">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-4 border-t border-white/10 pt-6">
                {project.caseStudy.roleNotes.map((note) => (
                  <p key={note} className="body-copy">
                    {note}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="panel-strong flex h-fit flex-col gap-6 lg:sticky lg:top-28">
              <div>
                <p className="eyebrow">Project frame</p>
                <p className="body-copy-soft">{project.detailIntro}</p>
              </div>

              <div className="fine-rule pt-5">
                <p className="eyebrow">Production environment</p>
                <p className="body-copy-soft">
                  Local development moved through Prisma-driven schema work and
                  into PostgreSQL on AWS RDS, with deployment and environment
                  mapping handled through Vercel.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <Reveal>
            <header className="section-header grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,1fr)]">
              <div>
                <p className="eyebrow">Key systems / decisions</p>
                <h2 className="section-title">{project.caseStudy.systemsHeading}</h2>
              </div>
              <p className="body-copy max-w-2xl lg:justify-self-end">
                {project.caseStudy.systemsIntro}
              </p>
            </header>
          </Reveal>

          <div className="space-y-5">
            {project.caseStudy.systemsDecisions.map((decision, index) => (
              <Reveal key={decision.title} delay={index * 0.08}>
                <article className="panel grid gap-6 lg:grid-cols-[minmax(10rem,0.22fr)_minmax(16rem,0.6fr)_minmax(0,1fr)] lg:items-start">
                  <p className="font-display text-4xl text-white/22 sm:text-5xl">
                    0{index + 1}
                  </p>
                  <h3 className="font-display text-3xl text-white">
                    {decision.title}
                  </h3>
                  <p className="body-copy-soft">{decision.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 sm:pb-24">
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(18rem,0.78fr)_minmax(0,1.22fr)]">
          <Reveal>
            <header className="max-w-xl lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">Implementation notes</p>
              <h2 className="section-title">
                {project.caseStudy.implementationHeading}
              </h2>
              <p className="body-copy mt-6">
                {project.caseStudy.implementationIntro}
              </p>
            </header>
          </Reveal>

          <div className="space-y-5">
            {project.caseStudy.implementationNotes.map((note, index) => (
              <Reveal key={note.title} delay={index * 0.08}>
                <article className="panel-strong grid gap-4 lg:grid-cols-[minmax(14rem,0.48fr)_minmax(0,1fr)]">
                  <h3 className="font-display text-3xl text-white">
                    {note.title}
                  </h3>
                  <p className="body-copy-soft">{note.body}</p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.22}>
              <article className="panel space-y-5">
                <div>
                  <p className="eyebrow">Process summary</p>
                  <p className="body-copy-soft">
                    Next.js environment setup, Prisma integration, schema
                    design, responsive layout construction, geometry overrides,
                    AWS RDS provisioning, and Vercel deployment all formed one
                    continuous engineering pipeline rather than separate phases.
                  </p>
                </div>

                <div className="fine-rule pt-5">
                  <p className="eyebrow">Technical baseline</p>
                  <p className="body-copy-soft">
                    The project provides a strong software engineering baseline
                    for more advanced real-time and technical art work by
                    proving the infrastructure can already hold at production
                    depth.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 sm:pb-24">
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(18rem,0.92fr)_minmax(0,1.08fr)]">
          <Reveal>
            <aside className="panel flex h-fit flex-col gap-6">
              <div>
                <p className="eyebrow">Links</p>
                <ProjectLinkList links={project.links} variant="detail" />
              </div>

              <div className="fine-rule pt-5">
                <p className="eyebrow">Support links</p>
                <ul className="space-y-3">
                  {project.caseStudy.supportLinks.map((link) => (
                    <li key={link.href}>
                      <a className="text-link" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="fine-rule pt-5">
                <p className="eyebrow">KOI</p>
                <p className="body-copy-soft">
                  A case study in full-stack architecture, relational data
                  design, production deployment, and premium frontend precision
                  engineered to operate as one coherent system.
                </p>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="panel-strong space-y-6">
              <div>
                <p className="eyebrow">{project.caseStudy.outcomeHeading}</p>
                <h2 className="section-title text-[2.35rem] sm:text-[3rem]">
                  What KOI establishes inside the portfolio.
                </h2>
              </div>
              <p className="body-copy">{project.caseStudy.outcomeIntro}</p>
              <div className="grid gap-4 border-t border-white/10 pt-6">
                {project.caseStudy.outcomePoints.map((point) => (
                  <p key={point} className="body-copy-soft">
                    {point}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
