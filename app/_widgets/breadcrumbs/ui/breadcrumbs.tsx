'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { PATHS, Route, ROUTES, TRoute } from '@/_entities/navigation';

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
        const findRoute = (
            routes: Partial<Record<Route, TRoute>>,
            path: (typeof PATHS)[keyof typeof PATHS],
        ) => {
            return Object.values(routes).find((config) => config.path === path);
        };
        return routes.map((route, index) => {
            let routeConfig = findRoute(ROUTES, route);
            if (!routeConfig) {
                if (!index) {
                    return null;
                }
                const prevRoute = routes[index - 1];
                const prevRouteConfig = findRoute(ROUTES, prevRoute);
                if (!prevRouteConfig || !prevRouteConfig.children) {
                    return null;
                }
                routeConfig = findRoute(prevRouteConfig.children, route);
            }

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
                        {ROUTES[Route.Home]!.label}
                    </Link>
                </li>
                {renderBreadcrumbs()}
            </ul>
        </div>
    );
};
