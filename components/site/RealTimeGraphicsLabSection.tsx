import Link from "next/link";

import Reveal from "@/components/site/Reveal";
import { labContent } from "@/content/lab";

export default function RealTimeGraphicsLabSection() {
  return (
    <section
      aria-labelledby="lab-title"
      className="section-shell lab-section"
      id="lab"
    >
      <div className="page-shell lab-layout">
        <Reveal className="lab-intro">
          <header>
            <p className="eyebrow">{labContent.eyebrow}</p>
            <h2 className="section-title" id="lab-title">
              {labContent.heading}
            </h2>
            <p className="body-copy">{labContent.body}</p>
          </header>

          <div className="lab-field" aria-hidden="true">
            <div className="lab-field__meta">
              <span>FIELD / 01</span>
              <span>RENDER PATH</span>
            </div>
            <svg viewBox="0 0 520 300" focusable="false">
              <path d="M24 178C82 68 132 246 202 138S330 74 384 158 456 228 496 104" />
              <path d="M24 214C104 126 158 268 228 178S350 104 496 196" />
              <line x1="24" y1="56" x2="496" y2="56" />
              <line x1="24" y1="254" x2="496" y2="254" />
              <circle cx="202" cy="138" r="6" />
              <circle cx="384" cy="158" r="4" />
            </svg>
            <p>
              INPUT &#8594; UNIFORM &#8594; VERTEX &#8594; FRAGMENT &#8594; FRAME
            </p>
          </div>
        </Reveal>

        <Reveal className="lab-detail" delay={0.08}>
          <ol className="lab-concepts">
            {labContent.concepts.map((concept) => (
              <li key={concept.index}>
                <span aria-hidden="true">{concept.index}</span>
                <div>
                  <h3>{concept.title}</h3>
                  <p>{concept.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <Link className="lab-action" href={labContent.action.href}>
            <span>{labContent.action.label}</span>
            <span aria-hidden="true">&#8599;</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
