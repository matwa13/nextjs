import { formatErrors } from './format-errors';
import { ZodError } from 'zod';

export const getErrorMessage = (
    error: ZodError | unknown,
    shouldThrowFirstOnly = true,
): string => {
    const errors = formatErrors(error).messages;
    return shouldThrowFirstOnly ? errors[0] : errors.join(', ');
};
