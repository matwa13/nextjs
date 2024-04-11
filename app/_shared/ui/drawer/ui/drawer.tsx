import { Drawer as DrawerPrimitive } from 'vaul';
import { ComponentProps } from 'react';

const Drawer = ({
    shouldScaleBackground = true,
    ...props
}: ComponentProps<typeof DrawerPrimitive.Root>) => (
    <DrawerPrimitive.Root
        shouldScaleBackground={shouldScaleBackground}
        {...props}
    />
);
Drawer.displayName = 'Drawer';

export { Drawer };
