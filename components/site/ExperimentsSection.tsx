import { experiments } from "@/content/experiments";
import Reveal from "@/components/site/Reveal";

export default function ExperimentsSection() {
  return (
    <section className="section-shell" id="experiments">
      <div className="page-shell">
        <Reveal>
          <header className="section-header grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
            <div>
              <p className="eyebrow">Experiments</p>
              <h2 className="section-title">
                Smaller studies stay visible so the portfolio can evolve in
                public without turning every study into a case study.
              </h2>
            </div>
            <p className="body-copy max-w-2xl lg:justify-self-end">
              These entries behave more like an active notebook than a gallery.
              The emphasis is on what is being tested, how it is being framed,
              and where it may lead next.
            </p>
          </header>
        </Reveal>

        <div className="border-t border-white/10">
          {experiments.map((experiment, index) => (
            <Reveal key={experiment.title} delay={index * 0.08}>
              <article className="grid gap-5 border-b border-white/10 py-8 lg:grid-cols-[minmax(12rem,0.56fr)_minmax(10rem,0.32fr)_minmax(8rem,0.22fr)_minmax(0,1fr)] lg:items-start">
                <div>
                  <h3 className="font-display text-3xl text-white sm:text-[2.35rem]">
                    {experiment.title}
                  </h3>
                </div>
                <p className="eyebrow mb-0 pt-1">{experiment.medium}</p>
                <span className="status-pill w-fit">{experiment.status}</span>
                <p className="body-copy-soft">{experiment.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
