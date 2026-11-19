import type { Metadata } from "next";

import type { FeaturedWork } from "@/content/featured-work";
import { siteContent } from "@/content/site";

export function createProjectMetadata(project: FeaturedWork): Metadata {
  // check if this is the moBikes project to block it from search engines
  const shouldHideFromGoogle =
    project.path.includes("mobikes") ||
    project.social.title.toLowerCase().includes("mobikes");

  return {
    title: project.social.title,
    description: project.social.description,
    alternates: {
      canonical: project.path,
    },
    robots: {
      index: !shouldHideFromGoogle,
      follow: true,
    },
    openGraph: {
      title: project.social.title,
      description: project.social.description,
      type: "article",
      siteName: siteContent.name,
      url: project.path,
      images: [
        {
          url: project.media.src,
          width: project.media.width,
          height: project.media.height,
          alt: project.media.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.social.title,
      description: project.social.description,
      images: [project.media.src],
    },
  };
}
