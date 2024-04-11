'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { cn } from '@/_shared/lib/';

const Label = forwardRef<
    ElementRef<typeof LabelPrimitive.Root>,
    ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <LabelPrimitive.Root ref={ref} className="label" {...props}>
        <span className={cn('label-text', className)}>{children}</span>
    </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
