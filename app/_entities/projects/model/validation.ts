import * as z from 'zod';

export const validationSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: 'Project name must be at least 2 characters',
        })
        .max(100, {
            message: 'Project name must be at most 100 characters',
        }),
    description: z.string().min(10, {
        message: 'Description must be at least 10 characters',
    }),
    teamInvolvement: z.string().optional(),
    techStack: z.array(z.string()).min(1, {
        message: 'Tech stack must have at least 1 item',
    }),
    domain: z
        .string()
        .max(100, {
            message: 'Domain must be at most 100 characters',
        })
        .optional(),
    role: z.string().min(10, {
        message: 'Role must be at least 10 characters',
    }),
});
