import ProjectLinkList from "@/components/site/ProjectLinkList";
import Reveal from "@/components/site/Reveal";
import { anchorWork, clientWork } from "@/content/featured-work";

export default function SelectedWorkSection() {
  return (
    <section className="section-shell" id="work">
      <div className="page-shell">
        <Reveal>
          <header className="section-header grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.78fr)] lg:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title">
                {"S\u00C9RA"} and Signal Field anchor the portfolio as two
                distinct but related surfaces.
              </h2>
            </div>
            <p className="body-copy max-w-2xl lg:justify-self-end">
              The work section is organized around an authored pair first, then
              widened by real client delivery. SÉRA and Signal Field establish
              the conceptual frame; mobikes proves that the same frontend
              discipline can operate clearly inside a business-facing website.
            </p>
          </header>
        </Reveal>

        <div className="space-y-8 lg:space-y-10">
          {anchorWork.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <Reveal key={project.slug} delay={index * 0.08}>
                <article className="panel-strong overflow-hidden">
                  <div
                    className={`grid gap-8 lg:items-end ${
                      isEven
                        ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]"
                        : "lg:grid-cols-[minmax(20rem,0.92fr)_minmax(0,1.08fr)]"
                    }`}
                  >
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <div className="surface-frame min-h-[20rem] px-6 py-6 sm:min-h-[24rem] sm:px-8 sm:py-8">
                        <div
                          aria-hidden="true"
                          className="surface-orbit -left-10 top-10 h-32 w-32 opacity-60"
                        />
                        <div
                          aria-hidden="true"
                          className="surface-orbit bottom-10 right-12 h-44 w-44 opacity-45"
                        />

                        <div className="relative z-10 flex h-full flex-col justify-between">
                          <div className="flex items-start justify-between gap-4">
                            <span className="status-pill">{project.label}</span>
                            <span className="font-display text-4xl text-white/20 sm:text-5xl">
                              {project.index}
                            </span>
                          </div>

                          <div className="max-w-lg space-y-4">
                            <p className="eyebrow mb-0">{project.year}</p>
                            <p className="font-display text-3xl leading-tight text-white sm:text-4xl">
                              {project.thesis}
                            </p>
                            <p className="body-copy-soft max-w-md">
                              {project.rendering}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`flex h-full flex-col gap-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="status-pill">{project.role}</span>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-display text-5xl leading-none text-white sm:text-6xl">
                          {project.title}
                        </h3>
                        <p className="body-copy max-w-2xl">{project.summary}</p>
                      </div>

                      <dl className="grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
                        <div>
                          <dt className="eyebrow mb-2">Systems</dt>
                          <dd className="body-copy-soft">{project.systems}</dd>
                        </div>
                        <div>
                          <dt className="eyebrow mb-2">Motion</dt>
                          <dd className="body-copy-soft">{project.motion}</dd>
                        </div>
                      </dl>

                      <div className="grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
                        {project.focus.map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4"
                          >
                            <p className="body-copy-soft">{item}</p>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <ProjectLinkList links={project.links} />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {clientWork.length > 0 ? (
          <div className="mt-12 space-y-6 border-t border-white/10 pt-10 sm:mt-14 sm:pt-12">
            <Reveal>
              <header className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] lg:items-end">
                <div>
                  <p className="eyebrow">Client-facing delivery</p>
                  <h3 className="font-display text-3xl leading-tight text-white sm:text-[2.75rem]">
                    mobikes extends the body of work through practical
                    conversion-focused frontend execution.
                  </h3>
                </div>
                <p className="body-copy max-w-2xl lg:justify-self-end">
                  This project shows the practice in a business-facing context:
                  clarifying an offer, iterating through client feedback, and
                  building a more trustworthy path to application.
                </p>
              </header>
            </Reveal>

            {clientWork.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <article className="panel grid gap-8 lg:grid-cols-[minmax(18rem,0.7fr)_minmax(0,1.3fr)] lg:items-start">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className="status-pill">{project.label}</span>
                      <span className="font-display text-4xl text-white/20 sm:text-5xl">
                        {project.index}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <p className="eyebrow mb-0">{project.year}</p>
                      <h3 className="font-display text-4xl leading-tight text-white sm:text-5xl">
                        {project.title}
                      </h3>
                      <p className="font-display text-2xl leading-tight text-white/80 sm:text-[2rem]">
                        {project.thesis}
                      </p>
                    </div>

                    <div className="space-y-3 border-t border-white/10 pt-5">
                      <p className="eyebrow mb-0">Focus</p>
                      {project.focus.map((item) => (
                        <p key={item} className="body-copy-soft">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="body-copy max-w-3xl">{project.summary}</p>

                    <div className="grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
                      <div>
                        <dt className="eyebrow mb-2">Systems</dt>
                        <dd className="body-copy-soft">{project.systems}</dd>
                      </div>
                      <div>
                        <dt className="eyebrow mb-2">Implementation</dt>
                        <dd className="body-copy-soft">{project.rendering}</dd>
                      </div>
                    </div>

                    <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
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

                    <div className="border-t border-white/10 pt-6">
                      <ProjectLinkList links={project.links} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
