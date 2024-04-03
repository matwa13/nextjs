'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Form } from './form';
import { Messages } from './messages';
import { generateChatResponse } from '@/_entities/chat/model';
import { TChatQuery } from '@/_entities/chat/types';
import { notification } from '@/_entities/notifications';

export const Chat = () => {
    const [messages, setMessages] = useState<TChatQuery[]>([]);

    const { mutate } = useMutation({
        mutationFn: (query: TChatQuery) =>
            generateChatResponse([...messages, query]),
    });

    const addMessage = (message: TChatQuery) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const handleSubmit = (message: string) => {
        const query: TChatQuery = { role: 'user', content: message };
        addMessage(query);
        mutate(query, {
            onSuccess: (data) => {
                if (!data) {
                    return;
                }
                addMessage(data);
            },
            onError: () => {
                notification.error(['Something went wrong!!!']);
            },
        });
    };

    return (
        <>
            <Messages messages={messages} />
            <Form onSubmit={handleSubmit} />
        </>
    );
};
