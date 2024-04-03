import db from '@/_shared/lib/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
    const tasks = await db.task.findMany();
    return Response.json({ data: tasks });
    // return NextResponse.json({ data: tasks });
};

export const POST = async (request: Request) => {
    const data = await request.json();
    const task = await db.task.create({
        data: {
            content: data.content,
            creatorId: data.creatorId,
        },
    });
    return NextResponse.json({ data: task });
};

// update task
export const PUT = async (request: Request) => {
    const data = await request.json();
    const task = await db.task.update({
        where: {
            id: data.id,
        },
        data: {
            content: data.content,
            completed: data.completed,
        },
    });
    return NextResponse.json({ data: task });
};
