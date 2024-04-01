import { TRoutes } from '@/_entities/navigation/types';

export enum Route {
    Home = 'Home',
    About = 'About',
    Contact = 'Contact',
    Sandbox = 'Sandbox',
    TodoList = 'TodoList',
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
    [Route.Sandbox]: {
        path: '/sandbox',
        label: 'Sandbox',
    },
    [Route.TodoList]: {
        path: '/sandbox/todo-list',
        label: 'Todo List',
        shouldHideInNav: true,
    },
};
