import Link from "next/link";

import Reveal from "@/components/site/Reveal";
import { siteContent } from "@/content/site";

export default function HeroManifestoSection() {
  return (
    <section className="section-shell border-t-0 pb-20 pt-12 sm:pb-24 sm:pt-20" id="top">
      <div className="page-shell">
        <div className="surface-frame px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div
            aria-hidden="true"
            className="surface-orbit -left-16 top-10 h-40 w-40 opacity-60"
          />
          <div
            aria-hidden="true"
            className="surface-orbit -right-24 bottom-12 h-56 w-56 opacity-50"
          />

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.72fr)] lg:items-end">
            <Reveal>
              <header className="max-w-5xl">
                <p className="eyebrow">{siteContent.manifestoEyebrow}</p>
                <p className="font-display text-[1.35rem] leading-none text-white/70 sm:text-[1.6rem]">
                  {siteContent.manifestoLabel}
                </p>
                <h1 className="display-title mt-4 max-w-6xl">
                  {siteContent.manifestoTitle}
                </h1>
                <p className="body-copy mt-7 max-w-3xl">
                  {siteContent.manifestoBody}
                </p>

                <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                  {siteContent.heroSignals.map((signal) => (
                    <div key={signal.label} className="space-y-2">
                      <p className="eyebrow mb-0">{signal.label}</p>
                      <p className="body-copy text-sm text-white/84">
                        {signal.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-5">
                  <Link
                    className="text-link"
                    href={siteContent.heroPrimaryAction.href}
                  >
                    {siteContent.heroPrimaryAction.label}
                  </Link>
                  <Link
                    className="text-link muted-link"
                    href={siteContent.heroSecondaryAction.href}
                  >
                    {siteContent.heroSecondaryAction.label}
                  </Link>
                </div>
              </header>
            </Reveal>

            <Reveal delay={0.12}>
              <aside className="panel-strong relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <div className="space-y-8">
                  <div>
                    <p className="eyebrow">Context</p>
                    <p className="body-copy max-w-sm">{siteContent.heroContext}</p>
                  </div>

                  <div className="fine-rule pt-6">
                    <p className="eyebrow">Current notes</p>
                    <ul className="space-y-4">
                      {siteContent.heroNotes.map((note) => (
                        <li key={note} className="body-copy-soft">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="fine-rule pt-6">
                    <p className="eyebrow">Location</p>
                    <p className="body-copy-soft">{siteContent.location}</p>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
