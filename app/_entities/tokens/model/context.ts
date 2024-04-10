'use client';

import { createContext } from 'react';
import { TTokensContext, TTokensActionsContext } from '../types';
export const context = createContext<TTokensContext>({
    tokens: 0,
});

export const actionsContext = createContext<TTokensActionsContext>({
    decreaseTokens: () => {
        return;
    },
});
