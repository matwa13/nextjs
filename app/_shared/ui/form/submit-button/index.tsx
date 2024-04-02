'use client';

import classnames from 'classnames';
import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

type Props = {
    children: ReactNode;
    className?: string;
};
export const SubmitButton = ({ children, className }: Props) => {
    const { pending: isPending } = useFormStatus();

    return (
        <button
            disabled={isPending}
            type="submit"
            className={classnames('btn btn-primary', className)}
        >
            {isPending ? (
                <span className="loading loading-dots loading-sm"></span>
            ) : (
                children
            )}
        </button>
    );
};
