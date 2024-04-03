import { ReactElement } from 'react';
import Link from 'next/link';
import { Route, ROUTES } from '@/_entities/navigation';
import { ThemeToggle } from '@/_widgets/navbar/ui/theme-toggle';
import { Icons } from '@/_shared/ui';

export const Navbar = (): ReactElement => {
    const renderNavItems = () => {
        return Object.entries(ROUTES).map(([route, config]) => {
            if (route === Route.Home || config.shouldHideInNav) {
                return null;
            }
            return (
                <li key={config.path}>
                    <Link href={config.path}>{config.label}</Link>
                </li>
            );
        });
    };

    const homeRoute = ROUTES[Route.Home];

    return (
        <header className="px-4">
            <nav className="navbar bg-base-100">
                <div className="flex-1">
                    <Link
                        className="btn btn-circle btn-link"
                        href={homeRoute.path}
                        title={homeRoute.label}
                    >
                        <Icons.Home className="h-8 w-9" />
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-4">
                        {renderNavItems()}
                    </ul>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
};
