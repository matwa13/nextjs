import * as z from 'zod';
import { validationSchema } from './model';

export type TFormValues = z.infer<typeof validationSchema>;

export type TProject = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    creatorId: string;
    name: string;
    description: string;
    teamInvolvement?: string | null;
    techStack: string[];
    domain?: string | null;
    role: string;
};
