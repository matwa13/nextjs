import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/_shared/lib';
import { useFormField } from '../../lib';

const FormMessage = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
    const { error, formMessageId, formDescriptionId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
        return null;
    }

    return (
        <div ref={ref} className={cn('label', className)} {...props}>
            <span
                id={formMessageId}
                className={cn('label-text-alt', {
                    'text-error': error,
                })}
            >
                {body}
            </span>
            <span id={formDescriptionId} className="sr-only">
                {children}
            </span>
        </div>
    );
});

FormMessage.displayName = 'FormMessage';

export { FormMessage };
