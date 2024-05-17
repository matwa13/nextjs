import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import { Projects } from './ui';
import { getProjects, QUERIES } from '@/_entities/projects';

export default async function ProjectsPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [QUERIES.projects],
        queryFn: () => getProjects(),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Projects />
        </HydrationBoundary>
    );
}
