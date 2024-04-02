import classnames from 'classnames';
import { InputHTMLAttributes, ReactElement } from 'react';

type Props = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'id' | 'autoComplete'
>;

export const Input = ({
    defaultValue = '',
    className,
    name,
    placeholder,
    required = false,
    ...otherProps
}: Props): ReactElement => {
    return (
        <input
            type="text"
            name={name}
            id={name}
            defaultValue={defaultValue}
            className={classnames('input input-primary w-full', className)}
            placeholder={placeholder}
            required={required}
            autoComplete={'off'}
            {...otherProps}
        />
    );
};
