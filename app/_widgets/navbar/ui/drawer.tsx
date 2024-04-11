'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Drawer as DrawerPrimitive,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
    Button,
    Icons,
} from '@/_shared/ui';
import { ROUTES, Route, TRoute } from '@/_entities/navigation';
import { cn } from '@/_shared/lib';

export const Drawer = () => {
    const pathname = usePathname();

    const renderItems = () => {
        const generateList = (routes: Partial<Record<Route, TRoute>>) => {
            return Object.values(routes).map((config) => {
                if (config.shouldHideInNav) {
                    return null;
                }
                return (
                    <li key={config.path}>
                        <DrawerClose asChild>
                            <Link
                                href={config.path}
                                className={cn({
                                    active: pathname === config.path,
                                })}
                            >
                                {config.label}
                            </Link>
                        </DrawerClose>
                        {config.children ? (
                            <ul>{generateList(config.children)}</ul>
                        ) : null}
                    </li>
                );
            });
        };

        return generateList(ROUTES);
    };
    return (
        <DrawerPrimitive direction="left">
            <DrawerTrigger asChild>
                <Button variant="link" size="circle">
                    <Icons.Menu className="h-10 w-10" />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="grid h-screen w-screen max-w-xs grid-rows-[auto,1fr] px-4 py-2">
                    <DrawerClose asChild>
                        <Button
                            variant="link"
                            size="circle"
                            className="justify-self-end text-primary-content"
                        >
                            <Icons.Close className="h-10 w-10" />
                        </Button>
                    </DrawerClose>
                    <div className="overflow-y-auto">
                        <ul className="menu menu-lg w-full">{renderItems()}</ul>
                    </div>
                </div>
            </DrawerContent>
        </DrawerPrimitive>
    );
};
