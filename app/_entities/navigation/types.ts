import { PATHS, Route } from '@/_entities/navigation/constants';

export type TRoute = {
    path: (typeof PATHS)[keyof typeof PATHS];
    label: string;
    shouldHideInNav?: boolean;
    children?: TRoutes;
};

export type TRoutes = Partial<Record<Route, TRoute>>;
