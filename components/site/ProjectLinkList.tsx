import Link from "next/link";

import type { WorkProjectLinks } from "@/content/featured-work";

type ProjectLinkListProps = {
  links: WorkProjectLinks;
  projectTitle?: string;
  variant?: "homepage" | "detail";
};

const labelsByVariant = {
  homepage: {
    caseStudy: "Case study",
    liveSite: "Live site",
    source: "Source",
  },
  detail: {
    caseStudy: "Case study route",
    liveSite: "Visit live site",
    source: "View source",
  },
} as const;

export default function ProjectLinkList({
  links,
  projectTitle,
  variant = "homepage",
}: ProjectLinkListProps) {
  const labels = labelsByVariant[variant];
  const items = [
    {
      key: "case-study",
      href: links.caseStudy.href,
      label: labels.caseStudy,
      external: false,
    },
    {
      key: "live-site",
      href: links.liveSite.href,
      label: labels.liveSite,
      external: true,
    },
    links.source
      ? {
          key: "source",
          href: links.source.href,
          label: labels.source,
          external: true,
        }
      : null,
  ].filter((item) => item !== null);

  return (
    <ul className="project-link-list">
      {items.map((item) => (
        <li key={item.key}>
          {item.external ? (
            <a
              aria-label={`${projectTitle ? `${projectTitle} ` : ""}${item.label} (opens in a new tab)`}
              className="text-link project-link project-link--external"
              href={item.href}
              rel="noreferrer"
              target="_blank"
            >
              {item.label}
              <span aria-hidden="true"> ↗</span>
            </a>
          ) : (
            <Link
              aria-label={`${projectTitle ? `${projectTitle} ` : ""}${item.label}`}
              className="text-link project-link"
              href={item.href}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
