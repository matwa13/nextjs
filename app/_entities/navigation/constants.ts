import { TRoutes } from '@/_entities/navigation/types';

export enum Route {
    Home = 'Home',
    About = 'About',
    Contact = 'Contact',
    Sandbox = 'Sandbox',
    TodoList = 'TodoList',
    SignIn = 'SignIn',
    SignUp = 'SignUp',
}

export const PATHS: Record<Route, string> = {
    [Route.Home]: '/',
    [Route.About]: '/about',
    [Route.Contact]: '/contact',
    [Route.Sandbox]: '/sandbox',
    [Route.TodoList]: '/sandbox/todo-list',
    [Route.SignIn]: '/sign-in',
    [Route.SignUp]: '/sign-up',
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
    [Route.SignIn]: {
        path: PATHS[Route.SignIn],
        label: 'Sign In',
        shouldHideInNav: true,
    },
    [Route.SignUp]: {
        path: PATHS[Route.SignUp],
        label: 'Sign Up',
        shouldHideInNav: true,
    },
};
