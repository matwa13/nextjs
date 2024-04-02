import classnames from 'classnames';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    type?: 'success' | 'error' | 'warning' | 'info';
};
export const Alert = ({ children, type }: Props) => {
    return (
        <div
            role="alert"
            className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-error': type === 'error',
                'alert-warning': type === 'warning',
                'alert-info': type === 'info',
            })}
        >
            {children}
        </div>
    );
};
