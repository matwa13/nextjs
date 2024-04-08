import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import { Dogs } from './ui';

export default function DogsPage() {
    const queryClient = new QueryClient();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="mx-auto grid h-full max-w-3xl grid-rows-[auto,1fr] p-4">
                <Dogs />
            </div>
        </HydrationBoundary>
    );
}
