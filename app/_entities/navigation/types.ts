import { PATHS, Route } from '@/_entities/navigation/constants';

export type TRoute = {
    path: (typeof PATHS)[keyof typeof PATHS];
    label: string;
    shouldHideInNav?: boolean;
};

export type TRoutes = Record<Route, TRoute>;
