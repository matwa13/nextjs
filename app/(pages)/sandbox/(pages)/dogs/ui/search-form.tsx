import { FormEvent, useState } from 'react';
import { TGenerateBreedPayload } from '@/_entities/dogs/types';
import { Input, SubmitButton } from '@/_shared/ui';

type Props = {
    isLoading?: boolean;
    onSubmit: (values: TGenerateBreedPayload) => void;
    onChange: (value: string) => void;
};

const fields: TGenerateBreedPayload = {
    breed: 'breed',
};

export const SearchForm = ({ onSubmit, onChange, isLoading }: Props) => {
    const [value, setValue] = useState('');
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(
            formData.entries(),
        ) as TGenerateBreedPayload;
        onSubmit(values);
    };

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setValue(value);
        onChange(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="join join-vertical w-full sm:join-horizontal">
                <Input
                    name={fields.breed}
                    placeholder="Enter dog breed"
                    className="join-item"
                    disabled={isLoading}
                    onChange={handleChange}
                    value={value}
                />
                <SubmitButton
                    className="join-item min-w-40"
                    disabled={isLoading}
                >
                    Ask AI for breed info or choose an existing breed in the
                    list
                </SubmitButton>
            </div>
        </form>
    );
};
