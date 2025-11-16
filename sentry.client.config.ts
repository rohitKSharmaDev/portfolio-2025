import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ad7bc315f62d6dee6479bf26e1dc80f9@o4510373861130240.ingest.us.sentry.io/4510373863096320",
  tracesSampleRate: 1,
  enableLogs: true,
  sendDefaultPii: true,

  integrations: [
    Sentry.feedbackIntegration({
      autoInject: true,
      colorScheme: "dark",
    }),
  ],
});
