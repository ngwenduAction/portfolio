import { contactContent } from "@/content/contact";
import { siteContent } from "@/content/site";

export default function HeroManifestoSection() {
  return (
    <section className="hero-section" id="top">
      <div className="page-shell hero-section__shell">
        <div className="hero-grid">
          <header className="hero-copy">
            <p className="hero-eyebrow">{siteContent.manifestoEyebrow}</p>
            <h1 className="hero-title">{siteContent.manifestoTitle}</h1>
            <p className="hero-role">{siteContent.manifestoLabel}</p>
            <p className="hero-positioning">{siteContent.manifestoBody}</p>

            <ul className="hero-evidence" aria-label="Professional evidence">
              {siteContent.heroSignals.map((signal, index) => (
                <li key={signal}>
                  <span aria-hidden="true">0{index + 1}</span>
                  {signal}
                </li>
              ))}
            </ul>

            <div className="hero-actions">
              <a
                className="hero-action hero-action--primary"
                data-cursor="Explore"
                href={siteContent.heroPrimaryAction.href}
              >
                {siteContent.heroPrimaryAction.label}
              </a>
              <a
                className="hero-action hero-action--secondary"
                href={`mailto:${contactContent.email}`}
              >
                {siteContent.heroSecondaryAction.label}
              </a>
            </div>

            <p className="hero-commercial">
              {siteContent.heroCommercialPrompt}{" "}
              <a
                href={`mailto:${contactContent.email}?subject=Project%20enquiry%20via%20Maneno`}
              >
                {siteContent.heroCommercialAction}
              </a>
            </p>
          </header>

          <div className="hero-technical" aria-hidden="true">
            <div className="hero-technical__meta">
              <span>SYS / JHB-01</span>
              <span>AVAILABLE</span>
            </div>

            <svg
              className="hero-schematic"
              viewBox="0 0 420 360"
              focusable="false"
            >
              <line x1="24" y1="52" x2="396" y2="52" />
              <line x1="24" y1="180" x2="396" y2="180" />
              <line x1="24" y1="308" x2="396" y2="308" />
              <line x1="86" y1="24" x2="86" y2="336" />
              <line x1="210" y1="24" x2="210" y2="336" />
              <line x1="334" y1="24" x2="334" y2="336" />
              <circle cx="210" cy="180" r="92" />
              <circle cx="210" cy="180" r="32" />
              <path
                className="hero-schematic__signal"
                d="M24 226H88L108 190L132 254L158 212H196L218 170L242 238L266 216H396"
              />
              <circle className="hero-schematic__pulse" cx="218" cy="170" r="6" />
              <text x="104" y="42">26.2041° S</text>
              <text x="286" y="326">28.0473° E</text>
              <text className="hero-schematic__label" x="188" y="186">
                JHB
              </text>
            </svg>

            <div className="hero-technical__footer">
              <span>FULL-STACK SYSTEMS</span>
              <span>INTERACTIVE FRONTEND</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
