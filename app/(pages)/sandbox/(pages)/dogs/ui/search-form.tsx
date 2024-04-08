'use client';

import { useMutation } from '@tanstack/react-query';
import { FormEvent } from 'react';
import { generateBreedResponse } from '@/_entities/dogs/model';
import { TNewDogPayload } from '@/_entities/dogs/types';
import { notification } from '@/_entities/notifications';
import { Input, SubmitButton } from '@/_shared/ui';
import { formatErrors } from '@/_shared/lib';

const fields: TNewDogPayload = {
    breed: 'breed',
};

export const SearchForm = () => {
    const { mutate, isPending } = useMutation({
        mutationFn: async (values: TNewDogPayload) => {
            const newBreed = await generateBreedResponse(values);

            if (!newBreed) {
                return null;
            }

            return newBreed;
        },
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries()) as TNewDogPayload;
        mutate(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="join w-full">
                <Input
                    name={fields.breed}
                    placeholder="Enter dog breed"
                    className="join-item"
                />
                <SubmitButton
                    className="join-item min-w-40"
                    disabled={isPending}
                >
                    Find Dog
                </SubmitButton>
            </div>
        </form>
    );
};
