'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { PATHS, Route, ROUTES } from '@/_entities/navigation';

export const Breadcrumbs = () => {
    const pathname = usePathname();

    const routes = useMemo(() => {
        const paths = pathname.split('/').filter(Boolean);
        return paths.map((path, index) => {
            return `/${paths.slice(0, index + 1).join('/')}`;
        });
    }, [pathname]);

    if (
        !routes.length ||
        [PATHS[Route.SignIn], PATHS[Route.SignUp]].includes(routes[0])
    ) {
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
                    <Link href={PATHS[Route.Home]}>
                        {ROUTES[Route.Home].label}
                    </Link>
                </li>
                {renderBreadcrumbs()}
            </ul>
        </div>
    );
};
