import { getUserId } from '@/_entities/auth';
import { getTask } from '@/_entities/tasks/model';
import { PATHS, Route } from '@/_entities/navigation';
import { BackButton } from '@/_shared/ui';
import { Form } from './ui';

export default async function EditPage({ params }: { params: { id: string } }) {
    const userId = getUserId();
    const task = await getTask(params.id, userId);

    return (
        <>
            <BackButton path={PATHS[Route.TodoList]} />
            <Form task={task}></Form>
        </>
    );
}
