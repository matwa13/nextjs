'use server';

import { getUserId } from '@/_entities/auth';
import { getErrorMessage, prisma } from '@/_shared/lib';
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
        throw new Error(getErrorMessage(error, false));
    }
};

export const getProjects = async (): Promise<TProject[]> => {
    const userId = getUserId();

    try {
        const response = await prisma.project.findMany({
            where: {
                creatorId: userId,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        return response.map((project) => ({
            ...project,
            techStack: project.techStack as TProject['techStack'],
        }));
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};
