import { ComponentProps } from 'react';
import { Card } from '.';
import { Route, ROUTES } from '@/_entities/navigation';

export const cards: ComponentProps<typeof Card>[] = [
    {
        src: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg',
        description: 'The best todo app ever!',
        route: ROUTES[Route.TodoList],
    },
    {
        src: 'https://images.pexels.com/photos/18548425/pexels-photo-18548425.jpeg',
        description: 'Chat with MaxGPT!',
        route: ROUTES[Route.Chat],
    },
    {
        src: 'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg',
        description: 'Dogs Guide!',
        route: ROUTES[Route.Dogs],
    },
];
