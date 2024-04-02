'use client';

import { useFormState } from 'react-dom';
import { createTask } from '@/_entities/tasks/model';
import { Input, SubmitButton } from '@/_shared/ui';
import { useFormNotifications } from '@/_entities/notifications';
import { TResponse } from '@/_shared/types';

const initialValues: TResponse = {
    messages: [],
    ok: true,
};

export const Form = () => {
    const [state, formAction] = useFormState<TResponse, FormData>(
        createTask,
        initialValues,
    );

    useFormNotifications(state);

    return (
        <form action={formAction}>
            <div className="join w-full">
                <Input
                    name="content"
                    placeholder="Add new task"
                    className="join-item"
                />
                <SubmitButton className="join-item min-w-40">
                    create task
                </SubmitButton>
            </div>
        </form>
    );
};
