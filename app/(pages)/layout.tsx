import { ClerkProvider } from '@clerk/nextjs';
import classnames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Notifications } from '@/_entities/notifications';
import { ThemeProvider } from '@/_entities/theme';
import { Breadcrumbs } from '@/_widgets/breadcrumbs';
import { Footer } from '@/_widgets/footer';
import { Navbar } from '@/_widgets/navbar';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "Max's Innovative Front-end Developer Portfolio Powered by AI",
    description:
        "Max's front-end developer portfolio powered by AI, showcasing innovative web experiences crafted with expertise in UI/UX design and GPT-driven content.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={classnames(
                        inter.className,
                        'flex h-screen flex-col',
                    )}
                >
                    <ThemeProvider>
                        <Notifications />
                        <Navbar />
                        <main className="grid flex-1 overflow-y-auto">
                            <div className="container mx-auto p-4">
                                <Breadcrumbs />
                                {children}
                            </div>
                        </main>
                        <Footer />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
