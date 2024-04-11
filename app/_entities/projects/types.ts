import * as z from 'zod';
import { validationSchema } from './model';

export type TFormValues = z.infer<typeof validationSchema>;
