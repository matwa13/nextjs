'use server';

import { auth } from '@clerk/nextjs';
import { formatErrors, prisma } from '@/_shared/lib';

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
        const errors = formatErrors(error).messages;
        throw new Error(errors.join(errors[0]));
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
        const errors = formatErrors(error).messages;
        throw new Error(errors.join(errors[0]));
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
        const errors = formatErrors(error).messages;
        throw new Error(errors.join(errors[0]));
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
        const errors = formatErrors(error).messages;
        throw new Error(errors.join(errors[0]));
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
        const errors = formatErrors(error).messages;
        throw new Error(errors.join(errors[0]));
    }
};
