'use client';

import { useMutation } from '@tanstack/react-query';
import { TNewDogPayload } from '@/_entities/dogs/types';
import { generateBreedResponse } from '@/_entities/dogs/model';
import { notification } from '@/_entities/notifications';
import { Info } from './info';
import { SearchForm } from './search-form';

export const Dogs = () => {
    const { mutate, isPending, data } = useMutation({
        mutationFn: async (values: TNewDogPayload) => {
            const newBreed = await generateBreedResponse(values);

            if (!newBreed) {
                return null;
            }

            return newBreed;
        },
        onError: (error) => {
            notification.error([error.message]);
        },
        onSuccess: (data) => {
            if (!data) {
                notification.info([
                    'No breed found, make sure to enter a valid breed and try again',
                ]);
            }
        },
    });

    return (
        <>
            <SearchForm onSubmit={mutate} isLoading={isPending} />
            <Info data={data} isLoading={isPending} />
        </>
    );
};
