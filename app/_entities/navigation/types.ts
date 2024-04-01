import { Route } from '@/_entities/navigation/constants';

export type TRoutes = Record<
    Route,
    {
        path: string;
        label: string;
    }
>;
