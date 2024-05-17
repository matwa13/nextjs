import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import { PATHS, Route } from '@/_entities/navigation';
import { BackButton } from '@/_shared/ui';
import { CreateForm } from './ui';

export default function CreateNewProjectPage() {
    const queryClient = new QueryClient();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <BackButton path={PATHS[Route.Projects]} />
            <CreateForm />
        </HydrationBoundary>
    );
}
