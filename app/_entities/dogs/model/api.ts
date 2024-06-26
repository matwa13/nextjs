'use server';

import { auth } from '@clerk/nextjs';
import { Prisma } from '@prisma/client';
import axios from 'axios';
import {
    TCreateBreedPayload,
    TDog,
    TGenerateBreedPayload,
    TGenerateBreedResponse,
    TGetBreedPayload,
} from '@/_entities/dogs/types';
import { getErrorMessage, prisma } from '@/_shared/lib';
import { validationSchema } from './validation';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
export const getExistingBreed = async ({ breedEng }: TGetBreedPayload) => {
    const { userId } = auth();
    if (!userId) {
        throw new Error('Unauthorized');
    }

    try {
        validationSchema.dog.parse({
            breed: breedEng,
        });

        return await prisma.dog.findUnique({
            where: { breedEng_creatorId: { breedEng, creatorId: userId } },
        });
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const generateBreedResponse = async (
    values: TGenerateBreedPayload,
): Promise<{
    data: Omit<TDog, 'id' | 'creatorId' | 'createdAt' | 'updatedAt' | 'image'>;
    tokens: number;
} | null> => {
    try {
        validationSchema.dog.parse(values);

        const { breed } = values;

        const query = `Detect the language of the query. Find an information about exact dog's ${breed}. Try to guess what breed user means and correct user's typos if needed. If ${breed} exist, create a dog breed description in user's language.
        Once you have the description, create a response that should be in the following JSON format and in user's language: 
        {
          "dog": {
            "language": "user query language",
            "breedEng": "correct ${breed} in English",
            "breed": "correct ${breed} in user's language",
            "traits": ["trait1", "trait2", "trait3"] in user's language,
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

        const data: TGenerateBreedResponse = JSON.parse(
            response.choices[0].message.content,
        );

        if (!data.dog) {
            return null;
        }

        return {
            data: data.dog,
            tokens: response.usage?.total_tokens ?? 0,
        };
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const createNewBreed = async (data: TCreateBreedPayload) => {
    const { userId } = auth();
    if (!userId) {
        throw new Error('Unauthorized');
    }

    try {
        const existingBreed = await prisma.dog.findUnique({
            where: {
                breedEng_creatorId: {
                    breedEng: data.breedEng,
                    creatorId: userId,
                },
            },
        });

        if (existingBreed) {
            return await prisma.dog.update({
                where: { id: existingBreed.id },
                data: {
                    ...data,
                },
            });
        } else {
            return await prisma.dog.create({
                data: {
                    ...data,
                    creatorId: userId,
                },
            });
        }
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const getAllBreeds = async (options?: {
    query?: string;
    orderBy?: Prisma.SortOrder;
}) => {
    const { userId } = auth();
    const { orderBy, query } = options || { orderBy: 'asc' };
    try {
        if (!userId) {
            return [];
        }

        return await prisma.dog.findMany({
            where: {
                creatorId: userId,
                ...(query && {
                    OR: [
                        {
                            breed: {
                                contains: query,
                            },
                        },
                        {
                            breedEng: {
                                contains: query,
                            },
                        },
                        {
                            origin: {
                                contains: query,
                            },
                        },
                    ],
                }),
            },
            orderBy: {
                breedEng: orderBy,
            },
        });
    } catch (error) {
        throw new Error(getErrorMessage(error));
    }
};

export const generateImage = async (breed: string, useAI = true) => {
    try {
        let src;
        if (useAI) {
            const response = await openai.images.generate({
                prompt: `a full length photo of the ${breed}`,
                n: 1,
                size: '512x512',
            });
            src = response?.data[0]?.url;
        } else {
            const { data } = await axios(
                `https://api.unsplash.com/search/photos?query=${breed}`,
                {
                    headers: {
                        Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
                    },
                },
            );
            src = data?.results[0]?.urls?.regular;
        }

        return src;
    } catch (error) {
        return null;
    }
};
