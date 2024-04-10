import { FormEvent } from 'react';
import { TGenerateBreedPayload } from '@/_entities/dogs/types';
import { Input, SubmitButton } from '@/_shared/ui';

type Props = {
    isLoading?: boolean;
    onSubmit: (values: TGenerateBreedPayload) => void;
};

const fields: TGenerateBreedPayload = {
    breed: 'breed',
};

export const SearchForm = ({ onSubmit, isLoading }: Props) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(
            formData.entries(),
        ) as TGenerateBreedPayload;
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="join w-full">
                <Input
                    name={fields.breed}
                    placeholder="Enter dog breed"
                    className="join-item"
                    disabled={isLoading}
                />
                <SubmitButton
                    className="join-item min-w-40"
                    disabled={isLoading}
                >
                    Ask AI for breed info
                </SubmitButton>
            </div>
        </form>
    );
};
