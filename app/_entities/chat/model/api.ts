'use server';

import OpenAI from 'openai';
import { TChatQuery } from '@/_entities/chat/types';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (
    messages: Array<TChatQuery>,
    maxTokens: number,
) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'you are a helpful assistant' },
                ...messages,
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0,
            max_tokens: maxTokens > 4096 ? 4096 : maxTokens,
        });
        return {
            message: response.choices[0].message,
            tokens: response.usage?.total_tokens ?? 0,
        };
    } catch (error) {
        throw new Error('Failed to generate chat response');
    }
};
