import { roadmapEntries } from "@/content/roadmap";
import Reveal from "@/components/site/Reveal";

export default function RoadmapSection() {
  return (
    <section className="section-shell" id="roadmap">
      <div className="page-shell">
        <Reveal>
          <header className="section-header grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
            <div>
              <p className="eyebrow">Roadmap</p>
              <h2 className="section-title">
                The next names on the horizon are staged as direction, not as
                promised completion.
              </h2>
            </div>
            <p className="body-copy max-w-2xl lg:justify-self-end">
              Substrate, Membrane, Atlas, and Threshold are kept concise on
              purpose. They function as markers for what the portfolio is
              moving toward without making claims the work has not earned yet.
            </p>
          </header>
        </Reveal>

        <div className="space-y-4">
          {roadmapEntries.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 0.08}>
              <article className="panel grid gap-5 lg:grid-cols-[minmax(16rem,0.55fr)_minmax(10rem,0.25fr)_minmax(0,1fr)] lg:items-start">
                <div className="space-y-3">
                  <p className="font-display text-4xl text-white/22 sm:text-5xl">
                    0{index + 1}
                  </p>
                  <h3 className="font-display text-3xl text-white sm:text-[2.35rem]">
                    {entry.title}
                  </h3>
                </div>

                <div className="pt-1">
                  <span className="status-pill">{entry.stage}</span>
                </div>

                <p className="body-copy-soft">{entry.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
