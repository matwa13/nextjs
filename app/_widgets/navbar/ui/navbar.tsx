import { auth } from '@clerk/nextjs';
import { ReactElement } from 'react';
import Link from 'next/link';
import { PATHS, Route } from '@/_entities/navigation';
import { Button } from '@/_shared/ui';
import { Breadcrumbs } from '@/_widgets/breadcrumbs';
import { Drawer } from '@/_widgets/navbar/ui/drawer';
import { ThemeToggle } from './theme-toggle';
import { UserProfile } from './user-profile';
import { TokensCounter } from './tokens-counter';

export const Navbar = (): ReactElement => {
    const { userId } = auth();

    return (
        <header className="px-4">
            <nav className="navbar bg-base-100">
                <div className="flex-1">
                    <Drawer />
                </div>
                <div className="flex-none">
                    <TokensCounter />
                    <ThemeToggle />
                    <UserProfile />
                    {!userId ? (
                        <Button asChild>
                            <Link href={PATHS[Route.SignIn]}>Sign In</Link>
                        </Button>
                    ) : null}
                </div>
            </nav>
            <div className="container mx-auto">
                <Breadcrumbs />
            </div>
        </header>
    );
};
