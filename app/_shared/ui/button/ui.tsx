import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/_shared/lib/';
import { forwardRef } from 'react';

const buttonVariants = cva('btn', {
    variants: {
        variant: {
            default: 'btn-primary',
            neutral: 'btn-neutral',
            secondary: 'btn-secondary',
            accent: 'btn-accent',
            info: 'btn-info',
            success: 'btn-success',
            warning: 'btn-warning',
            error: 'btn-error',
            ghost: 'btn-ghost',
            link: 'btn-link',
            outline: 'btn-outline',
            glass: 'glass',
        },
        size: {
            default: 'btn-md',
            xs: 'btn-xs',
            sm: 'btn-sm',
            md: 'btn-md',
            lg: 'btn-lg',
            block: 'btn-block',
            circle: 'btn-circle',
            square: 'btn-square',
            wide: 'btn-wide',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button };
