import { useAuth } from '@clerk/nextjs';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import {
    context,
    actionsContext,
    fetchOrGenerateTokens,
    subtractTokens,
    updateTokens,
} from './model';

export const TokensProvider = ({ children }: { children: ReactNode }) => {
    const [tokens, setTokens] = useState<number | null>(null);
    const { userId } = useAuth();

    useEffect(() => {
        if (!userId) {
            setTokens(null);
            return;
        }

        fetchOrGenerateTokens().then((result) => {
            setTokens(result);
        });
    }, [userId]);

    useEffect(() => {
        if (tokens !== null && tokens < 0) {
            updateTokens(0).then((result) => {
                setTokens(result);
            });
        }
    }, [tokens]);

    const decreaseTokens = useCallback(async (number: number) => {
        const newValue = await subtractTokens(number);

        setTokens(newValue);
    }, []);

    const value = useMemo(() => {
        return {
            tokens: Number(tokens) < 0 ? 0 : tokens,
        };
    }, [tokens]);

    const actionsValue = useMemo(() => {
        return {
            decreaseTokens,
        };
    }, [decreaseTokens]);

    return (
        <actionsContext.Provider value={actionsValue}>
            <context.Provider value={value}>{children}</context.Provider>
        </actionsContext.Provider>
    );
};
