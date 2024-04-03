import { ChangeEvent, FormEvent, useState } from 'react';
import { Input, SubmitButton } from '@/_shared/ui';

type Props = {
    onSubmit: (message: string) => void;
};

export const Form = ({ onSubmit }: Props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(value);
        setValue('');
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full pt-8">
            <div className="join w-full">
                <Input
                    value={value}
                    placeholder="Message MaxGPT..."
                    className="join-item"
                    onChange={handleChange}
                />
                <SubmitButton className="join-item">ask question</SubmitButton>
            </div>
        </form>
    );
};
