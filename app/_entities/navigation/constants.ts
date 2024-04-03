import { TRoutes } from '@/_entities/navigation/types';

export enum Route {
    Home = 'Home',
    About = 'About',
    Contact = 'Contact',
    Sandbox = 'Sandbox',
    TodoList = 'TodoList',
}

export const PATHS: Record<Route, string> = {
    [Route.Home]: '/',
    [Route.About]: '/about',
    [Route.Contact]: '/contact',
    [Route.Sandbox]: '/sandbox',
    [Route.TodoList]: '/sandbox/todo-list',
};

export const ROUTES: TRoutes = {
    [Route.Home]: {
        path: PATHS[Route.Home],
        label: 'Home',
    },
    [Route.Sandbox]: {
        path: PATHS[Route.Sandbox],
        label: 'Sandbox',
    },
    [Route.About]: {
        path: PATHS[Route.About],
        label: 'About',
    },
    [Route.Contact]: {
        path: PATHS[Route.Contact],
        label: 'Contact',
    },
    [Route.TodoList]: {
        path: PATHS[Route.TodoList],
        label: 'Todo List',
        shouldHideInNav: true,
    },
};
