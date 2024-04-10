import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import { QUERIES } from '@/_entities/dogs/constants';
import { getAllBreeds } from '@/_entities/dogs/model';
import { Dogs } from './ui';

export default async function DogsPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [QUERIES.dogs, ''],
        queryFn: async () => {
            const breeds = await getAllBreeds();
            breeds.forEach((breed) => {
                queryClient.setQueryData([QUERIES.dog, breed.breedEng], breed);
            });
            return breeds;
        },
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="mx-auto grid h-full max-w-3xl grid-rows-[auto,1fr] p-4">
                <Dogs />
            </div>
        </HydrationBoundary>
    );
}
