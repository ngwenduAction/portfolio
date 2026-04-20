import { contactContent } from "@/content/contact";
import { siteContent } from "@/content/site";
import Reveal from "@/components/site/Reveal";

export default function ContactSection() {
  return (
    <section className="section-shell pb-20 sm:pb-24" id="contact">
      <div className="page-shell grid gap-10 lg:grid-cols-[minmax(0,1.22fr)_minmax(18rem,0.78fr)]">
        <Reveal>
          <header className="max-w-4xl">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">
              The page closes on a direct line, not on a sales pitch.
            </h2>
            <p className="body-copy mt-6 max-w-2xl">{contactContent.note}</p>
            <a
              className="font-display mt-10 inline-flex text-4xl leading-none text-white transition duration-300 hover:text-[color:var(--accent)] sm:text-5xl"
              href={`mailto:${contactContent.email}`}
            >
              {contactContent.email}
            </a>
          </header>
        </Reveal>

        <Reveal delay={0.12}>
          <aside className="panel-strong flex h-full flex-col gap-8">
            <div>
              <p className="eyebrow">Links</p>
              <ul className="space-y-4">
                {contactContent.links.map((link) => (
                  <li key={link.href}>
                    <a
                      className="quiet-link text-lg text-white/78"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fine-rule pt-6">
              <p className="eyebrow">Closing note</p>
              <p className="body-copy-soft">{siteContent.footerNote}</p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
