'use server';

import OpenAI from 'openai';
import { TChatQuery } from '@/_entities/chat/types';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (messages: Array<TChatQuery>) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'you are a helpful assistant' },
                ...messages,
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0,
        });
        return response.choices[0].message;
    } catch (error) {
        throw new Error('Failed to generate chat response');
    }
};
