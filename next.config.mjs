import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add the rule to handle SVG files with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/, // Apply this rule to .svg files
      use: ["@svgr/webpack"], // Use @svgr/webpack to transform SVG into React components
    });

    return config;
  },
};

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

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors
  automaticVercelMonitors: true,
});
