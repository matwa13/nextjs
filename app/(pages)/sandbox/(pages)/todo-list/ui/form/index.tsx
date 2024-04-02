'use client';

import { useFormState } from 'react-dom';
import { createTask } from '@/_entities/tasks/model/api';
import { Input, SubmitButton } from '@/_shared/ui';
import { TCreateTaskResponse } from '@/_entities/tasks/types';
import { useEffect } from 'react';
import { notification } from '@/_entities/notifications';

const initialValues: TCreateTaskResponse = {
    messages: [],
    ok: true,
};

export const Form = () => {
    const [state, formAction] = useFormState<TCreateTaskResponse, FormData>(
        createTask,
        initialValues,
    );

    useEffect(() => {
        if (!state.messages.length) {
            return;
        }
        if (!state.ok) {
            return notification.error(state.messages);
        }
        notification.success(state.messages);
    }, [state]);

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
