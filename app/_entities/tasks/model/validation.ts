import { z } from 'zod';

export const validationSchema = {
    task: z.object({
        content: z.string().min(5).max(100),
        completed: z.boolean().optional(),
    }),
};
