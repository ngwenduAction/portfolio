import { contactContent } from "@/content/contact";
import Reveal from "@/components/site/Reveal";

export default function ContactSection() {
  const employmentHref = `mailto:${contactContent.email}?subject=${encodeURIComponent(
    contactContent.employment.subject,
  )}`;
  const studioHref = `mailto:${contactContent.email}?subject=${encodeURIComponent(
    contactContent.studio.subject,
  )}`;

  return (
    <section
      aria-labelledby="contact-title"
      className="section-shell contact-section"
      id="contact"
    >
      <div className="page-shell">
        <div className="contact-layout">
          <Reveal className="employment-contact">
            <header>
              <p className="eyebrow">{contactContent.employment.eyebrow}</p>
              <h2 className="section-title" id="contact-title">
                {contactContent.employment.heading}
              </h2>
              <p className="body-copy">{contactContent.employment.note}</p>
            </header>

            <a className="employment-action" href={employmentHref}>
              <span>{contactContent.employment.actionLabel}</span>
              <span aria-hidden="true">&#8599;</span>
            </a>
          </Reveal>

          <Reveal className="professional-links" delay={0.08}>
            <p className="eyebrow">Professional links</p>
            <ul>
              {contactContent.professionalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    aria-label={`${link.accessibleLabel} (opens in a new tab)`}
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{link.label}</span>
                    <span aria-hidden="true">&#8599;</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="professional-links__email">{contactContent.email}</p>
          </Reveal>
        </div>

        <Reveal>
          <aside aria-labelledby="studio-enquiries-title" className="studio-route">
            <div>
              <p className="eyebrow">{contactContent.studio.eyebrow}</p>
              <h3 id="studio-enquiries-title">Maneno</h3>
            </div>
            <p>{contactContent.studio.note}</p>
            <a href={studioHref}>{contactContent.studio.actionLabel}</a>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
