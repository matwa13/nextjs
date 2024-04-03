import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getTask } from '@/_entities/tasks/model';
import { PATHS, Route } from '@/_entities/navigation';
import { Icons } from '@/_shared/ui';
import { Form } from './ui';

export default async function EditPage({ params }: { params: { id: string } }) {
    const { userId } = auth();

    if (!userId) {
        redirect(PATHS[Route.SignIn]);
    }
    const task = await getTask(params.id, userId);

    return (
        <>
            <Link
                href={PATHS[Route.TodoList]}
                className="btn btn-link gap-1 px-0"
            >
                <Icons.ChevronLeft className="h-4 w-4" />
                Back
            </Link>
            <Form task={task}></Form>
        </>
    );
}
