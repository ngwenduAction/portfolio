import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site";

const canonicalRoutes = [
  "/",
  "/work/koi",
  "/work/mobikes",
  "/work/signal-field",
  "/work/sera",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return canonicalRoutes.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
  }));
}
