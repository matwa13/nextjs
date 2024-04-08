import { z } from 'zod';

export const validationSchema = {
    dog: z.object({
        breed: z.string().trim().min(1, {
            message: 'Breed must be at least 1 character',
        }),
    }),
};
