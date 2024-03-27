import { TRoutes } from '@/entities/navigation/types';

export enum Route {
    Home = 'Home',
}

export const ROUTES: TRoutes = {
    [Route.Home]: {
        path: '/',
        label: 'Home',
    },
};
