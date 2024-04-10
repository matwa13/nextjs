import { InputHTMLAttributes, ReactElement } from 'react';
import { cn } from '@/_shared/lib';

type Props = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'id' | 'autoComplete'
>;

export const Input = ({
    className,
    name,
    placeholder,
    required = false,
    ...otherProps
}: Props): ReactElement => {
    return (
        <input
            type="text"
            name={name}
            id={name}
            className={cn('input input-primary w-full', className)}
            placeholder={placeholder}
            required={required}
            autoComplete={'off'}
            {...otherProps}
        />
    );
};
