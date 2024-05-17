'use server';

import { getUserId } from '@/_entities/auth';
import { formatErrors, prisma } from '@/_shared/lib';
import { TFormValues, TProject } from '../types';
import { validationSchema } from './validation';

export const createProject = async (values: TFormValues): Promise<TProject> => {
    const userId = getUserId();

    try {
        validationSchema.parse(values);
        const response = await prisma.project.create({
            data: {
                ...values,
                creatorId: userId,
            },
        });

        return {
            ...response,
            techStack: response.techStack as TProject['techStack'],
        };
    } catch (error) {
        const errors = formatErrors(error).messages;
        throw new Error(errors.join(errors[0]));
    }
};
