// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … Favourites "/favicon.ico" or "/icon.ico"
    // - … the ones containing a dot (e.g. /favicon.ico)
    // - … the ones starting with /api/
    "/((?!api|_next/static|_next/image|favicon.ico|icon.ico).*)",
    // However, match all pathnames within `/src/app/[locale]` (e.g. `/en/about`)
    // This line might seem counter-intuitive, but it's necessary if you use `localePrefix: 'as-needed'`
    // If you use `localePrefix: 'always'`, you might not need this line
    "/",
    "/(vi|en)/:path*",
  ],
};
