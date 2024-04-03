import { UserButton } from '@clerk/nextjs';
import { PATHS, Route } from '@/_entities/navigation';

export const UserProfile = async () => {
    return (
        <div className="ml-4">
            <UserButton afterSignOutUrl={PATHS[Route.Home]} />
        </div>
    );
};
