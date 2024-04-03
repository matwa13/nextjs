'use client';

import { useState } from 'react';
import { Form } from './form';
import { Messages } from './messages';

export const Chat = () => {
    const [messages, setMessages] = useState([]);

    return (
        <>
            <Messages />
            <Form />
        </>
    );
};
