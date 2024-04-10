'use client';

import { useAuth } from '@clerk/nextjs';
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

export const Dogs = () => {
    const queryClient = useQueryClient();
    const { userId } = useAuth();
    const { mutate, isPending, data } = useMutation({
        mutationFn: async (
            values: TGenerateBreedPayload,
        ): Promise<TDog | null> => {
            const breed = values.breed.toLowerCase();
            let existingBreed: TDog | null = null;
            const cachedBreed = queryClient.getQueryData([QUERIES.dog, breed]);
            if (cachedBreed) {
                return cachedBreed as TDog;
            }
            if (userId) {
                const response = await getExistingBreed({
                    breedEng: breed,
                    creatorId: userId,
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
            }

            if (Boolean(existingBreed)) {
                return existingBreed;
            }

            const newBreed = await generateBreedResponse({
                breed,
            });

            if (!newBreed || !userId) {
                return null;
            }

            const { breedEng, ...rest } = newBreed;

            const data = {
                ...rest,
                breedEng: breedEng.toLowerCase(),
                creatorId: userId,
            };

            await createNewBreed(data);
            return data;
        },
        onError: (error) => {
            notification.error([error.message]);
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
        },
    });

    return (
        <>
            <SearchForm onSubmit={mutate} isLoading={isPending} />
            <Info data={data} isLoading={isPending} />
        </>
    );
};
