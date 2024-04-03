'use client';

import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { context } from '@/_entities/theme/model';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>();

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        const savedTheme = window.localStorage.getItem('theme');
        const isDark =
            savedTheme === 'dark' ||
            (!savedTheme &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        setIsDarkMode(isDark);
    }, []);

    const handleThemeChange = useCallback((isDark: boolean) => {
        setIsDarkMode(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, []);

    const value = useMemo(() => {
        return {
            isDark: Boolean(isDarkMode),
            setTheme: handleThemeChange,
        };
    }, [handleThemeChange, isDarkMode]);

    return (
        <context.Provider value={value}>
            {isDarkMode !== undefined ? children : null}
        </context.Provider>
    );
};
