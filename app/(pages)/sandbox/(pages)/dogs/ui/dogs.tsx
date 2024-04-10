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
import { Info } from './info';
import { SearchForm } from './search-form';
import { List } from './list';

export const Dogs = () => {
    const queryClient = useQueryClient();
    const [breedInfo, setBreedInfo] = useState<TDog | null>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    const deferredSearchValue = useDeferredValue(searchValue);

    const { mutate, isPending } = useMutation({
        mutationFn: async (
            values: TGenerateBreedPayload,
        ): Promise<TDog | null> => {
            const breed = values.breed.toLowerCase();
            let existingBreed: TDog | null = null;
            const cachedBreed = queryClient.getQueryData<TDog>([
                QUERIES.dog,
                breed,
            ]);
            if (cachedBreed) {
                return cachedBreed;
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
                return existingBreed;
            }

            const generatedBreed = await generateBreedResponse({
                breed,
            });

            if (!generatedBreed) {
                return null;
            }

            const { breedEng, ...rest } = generatedBreed;

            const data = {
                ...rest,
                breedEng: breedEng.toLowerCase(),
            };

            const newBreed = await createNewBreed(data);
            return newBreed as unknown as TDog;
        },
        onError: (error) => {
            notification.error([error.message]);
            setBreedInfo(null);
        },
        onSuccess: (data) => {
            if (!data) {
                notification.info([
                    'No breed found, make sure to enter a valid breed and try again',
                ]);
                return;
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
