'use server';

import { TDog, TNewDogPayload, TNewDogResponse } from '@/_entities/dogs/types';
import { formatErrors } from '@/_shared/lib';
import { validationSchema } from './validation';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
export const getExistingBreed = async ({ breed }: TNewDogPayload) => {
    return null;
};

export const generateBreedResponse = async (
    values: TNewDogPayload,
): Promise<TDog | null> => {
    try {
        validationSchema.dog.parse(values);

        const { breed } = values;

        const query = `Find an information about exact dog's ${breed}. If ${breed} exist, create a dog breed description.
        Once you have the description, create a response that should be in the following JSON format: 
        {
          "dog": {
            "breed": "${breed}",
            "traits": ["trait1", "trait2", "trait3"],
            "description": "short description of the breed",
            "history": "history of the breed",
            "origin": "origin of the ${breed} (country)"
            "weight": {
              "males": "average males ${breed} weight in kg",
              "females": "average females ${breed} weight in kg"
            },
            "height": {
              "males": "average males ${breed} height in cm",
              "females": "average females ${breed} height in cm"
            }
          }
        }
        If you can't find info on exact ${breed}, or ${breed} does not exist, return { "dog": null }, with no additional characters.`;

        const response = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'you are a dog breed expert' },
                { role: 'user', content: query },
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0,
        });

        if (!response.choices[0].message.content) {
            return null;
        }

        const data: TNewDogResponse = JSON.parse(
            response.choices[0].message.content,
        );

        if (!data.dog) {
            return null;
        }

        return data.dog;
    } catch (error) {
        const errors = formatErrors(error).messages;
        throw new Error(errors.join(errors[0]));
    }
};

export const createNewBreed = async (data: TDog) => {
    return null;
};
