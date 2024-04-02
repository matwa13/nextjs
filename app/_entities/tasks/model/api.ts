'use server';

import { Task, Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/_shared/lib';
import { PATHS, Route } from '@/_entities/navigation';

export const createTask = async (data: FormData) => {
    const content = data.get('content') as Task['content'];

    await prisma.task.create({
        data: {
            content,
        },
    });

    revalidatePath(PATHS[Route.TodoList]);
};

export const getTasks = async (orderBy: Prisma.SortOrder = 'desc') => {
    return prisma.task.findMany({
        orderBy: {
            createdAt: orderBy,
        },
    });
};
