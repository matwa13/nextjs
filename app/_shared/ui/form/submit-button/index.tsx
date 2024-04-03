'use client';

import classnames from 'classnames';
import { InputHTMLAttributes, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

type Props = Omit<InputHTMLAttributes<HTMLButtonElement>, 'type'>;

export const SubmitButton = ({
    children,
    className,
    disabled,
    ...otherProps
}: Props) => {
    const { pending: isPending } = useFormStatus();

    return (
        <button
            disabled={isPending || disabled}
            type="submit"
            className={classnames('btn btn-primary', className)}
            {...otherProps}
        >
            {isPending ? (
                <span className="loading loading-dots loading-sm"></span>
            ) : (
                children
            )}
        </button>
    );
};
