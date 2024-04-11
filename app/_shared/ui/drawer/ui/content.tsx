import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { DrawerOverlay, DrawerPortal } from '@/_shared/ui';
import { cn } from '@/_shared/lib';

const DrawerContent = forwardRef<
    ElementRef<typeof DrawerPrimitive.Content>,
    ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DrawerPortal>
        <DrawerOverlay />
        <DrawerPrimitive.Content
            ref={ref}
            className={cn(
                'fixed inset-y-0 left-0 z-50 flex w-auto flex-col bg-primary',
                className,
            )}
            {...props}
        >
            {children}
        </DrawerPrimitive.Content>
    </DrawerPortal>
));

DrawerContent.displayName = 'DrawerContent';

export { DrawerContent };
