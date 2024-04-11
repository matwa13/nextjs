import { ComponentProps } from 'react';
import { Card } from '.';
import { Route, ROUTES } from '@/_entities/navigation';

export const cards: ComponentProps<typeof Card>[] = [
    {
        src: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg',
        title: 'The best todo app ever!',
        description:
            'The best todo app is a user-friendly and intuitive tool that helps you stay organized, prioritize tasks, and increase productivity',
        route: ROUTES[Route.TodoList],
    },
    {
        src: 'https://images.pexels.com/photos/18548425/pexels-photo-18548425.jpeg',
        title: 'Chat with MaxGPT!',
        description:
            'MaxGPT chat bot is a versatile and intelligent virtual assistant designed to provide quick and accurate responses to a wide range of inquiries, making interactions seamless and efficient for users.',
        route: ROUTES[Route.Chat],
    },
    {
        src: 'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg',
        title: 'AI Dogs Guide!',
        description:
            'The AI Dogs Guide is a valuable tool for accessing detailed information about different dog breeds from the internet, providing dog owners with essential insights to better understand and care for their furry companions.',
        route: ROUTES[Route.Dogs],
    },
    {
        src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
        title: 'Manage Your Projects!',
        description:
            "Add new projects or edit existing ones with ease! Whether it's showcasing your latest work or updating project details, this feature puts you in control. Stay organized and keep your portfolio up-to-date effortlessly, ensuring that your achievements are always presented accurately and attractively.",
        route: ROUTES[Route.Projects],
    },
];
