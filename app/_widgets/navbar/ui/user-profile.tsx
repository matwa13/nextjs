import { UserButton } from '@clerk/nextjs';

export const UserProfile = async () => {
    return (
        <div className="ml-4">
            <UserButton afterSignOutUrl="/" />
        </div>
    );
};
