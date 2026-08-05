import Image from "next/image";

import ProjectLinkList from "@/components/site/ProjectLinkList";
import Reveal from "@/components/site/Reveal";
import { commercialWork, labWork } from "@/content/featured-work";

export default function SelectedWorkSection() {
  return (
    <section className="section-shell selected-work" id="work">
      <div className="page-shell">
        <Reveal>
          <header className="selected-work__header">
            <p className="eyebrow">Selected work</p>
            <div className="selected-work__heading-grid">
              <h2 className="section-title">
                Commercial systems. Experimental interfaces.
              </h2>
              <p className="body-copy">
                Sold client platforms and self-directed experiments across
                full-stack engineering, motion, and real-time graphics.
              </p>
            </div>
          </header>
        </Reveal>

        <div className="work-tier work-tier--commercial">
          <Reveal>
            <header className="work-tier__header">
              <p className="work-tier__index">Tier 01</p>
              <div>
                <h3>Commercial proof</h3>
                <p>
                  Sold delivery and active client work, labelled with its real
                  operating context.
                </p>
              </div>
            </header>
          </Reveal>

          <div className="work-tier__list">
            {commercialWork.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <article
                  aria-labelledby={`work-title-${project.slug}`}
                  className={`work-entry work-entry--commercial ${
                    index % 2 === 1 ? "work-entry--reverse" : ""
                  }`}
                >
                  <div className="work-entry__meta">
                    <span>{project.index}</span>
                    <span>{project.classification}</span>
                    <span>{project.evidence}</span>
                  </div>

                  <div className="work-entry__body">
                    <figure className="work-media">
                      <Image
                        alt={project.media.alt}
                        className="work-media__image"
                        height={project.media.height}
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        src={project.media.src}
                        width={project.media.width}
                      />
                      <figcaption>
                        <span>Current live interface</span>
                        <span>{project.status}</span>
                      </figcaption>
                    </figure>

                    <div className="work-entry__content">
                      <h4 id={`work-title-${project.slug}`}>
                        {project.title}
                      </h4>
                      <p className="work-entry__thesis">{project.thesis}</p>
                      <p className="work-entry__contribution">
                        <span>Contribution</span>
                        {project.role}
                      </p>
                      <p className="work-entry__summary">{project.summary}</p>

                      <dl className="work-entry__facts">
                        <div>
                          <dt>System</dt>
                          <dd>{project.systems}</dd>
                        </div>
                        <div>
                          <dt>Delivery focus</dt>
                          <dd>{project.focus.join(" · ")}</dd>
                        </div>
                      </dl>

                      <ProjectLinkList
                        links={project.links}
                        projectTitle={project.title}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="work-tier work-tier--lab">
          <Reveal>
            <header className="work-tier__header">
              <p className="work-tier__index">Tier 02</p>
              <div>
                <h3>Creative and technical laboratory</h3>
                <p>
                  Self-directed systems exploring real-time rendering, motion,
                  and visual direction.
                </p>
              </div>
            </header>
          </Reveal>

          <div className="work-tier__list">
            {labWork.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <article
                  aria-labelledby={`work-title-${project.slug}`}
                  className={`work-entry work-entry--lab ${
                    index % 2 === 1 ? "work-entry--reverse" : ""
                  }`}
                >
                  <div className="work-entry__meta">
                    <span>{project.index}</span>
                    <span>{project.classification}</span>
                    <span>{project.evidence}</span>
                  </div>

                  <div className="work-entry__body">
                    <figure className="work-media">
                      <Image
                        alt={project.media.alt}
                        className="work-media__image"
                        height={project.media.height}
                        sizes="(min-width: 1024px) 34vw, 100vw"
                        src={project.media.src}
                        width={project.media.width}
                      />
                      <figcaption>
                        <span>Project preview</span>
                        <span>{project.status}</span>
                      </figcaption>
                    </figure>

                    <div className="work-entry__content">
                      <p className="work-entry__role">{project.role}</p>
                      <h4 id={`work-title-${project.slug}`}>
                        {project.title}
                      </h4>
                      <p className="work-entry__thesis">{project.thesis}</p>
                      <p className="work-entry__summary">{project.summary}</p>

                      <ul className="work-entry__focus" aria-label="Project focus">
                        {project.focus.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <ProjectLinkList
                        links={project.links}
                        projectTitle={project.title}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
