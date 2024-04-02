import db from '@/_shared/lib/db';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    const task = await db.task.findUnique({
        where: {
            id,
        },
    });
    return NextResponse.json({ data: task });
};
