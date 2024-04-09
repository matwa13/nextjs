'use client';

import classnames from 'classnames';
import { InputHTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';
import { Loader } from '@/_shared/ui';

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
            {isPending ? <Loader size="sm" type="dots" /> : children}
        </button>
    );
};
