import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '@/_shared/lib';

const DrawerOverlay = forwardRef<
    ElementRef<typeof DrawerPrimitive.Overlay>,
    ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DrawerPrimitive.Overlay
        ref={ref}
        className={cn('fixed inset-0 z-50 bg-black/80', className)}
        {...props}
    />
));

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

export { DrawerOverlay };
