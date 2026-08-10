import type { Metadata } from "next";

import type { FeaturedWork } from "@/content/featured-work";
import { siteContent } from "@/content/site";

export function createProjectMetadata(project: FeaturedWork): Metadata {
  return {
    title: project.social.title,
    description: project.social.description,
    alternates: {
      canonical: project.path,
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
