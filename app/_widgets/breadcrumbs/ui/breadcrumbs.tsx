'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { Route, ROUTES } from '@/_entities/navigation';

export const Breadcrumbs = () => {
    const pathname = usePathname();

    const routes = useMemo(() => {
        const paths = pathname.split('/').filter(Boolean);
        return paths.map((path, index) => {
            return `/${paths.slice(0, index + 1).join('/')}`;
        });
    }, [pathname]);

    if (!routes.length) {
        return null;
    }

    const renderBreadcrumbs = () => {
        return routes.map((route, index) => {
            const routeConfig = Object.values(ROUTES).find(
                (config) => config.path === route,
            );
            if (!routeConfig) {
                return null;
            }

            return (
                <li key={routeConfig.path}>
                    {index < routes.length - 1 ? (
                        <Link href={routeConfig.path}>{routeConfig.label}</Link>
                    ) : (
                        <span>{routeConfig.label}</span>
                    )}
                </li>
            );
        });
    };

    return (
        <div className="breadcrumbs text-sm">
            <ul>
                <li>
                    <Link href={ROUTES[Route.Home].path}>
                        {ROUTES[Route.Home].label}
                    </Link>
                </li>
                {renderBreadcrumbs()}
            </ul>
        </div>
    );
};
