import Link from "next/link";

import { navigationItems } from "@/content/navigation";
import { siteContent } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(9,10,12,0.78)] backdrop-blur-xl">
      <div className="page-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-end sm:justify-between">
        <Link href="/" className="inline-flex flex-col gap-1">
          <span className="eyebrow mb-0">{siteContent.label}</span>
          <span className="text-sm uppercase tracking-[0.34em] text-white/92">
            {siteContent.name}
          </span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-5 text-sm text-white/64 sm:justify-end">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className="quiet-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
