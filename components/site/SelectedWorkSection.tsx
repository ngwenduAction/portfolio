import ProjectLinkList from "@/components/site/ProjectLinkList";
import Reveal from "@/components/site/Reveal";
import { featuredWork } from "@/content/featured-work";

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
              The work section is no longer a gallery of interchangeable cards.
              It is a pair of project frames: one centered on structural rigor,
              the other on signal, atmosphere, and the move toward more spatial
              visual direction.
            </p>
          </header>
        </Reveal>

        <div className="space-y-8 lg:space-y-10">
          {featuredWork.map((project, index) => {
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
      </div>
    </section>
  );
}
