import db from '@/_shared/lib/db';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();
    const creatorId = url.searchParams.get('creatorId');

    if (!id || !creatorId) {
        return NextResponse.error();
    }

    const task = await db.task.findUnique({
        where: {
            id,
            creatorId,
        },
    });
    return NextResponse.json({ data: task });
};
