import { ReactElement } from 'react';
import Link from 'next/link';
import { Route, ROUTES } from '@/_entities/navigation';
import { ThemeToggle } from '@/_widgets/navbar/ui/theme-toggle';

export const Navbar = (): ReactElement => {
    const renderNavItems = () => {
        return Object.entries(ROUTES).map(([route, config]) => {
            if (route === Route.Home) {
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
        <nav className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href={homeRoute.path}>
                    {homeRoute.label}
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-4">
                    {renderNavItems()}
                </ul>
                <ThemeToggle />
            </div>
        </nav>
    );
};
