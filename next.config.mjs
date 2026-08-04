import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: "maneno-xj",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Widen client file upload for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment if needed to circumvent ad-blockers (may increase server load)
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

});
