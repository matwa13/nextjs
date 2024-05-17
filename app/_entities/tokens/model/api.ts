'use server';

import { auth } from '@clerk/nextjs';
import { getErrorMessage, prisma } from '@/_shared/lib';

export const fetchUserTokens = async () => {
    try {
        const { userId } = auth();
        if (!userId) {
            return null;
        }
        const result = await prisma.token.findUnique({
            where: {
                userId,
            },
        });

        return result?.tokens;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const generateUserTokens = async () => {
    try {
        const { userId } = auth();
        if (!userId) {
            return null;
        }
        const result = await prisma.token.create({
            data: {
                userId,
            },
        });
        return result?.tokens;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const fetchOrGenerateTokens = async () => {
    try {
        const { userId } = auth();
        if (!userId) {
            return null;
        }
        const result = await fetchUserTokens();
        if (Number.isInteger(result)) {
            return Number(result);
        }
        return await generateUserTokens();
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const subtractTokens = async (tokens: number) => {
    try {
        const { userId } = auth();
        if (!userId) {
            return null;
        }
        const result = await prisma.token.update({
            where: {
                userId,
            },
            data: {
                tokens: {
                    decrement: tokens,
                },
            },
        });
        return result.tokens;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const updateTokens = async (tokens: number) => {
    try {
        const { userId, sessionClaims } = auth();
        if (!userId) {
            return null;
        }
        const result = await prisma.token.update({
            where: {
                userId,
            },
            data: {
                tokens:
                    sessionClaims?.metadata?.role === 'admin' && tokens === 0
                        ? 9999
                        : tokens,
            },
        });
        return result.tokens;
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};
