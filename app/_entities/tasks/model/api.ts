import { prisma } from '@/_shared/lib';
import { Task, Prisma } from '@prisma/client';

export const createTask = async (data: Task) => {
    return prisma.task.create({
        data: {
            ...data,
        },
    });
};

export const getTasks = async (orderBy: Prisma.SortOrder = 'desc') => {
    return prisma.task.findMany({
        orderBy: {
            createdAt: orderBy,
        },
    });
};
