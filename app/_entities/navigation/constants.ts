import { TRoutes } from '@/_entities/navigation/types';

export enum Route {
    Home = 'Home',
    About = 'About',
    Contact = 'Contact',
}

export const ROUTES: TRoutes = {
    [Route.Home]: {
        path: '/',
        label: 'Home',
    },
    [Route.About]: {
        path: '/about',
        label: 'About',
    },
    [Route.Contact]: {
        path: '/contact',
        label: 'Contact',
    },
};
