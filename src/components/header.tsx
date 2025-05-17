// src/components/header.tsx
"use client";

import * as React from "react";
import { Moon, Sun, Laptop, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation'; // Use next/navigation for App Router
import { HeaderMenu } from "./header-menu";
// import { locales } from "@/config/i18n";

export default function Header() {
    const { setTheme } = useTheme();
    const t = useTranslations('Header'); // Load translations for the 'Header' namespace
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLocaleChange = (nextLocale: string) => {
        // Replace the locale part of the pathname
        const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);
        router.replace(newPathname); // Use replace to avoid adding to browser history for locale change
        // If using 'as-needed' localePrefix and switching to default, remove prefix:
        // Note: This logic needs careful handling based on your exact `localePrefix` strategy
        // if (nextLocale === defaultLocale) {
        //    router.replace(pathname.substring(pathname.indexOf('/', 1))); // basic example
        // } else {
        //    router.replace(`/${nextLocale}${pathname}`); // basic example
        // }
    };

    return (
        <header className="sticky border-bordersticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border transition-colors duration-300">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-start gap-4">
                    <div className="font-bold text-2xl">Portfolio</div>
                    {/* <HeaderMenu /> */}
                </div>
                <div className="flex items-center space-x-2">
                    {/* Language Switcher */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Languages className="h-[1.2rem] w-[1.2rem]" />
                                <span className="sr-only">{t('language')}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleLocaleChange('en')} disabled={locale === 'en'}>
                                {t('english')}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleLocaleChange('vi')} disabled={locale === 'vi'}>
                                {t('vietnamese')}
                            </DropdownMenuItem>
                            {/* Add other locales as needed */}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Theme Switcher */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">{t('theme')}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>{t('theme')}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                <Sun className="mr-2 h-4 w-4" />
                                <span>{t('light')}</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                <Moon className="mr-2 h-4 w-4" />
                                <span>{t('dark')}</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                <Laptop className="mr-2 h-4 w-4" />
                                <span>{t('system')}</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}