import Link from "next/link";

import { navigationItems } from "@/content/navigation";
import { siteContent } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Ngwendu Gambu, home">
          <span className="site-header__signal" aria-hidden="true" />
          <span className="site-header__name">{siteContent.name}</span>
          <span className="site-header__coordinate" aria-hidden="true">
            JHB / ZA
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className="site-nav__link" href={item.href}>
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
