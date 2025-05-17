import { ReactNode } from 'react';
import { Inter } from "next/font/google";
import { Toaster } from 'sonner';

type Props = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Props) {
  return (
    // The lang attribute will be configured in src/app/[locale]/layout.tsx
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + ' scroll-smooth'}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}