'use client';

import { useDeferredValue, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERIES } from '@/_entities/dogs/constants';
import { TDog, TGenerateBreedPayload } from '@/_entities/dogs/types';
import {
    createNewBreed,
    generateBreedResponse,
    getExistingBreed,
} from '@/_entities/dogs/model';
import { notification } from '@/_entities/notifications';
import { useTokens, useTokensActions } from '@/_entities/tokens';
import { Info } from './info';
import { SearchForm } from './search-form';
import { List } from './list';

export const Dogs = () => {
    const { tokens } = useTokens();
    const { decreaseTokens } = useTokensActions();
    const queryClient = useQueryClient();
    const [breedInfo, setBreedInfo] = useState<TDog | null>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    const deferredSearchValue = useDeferredValue(searchValue);

    const { mutate, isPending } = useMutation({
        mutationFn: async (
            values: TGenerateBreedPayload,
        ): Promise<{
            data: TDog | null;
            tokens: number | null;
        }> => {
            const breed = values.breed.toLowerCase();
            let existingBreed: TDog | null = null;
            const cachedBreed = queryClient.getQueryData<TDog>([
                QUERIES.dog,
                breed,
            ]);
            if (cachedBreed) {
                return {
                    data: cachedBreed,
                    tokens: null,
                };
            }
            const response = await getExistingBreed({
                breedEng: breed,
            });

            if (response) {
                const { weight, height, traits, ...rest } = response;
                existingBreed = {
                    ...rest,
                    traits: traits as TDog['traits'],
                    weight: response.weight as TDog['weight'],
                    height: response.height as TDog['height'],
                };
            }

            if (Boolean(existingBreed)) {
                return {
                    data: existingBreed,
                    tokens: null,
                };
            }

            if (!tokens || tokens <= 0) {
                throw new Error('Token balance too low...');
            }

            const generatedBreedData = await generateBreedResponse({
                breed,
            });

            if (!generatedBreedData) {
                return {
                    data: null,
                    tokens: null,
                };
            }

            const { breedEng, ...rest } = generatedBreedData.data;

            const data = {
                ...rest,
                breedEng: breedEng.toLowerCase(),
            };

            const newBreed = await createNewBreed(data);
            return {
                data: newBreed as unknown as TDog,
                tokens: generatedBreedData.tokens,
            };
        },
        onError: (error) => {
            notification.error(error.message);
            setBreedInfo(null);
        },
        onSuccess: ({ data, tokens }) => {
            if (!data) {
                notification.info(
                    'No breed found, make sure to enter a valid breed and try again',
                );
                return;
            }

            if (tokens) {
                decreaseTokens(tokens);
            }
            queryClient.invalidateQueries({
                queryKey: [QUERIES.dogs],
            });
            queryClient.setQueryData([QUERIES.dog, data.breedEng], data);
            setBreedInfo(data);
        },
    });

    const handleReset = () => {
        setBreedInfo(null);
    };

    const handleChange = (value: string) => {
        setSearchValue(value);
        handleReset();
    };

    const handleSubmit = (values: TGenerateBreedPayload) => {
        mutate(values);
    };

    const handleSelect = (data: TDog) => {
        setBreedInfo(data);
    };

    return (
        <>
            <SearchForm
                onSubmit={handleSubmit}
                onChange={handleChange}
                isLoading={isPending}
            />

            {Boolean(breedInfo) ? (
                <Info
                    data={breedInfo}
                    isLoading={isPending}
                    onReset={handleReset}
                />
            ) : (
                <List
                    onSelect={handleSelect}
                    isLoading={isPending}
                    searchValue={deferredSearchValue}
                />
            )}
        </>
    );
};
