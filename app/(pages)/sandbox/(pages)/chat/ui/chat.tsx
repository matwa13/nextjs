'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { Form } from './form';
import { Messages } from './messages';
import { generateChatResponse } from '@/_entities/chat/model';
import { TChatQuery } from '@/_entities/chat/types';
import { notification } from '@/_entities/notifications';
import { useTokens, useTokensActions } from '@/_entities/tokens';

export const Chat = () => {
    const { tokens } = useTokens();
    const { decreaseTokens } = useTokensActions();
    const [messages, setMessages] = useState<TChatQuery[]>([]);

    const { mutate, isPending } = useMutation({
        mutationFn: (query: TChatQuery) => {
            if (!tokens || tokens <= 0) {
                throw new Error('Token balance too low...');
            }
            return generateChatResponse([...messages, query], Number(tokens));
        },
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

                decreaseTokens(data.tokens);
                addMessage(data.message);
            },
            onError: (error) => {
                notification.error(error.message);
            },
        });
    };

    return (
        <>
            <Messages messages={messages} isLoading={isPending} />
            <Form onSubmit={handleSubmit} isLoading={isPending} />
        </>
    );
};
