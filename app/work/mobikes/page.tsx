import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectLinkList from "@/components/site/ProjectLinkList";
import Reveal from "@/components/site/Reveal";
import { getFeaturedWorkBySlug } from "@/content/featured-work";

export function generateMetadata(): Metadata {
  const project = getFeaturedWorkBySlug("mobikes");

  if (!project) {
    return {};
  }

  const description = `${project.summary} ${project.caseStudy.introSummary}`;

  return {
    title: `${project.title} - Rent-to-Own Mobility Website`,
    description,
    alternates: {
      canonical: project.path,
    },
    openGraph: {
      title: `${project.title} - Rent-to-Own Mobility Website`,
      description,
      type: "article",
      url: project.path,
      images: [
        {
          url: "/og-home.png",
          width: 1408,
          height: 768,
          alt: "Negative Space portfolio preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Rent-to-Own Mobility Website`,
      description,
      images: ["/og-home.png"],
    },
  };
}

export default function MobikesPage() {
  const project = getFeaturedWorkBySlug("mobikes");

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

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-start">
            <Reveal>
              <header className="max-w-5xl">
                <p className="eyebrow">{project.label}</p>
                <p className="font-display text-[1.35rem] text-white/66 sm:text-[1.65rem]">
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
              <aside className="panel-strong flex h-full flex-col gap-6">
                <div className="flex items-end justify-between gap-4">
                  <span className="status-pill">{project.status}</span>
                  <span className="font-display text-5xl text-white/18">
                    {project.index}
                  </span>
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

                <div className="fine-rule pt-5">
                  <p className="eyebrow">Project frame</p>
                  <p className="body-copy-soft">{project.detailIntro}</p>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)]">
          <Reveal>
            <article className="panel space-y-6">
              <div>
                <p className="eyebrow">Role and focus</p>
                <h2 className="section-title text-[2.35rem] sm:text-[3rem]">
                  Conversion-focused UX, information clarity, and responsive
                  business-facing implementation.
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
            <aside className="surface-frame px-6 py-6 sm:px-8 sm:py-8">
              <div
                aria-hidden="true"
                className="surface-orbit -left-12 top-8 h-32 w-32 opacity-55"
              />
              <div
                aria-hidden="true"
                className="surface-orbit bottom-10 right-8 h-44 w-44 opacity-42"
              />

              <div className="relative z-10 space-y-6">
                <div>
                  <p className="eyebrow">Primary offer</p>
                  <p className="font-display text-3xl leading-tight text-white">
                    Hero Eco 150 at ZAR 800 per week.
                  </p>
                </div>

                <div className="grid gap-3 border-t border-white/10 pt-5">
                  <p className="body-copy-soft">
                    Service, insurance, and tracking are included, so the site
                    had to make the value proposition clear quickly.
                  </p>
                  <p className="body-copy-soft">
                    Supporting products and services remain visible without
                    overwhelming the primary application path.
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-shell">
          <Reveal>
            <header className="section-header grid gap-6 lg:grid-cols-[minmax(0,0.96fr)_minmax(20rem,1.04fr)]">
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
                <article className="panel grid gap-6 lg:grid-cols-[minmax(10rem,0.24fr)_minmax(16rem,0.58fr)_minmax(0,1fr)] lg:items-start">
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
        <div className="page-shell grid gap-8 lg:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)]">
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
                <article className="panel-strong grid gap-4 lg:grid-cols-[minmax(14rem,0.5fr)_minmax(0,1fr)]">
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
                  <p className="eyebrow">Supporting offer areas</p>
                  <p className="body-copy-soft">
                    Cellphones, accessories, servicing, repairs, maintenance,
                    and fingerprint or background checks all remain part of the
                    business context. The site had to acknowledge that wider
                    service surface without losing focus on the motorcycle offer.
                  </p>
                </div>

                <div className="fine-rule pt-5">
                  <p className="eyebrow">Stack</p>
                  <p className="body-copy-soft">
                    HTML / CSS / JavaScript / Google Forms / WhatsApp
                    integration
                  </p>
                </div>
              </article>
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
                <h2 className="section-title text-[2.35rem] sm:text-[3rem]">
                  What mobikes adds to the portfolio.
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
                <p className="eyebrow">Closing note</p>
                <p className="body-copy-soft">{project.caseStudy.closingNote}</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
