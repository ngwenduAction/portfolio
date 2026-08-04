// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

const isProduction = process.env.NODE_ENV === "production";

Sentry.init({
  dsn: "https://03132876b620ea991f8c588689588a3a@o4507616366952448.ingest.us.sentry.io/4507616385499136",
  enabled: isProduction,
  tracesSampleRate: isProduction ? 0.1 : 0,
  debug: false,
});
