import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "vi"],

  // Used when no locale matches
  defaultLocale: "en",

  // Don't prefix the URL for the default locale
  localePrefix: "as-needed", // or 'always' or 'never'

  localeDetection: true,
});
