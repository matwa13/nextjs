'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode, useState } from 'react';
import { ThemeProvider } from '@/_entities/theme';
import { TokensProvider } from '@/_entities/tokens';

export const Providers = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        // default staleTime should be above 0 to avoid refetching immediately on the client
                        staleTime: 60 * 1000,
                    },
                },
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <TokensProvider>
                    {children}
                    <ReactQueryDevtools
                        initialIsOpen={false}
                        buttonPosition="bottom-left"
                    />
                </TokensProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};
