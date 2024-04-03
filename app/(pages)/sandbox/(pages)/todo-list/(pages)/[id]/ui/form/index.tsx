'use client';

import { Task } from '@prisma/client';
import { useFormState } from 'react-dom';
import { useFormNotifications } from '@/_entities/notifications';
import { updateTask } from '@/_entities/tasks/model';
import { TResponse } from '@/_shared/types';
import { Alert, Checkbox, Input, SubmitButton } from '@/_shared/ui';
import { redirect } from 'next/navigation';
import { PATHS, Route } from '@/_entities/navigation';

type Props = {
    task: Task | null;
};

const initialValues: TResponse = {
    messages: [],
    ok: true,
};

export const Form = ({ task }: Props) => {
    const [state, formAction] = useFormState<TResponse, FormData>(
        updateTask,
        initialValues,
    );

    useFormNotifications(state, {
        onSuccess: () => {
            // redirect does not work in server actions https://github.com/vercel/next.js/issues/58263
            redirect(PATHS[Route.TodoList]);
        },
    });

    if (!task) {
        return <Alert type="info">Task not found</Alert>;
    }

    return (
        <div className="mt-4">
            <form action={formAction}>
                <Input
                    defaultValue={task.content}
                    name="content"
                    placeholder="Task content"
                />
                <Checkbox
                    defaultChecked={task.completed}
                    name="completed"
                    label="Completed"
                />
                <input type="hidden" value={task.id} name="id" />
                <input type="hidden" value={task.creatorId} name="creatorId" />
                <SubmitButton className="mt-4 w-full">Save</SubmitButton>
            </form>
        </div>
    );
};
