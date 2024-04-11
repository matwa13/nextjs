import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/_shared/lib/';

type Props = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'id' | 'autoComplete'
>;

const Input = forwardRef<HTMLInputElement, Props>(
    ({ className, required = false, name, ...props }, ref) => {
        return (
            <input
                ref={ref}
                type="text"
                name={name}
                id={name}
                className={cn('input input-primary w-full', className)}
                required={required}
                autoComplete={'off'}
                {...props}
            />
        );
    },
);
Input.displayName = 'Input';

export { Input };
