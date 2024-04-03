'use client';

import { createContext } from 'react';
import { TThemeContext } from '../types';

export const context = createContext<TThemeContext>({
    isDark: false,
    setTheme: () => {
        return;
    },
});
