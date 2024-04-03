import { ChangeEvent, FormEvent, useState } from 'react';
import { Icons, Input, SubmitButton } from '@/_shared/ui';

type Props = {
    onSubmit: (message: string) => void;
    isLoading: boolean;
};

export const Form = ({ isLoading, onSubmit }: Props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(value);
        setValue('');
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const isDisabled = !value.trim().length || isLoading;
    return (
        <form onSubmit={handleSubmit} className="w-full pt-8">
            <div className="join w-full">
                <Input
                    value={value}
                    placeholder="Message MaxGPT..."
                    className="join-item"
                    onChange={handleChange}
                />
                <SubmitButton className="join-item" disabled={isDisabled}>
                    <Icons.PaperAirplane className="h-10 w-10 -rotate-90" />
                </SubmitButton>
            </div>
        </form>
    );
};
