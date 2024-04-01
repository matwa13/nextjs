import { ComponentProps } from 'react';
import { Card } from '.';
import { Route, ROUTES } from '@/_entities/navigation';

export const cards: ComponentProps<typeof Card>[] = [
    {
        src: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg',
        description: 'The best todo list app ever!',
        route: ROUTES[Route.TodoList],
    },
];
