'use client';

import { ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';
import { Button, Loader } from '@/_shared/ui';

type Props = Omit<ComponentProps<typeof Button>, 'type'>;

export const SubmitButton = ({ children, disabled, ...otherProps }: Props) => {
    const { pending: isPending } = useFormStatus();

    return (
        <Button disabled={isPending || disabled} type="submit" {...otherProps}>
            {isPending ? <Loader size="sm" type="dots" /> : children}
        </Button>
    );
};
