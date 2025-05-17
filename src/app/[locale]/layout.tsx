
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import "../globals.css";
import { notFound } from "next/navigation";

// Metadata can be generated dynamically based on locale if needed
export const metadata: Metadata = {
  title: "My App",
  description: "App with i18n and shadcn/ui",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { locale } = await params;

  if (locale === 'sw.js') {
    console.warn('[WARN] Unexpected sw.js as locale!');
    return {
      title: 'Invalid Locale',
      description: 'Request to sw.js was misrouted.',
    };
  }

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}