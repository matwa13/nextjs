import classnames from 'classnames';
import { InputHTMLAttributes, ReactElement } from 'react';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'id'> & {
    label?: string;
};

export const Checkbox = ({
    className,
    defaultChecked,
    label,
    name,
    ...otherProps
}: Props): ReactElement => {
    const renderCheckbox = () => (
        <input
            id={name}
            type="checkbox"
            name={name}
            defaultChecked={defaultChecked}
            className={classnames('checkbox-primary checkbox', className)}
            {...otherProps}
        />
    );

    if (!label) {
        return renderCheckbox();
    }

    return (
        <div className="form-control">
            <label className="label cursor-pointer" htmlFor={name}>
                <span className="label-text">{label}</span>
                {renderCheckbox()}
            </label>
        </div>
    );
};
