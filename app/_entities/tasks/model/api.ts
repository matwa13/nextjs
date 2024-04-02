'use server';

import { Task, Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
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

export const deleteTask = async (data: FormData) => {
    const id = data.get('id') as Task['id'];

    await prisma.task.delete({
        where: {
            id,
        },
    });

    revalidatePath(PATHS[Route.TodoList]);
};

export const getTask = async (id: Task['id']) => {
    return prisma.task.findUnique({
        where: {
            id,
        },
    });
};

export const updateTask = async (data: FormData) => {
    const id = data.get('id') as Task['id'];
    const content = data.get('content') as Task['content'];
    const completed = data.get('completed') === 'on';

    await prisma.task.update({
        where: {
            id,
        },
        data: {
            completed,
            content,
        },
    });

    redirect(PATHS[Route.TodoList]);
};

export const getTasks = async (orderBy: Prisma.SortOrder = 'desc') => {
    return prisma.task.findMany({
        orderBy: {
            createdAt: orderBy,
        },
    });
};
