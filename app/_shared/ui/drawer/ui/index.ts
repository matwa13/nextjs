'use client';

import { Drawer as DrawerPrimitive } from 'vaul';
import { Drawer } from './drawer';
import { DrawerOverlay } from './overlay';
import { DrawerContent } from './content';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

export {
    Drawer,
    DrawerPortal,
    DrawerOverlay,
    DrawerTrigger,
    DrawerClose,
    DrawerContent,
};
