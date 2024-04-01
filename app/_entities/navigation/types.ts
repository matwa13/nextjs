import { Route } from '@/_entities/navigation/constants';

export type TRoute = {
    path: string;
    label: string;
    shouldHideInNav?: boolean;
};

export type TRoutes = Record<Route, TRoute>;
