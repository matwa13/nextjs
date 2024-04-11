import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Label } from '@/_shared/ui';
import { cn } from '@/_shared/lib';
import { useFormField } from '../../lib';

const FormLabel = React.forwardRef<
    React.ElementRef<typeof LabelPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
        <Label
            ref={ref}
            className={cn(error && 'text-error', className)}
            htmlFor={formItemId}
            {...props}
        />
    );
});

FormLabel.displayName = 'FormLabel';

export { FormLabel };
