import Link from "next/link";

import { contactContent } from "@/content/contact";
import { navigationItems } from "@/content/navigation";
import { siteContent } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__layout">
        <div className="site-footer__identity">
          <Link href="/">{siteContent.name}</Link>
          <p>{siteContent.label}</p>
          <p>{siteContent.location}</p>
        </div>

        <nav aria-label="Footer" className="site-footer__navigation">
          <p>Index</p>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__social">
          <p>Profiles</p>
          <ul>
            {contactContent.professionalLinks.map((link) => (
              <li key={link.href}>
                <a
                  aria-label={`${link.accessibleLabel} (opens in a new tab)`}
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="site-footer__copyright">
          &copy; {new Date().getFullYear()} Ngwendu Gambu
        </p>
      </div>
    </footer>
  );
}
