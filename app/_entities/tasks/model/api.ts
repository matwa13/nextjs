'use server';

import { Task, Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { PATHS, Route } from '@/_entities/navigation';
import { formatErrors, prisma } from '@/_shared/lib';
import { TResponse } from '@/_shared/types';
import { validationSchema } from './validation';

export const createTask = async (
    prevData: TResponse,
    data: FormData,
): Promise<TResponse> => {
    const content = data.get('content') as Task['content'];

    try {
        validationSchema.task.parse({
            content,
        });
        await prisma.task.create({
            data: {
                content,
            },
        });

        revalidatePath(PATHS[Route.TodoList]);
        return {
            messages: ['Task created'],
            ok: true,
        };
    } catch (error) {
        return formatErrors(error);
    }
};

export const deleteTask = async (prevState: TResponse, data: FormData) => {
    const id = data.get('id') as Task['id'];

    try {
        await prisma.task.delete({
            where: {
                id,
            },
        });

        revalidatePath(PATHS[Route.TodoList]);
        return {
            messages: ['Task deleted'],
            ok: true,
        };
    } catch (error) {
        return formatErrors(error);
    }
};

export const getTask = async (id: Task['id']) => {
    return prisma.task.findUnique({
        where: {
            id,
        },
    });
};

export const updateTask = async (prevState: TResponse, data: FormData) => {
    const id = data.get('id') as Task['id'];
    const content = data.get('content') as Task['content'];
    const completed = data.get('completed') === 'on';

    try {
        validationSchema.task.parse({
            content,
            completed,
        });

        await prisma.task.update({
            where: {
                id,
            },
            data: {
                completed,
                content,
            },
        });
        // redirect does not work in server actions https://github.com/vercel/next.js/issues/58263
        // redirect(PATHS[Route.TodoList]);
        revalidatePath(PATHS[Route.TodoList]);
        return {
            messages: ['Task updated'],
            ok: true,
        };
    } catch (error) {
        return formatErrors(error);
    }
};

export const getTasks = async (orderBy: Prisma.SortOrder = 'desc') => {
    return prisma.task.findMany({
        orderBy: {
            createdAt: orderBy,
        },
    });
};
