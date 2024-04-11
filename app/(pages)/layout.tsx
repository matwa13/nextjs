import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Providers } from '@/providers';
import { Notifications } from '@/_entities/notifications';
import { Footer } from '@/_widgets/footer';
import { Navbar } from '@/_widgets/navbar';
import { cn } from '@/_shared/lib';
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
                <body className={cn(inter.className)}>
                    <Providers>
                        <div className="flex h-screen flex-col overflow-hidden">
                            <Notifications />
                            <Navbar />
                            <main className="flex-1 overflow-y-auto p-4">
                                <div className="container mx-auto h-full">
                                    {children}
                                </div>
                            </main>
                            <Footer />
                        </div>
                    </Providers>
                </body>
            </html>
        </ClerkProvider>
    );
}
