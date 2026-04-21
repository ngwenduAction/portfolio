import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectLinkList from "@/components/site/ProjectLinkList";
import Reveal from "@/components/site/Reveal";
import { getFeaturedWorkBySlug } from "@/content/featured-work";

export function generateMetadata(): Metadata {
  const project = getFeaturedWorkBySlug("sera");

  if (!project) {
    return {};
  }

  const description = `${project.summary} ${project.caseStudy.introSummary}`;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: project.path,
    },
    openGraph: {
      title: project.title,
      description,
      type: "article",
      url: project.path,
      images: [
        {
          url: "/og-sera.png",
          width: 1477,
          height: 704,
          alt: "SÉRA project preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description,
      images: ["/og-sera.png"],
    },
  };
}

export default function SeraPage() {
  const project = getFeaturedWorkBySlug("sera");

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
                Negative Space
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-end">
            <Reveal>
              <header className="max-w-5xl">
                <p className="eyebrow">{project.label}</p>
                <p className="font-display text-[1.4rem] text-white/66 sm:text-[1.75rem]">
                  {project.caseStudy.introLabel}
                </p>
                <h1 className="display-title mt-4">{project.title}</h1>
                <p className="font-display mt-5 text-3xl leading-tight text-white sm:text-4xl">
                  {project.thesis}
                </p>
                <p className="body-copy mt-7 max-w-3xl">{project.summary}</p>
                <p className="body-copy mt-5 max-w-3xl">
                  {project.caseStudy.introSummary}
                </p>
              </header>
            </Reveal>

            <Reveal delay={0.12}>
              <aside className="surface-frame px-6 py-6 sm:px-8 sm:py-8">
                <div
                  aria-hidden="true"
                  className="surface-orbit -left-12 top-8 h-36 w-36 opacity-60"
                />
                <div
                  aria-hidden="true"
                  className="surface-orbit bottom-8 right-10 h-44 w-44 opacity-45"
                />

                <div className="relative z-10 space-y-8">
                  <div className="flex items-end justify-between gap-4">
                    <span className="status-pill">{project.status}</span>
                    <span className="font-display text-5xl text-white/18">
                      {project.index}
                    </span>
                  </div>

                  <div className="space-y-5">
                    {project.caseStudy.heroSignals.map((signal) => (
                      <div
                        key={signal.label}
                        className="fine-rule pt-4 first:border-t-0 first:pt-0"
                      >
                        <p className="eyebrow mb-1">{signal.label}</p>
                        <p className="body-copy text-sm text-white/82">
                          {signal.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.78fr)]">
          <Reveal>
            <article className="panel-strong space-y-6">
              <div>
                <p className="eyebrow">Role and focus</p>
                <h2 className="section-title text-[2.4rem] sm:text-[3rem]">
                  Editorial frontend systems with motion that protects the read.
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
            <aside className="panel flex h-fit flex-col gap-6 lg:sticky lg:top-28">
              <div>
                <p className="eyebrow">Project frame</p>
                <p className="body-copy-soft">{project.detailIntro}</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <Reveal>
            <header className="section-header grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(18rem,0.98fr)]">
              <div>
                <p className="eyebrow">Key systems / decisions</p>
                <h2 className="section-title">{project.caseStudy.systemsHeading}</h2>
              </div>
              <p className="body-copy max-w-2xl lg:justify-self-end">
                {project.caseStudy.systemsIntro}
              </p>
            </header>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {project.caseStudy.systemsDecisions.map((decision, index) => (
              <Reveal key={decision.title} delay={index * 0.08}>
                <article className="panel flex h-full flex-col gap-4">
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
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(16rem,0.78fr)_minmax(0,1.22fr)]">
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
                <article className="panel grid gap-4 lg:grid-cols-[minmax(14rem,0.52fr)_minmax(0,1fr)]">
                  <h3 className="font-display text-3xl text-white">
                    {note.title}
                  </h3>
                  <p className="body-copy-soft">{note.body}</p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.22}>
              <div className="panel-strong">
                <p className="eyebrow">Closing note</p>
                <p className="body-copy">{project.caseStudy.closingNote}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 sm:pb-24">
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(18rem,0.94fr)]">
          <Reveal>
            <article className="panel-strong space-y-6">
              <div>
                <p className="eyebrow">{project.caseStudy.outcomeHeading}</p>
                <h2 className="section-title text-[2.4rem] sm:text-[3rem]">
                  What SÉRA clarifies about the practice.
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

            <Reveal delay={0.12}>
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
                <p className="eyebrow">SÉRA</p>
                <p className="body-copy-soft">
                  A case study in editorial frontend systems, motion restraint,
                  responsive media handling, and the quieter forms of polish
                  that make authored interfaces hold together.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
