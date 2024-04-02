import { ZodError } from 'zod';

export const formatErrors = (
    error: ZodError | unknown,
): {
    ok: false;
    messages: string[];
} => {
    if (error instanceof ZodError) {
        return {
            ok: false,
            messages: error.errors.map((error) => error.message),
        };
    }

    return {
        ok: false,
        messages: ['Something went wrong. Please try again.'],
    };
};
