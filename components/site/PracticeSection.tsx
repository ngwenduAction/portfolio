import { practiceAreas } from "@/content/practice-areas";
import Reveal from "@/components/site/Reveal";

export default function PracticeSection() {
  return (
    <section className="section-shell" id="practice">
      <div className="page-shell grid gap-10 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)]">
        <Reveal>
          <header className="max-w-xl lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Practice</p>
            <h2 className="section-title">
              Three practice areas organize the work without drifting into
              service-business framing.
            </h2>
            <p className="body-copy mt-6">
              The section is meant to read like an index of concerns: how
              systems are structured, how motion is implemented, and how that
              foundation opens toward real-time surface work.
            </p>
          </header>
        </Reveal>

        <div className="space-y-6">
          {practiceAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.08}>
              <article className="panel grid gap-6 lg:grid-cols-[minmax(10rem,0.42fr)_minmax(0,1fr)] lg:items-start">
                <div className="space-y-4">
                  <p className="font-display text-4xl text-white/22 sm:text-5xl">
                    0{index + 1}
                  </p>
                  <h3 className="font-display text-3xl text-white sm:text-[2.35rem]">
                    {area.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  <p className="body-copy">{area.summary}</p>
                  <div className="fine-rule pt-5">
                    <ul className="grid gap-3 sm:grid-cols-3">
                      {area.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4"
                        >
                          <p className="body-copy-soft">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
