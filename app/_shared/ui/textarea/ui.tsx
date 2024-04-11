import { cn } from '@/_shared/lib/';
import { TextareaHTMLAttributes, forwardRef } from 'react';

type Props = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> & {
    isResizable?: boolean;
};

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
    ({ className, name, rows = 5, isResizable = false, ...props }, ref) => {
        return (
            <textarea
                name={name}
                id={name}
                className={cn(
                    'textarea textarea-primary block w-full',
                    className,
                    {
                        'resize-none': !isResizable,
                    },
                )}
                ref={ref}
                rows={rows}
                {...props}
            />
        );
    },
);
Textarea.displayName = 'Textarea';

export { Textarea };
