'use client';

import { useFormState } from 'react-dom';
import { createTask } from '@/_entities/tasks/model/api';
import { Alert, Input, SubmitButton } from '@/_shared/ui';
import { TCreateTaskResponse } from '@/_entities/tasks/types';

const initialValues: TCreateTaskResponse = {
    messages: [],
    ok: true,
};

export const Form = () => {
    const [state, formAction] = useFormState<TCreateTaskResponse, FormData>(
        createTask,
        initialValues,
    );

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
            {Boolean(state.messages.length) && (
                <Alert type={state.ok ? 'success' : 'error'} className="mt-2">
                    {state.messages.join(', ')}
                </Alert>
            )}
        </form>
    );
};
