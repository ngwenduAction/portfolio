import Link from "next/link";

import Reveal from "@/components/site/Reveal";
import {
  capabilityAreas,
  workingPrinciples,
} from "@/content/capabilities";

export default function CapabilitiesSection() {
  return (
    <section
      aria-labelledby="capabilities-title"
      className="section-shell capabilities-section"
      id="capabilities"
    >
      <div className="page-shell">
        <Reveal>
          <header className="capabilities-header">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 className="section-title" id="capabilities-title">
                One engineer across systems, interfaces, and real-time graphics.
              </h2>
            </div>
            <p className="body-copy">
              I work from data models and server behaviour through responsive
              UI, motion, and GPU-driven interaction, choosing the level of
              complexity the product actually needs.
            </p>
          </header>
        </Reveal>

        <ol className="capability-index">
          {capabilityAreas.map((area, index) => (
            <li key={area.index}>
              <Reveal delay={index * 0.06}>
                <article className="capability-row">
                  <p className="capability-row__index" aria-hidden="true">
                    {area.index}
                  </p>

                  <div className="capability-row__heading">
                    <h3>{area.title}</h3>
                    <p>{area.summary}</p>
                  </div>

                  <div className="capability-row__detail">
                    <ul
                      aria-label={`${area.title} technologies and concerns`}
                      className="capability-topics"
                    >
                      {area.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>

                    <div className="capability-evidence">
                      <p>Project evidence</p>
                      <ul>
                        {area.evidence.map((evidence) => (
                          <li key={evidence.project}>
                            <span>{evidence.context}</span>
                            <Link href={evidence.href}>{evidence.project}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <aside
            aria-labelledby="working-principles-title"
            className="working-principles"
          >
            <div>
              <p className="eyebrow">Working principles</p>
              <h3 id="working-principles-title">
                Technical choices should strengthen the product, not perform
                around it.
              </h3>
            </div>
            <ol>
              {workingPrinciples.map((principle, index) => (
                <li key={principle}>
                  <span aria-hidden="true">0{index + 1}</span>
                  {principle}
                </li>
              ))}
            </ol>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
