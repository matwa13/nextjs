'use client';

import { deleteTask } from '@/_entities/tasks/model';
import { useFormState } from 'react-dom';
import { TResponse } from '@/_shared/types';
import { useFormNotifications } from '@/_entities/notifications';
import { SubmitButton } from '@/_shared/ui';

type Props = {
    id: string;
};

const initialValues: TResponse = {
    messages: [],
    ok: true,
};

export const DeleteButton = ({ id }: Props) => {
    const [state, formAction] = useFormState<TResponse, FormData>(
        deleteTask,
        initialValues,
    );

    useFormNotifications(state);

    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={id} />
            <SubmitButton className="btn-secondary join-item h-full w-16">
                delete
            </SubmitButton>
        </form>
    );
};
