import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Route, PATHS } from '@/_entities/navigation';

export const getUserId = (): string => {
    const { userId } = auth();

    if (!userId) {
        redirect(PATHS[Route.SignIn]);
    }

    return userId;
};
