import { Route } from '@/entities/navigation/constants';

export type TRoutes = Record<
    Route,
    {
        path: string;
        label: string;
    }
>;
