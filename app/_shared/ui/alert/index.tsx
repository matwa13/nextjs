import classnames from 'classnames';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    type?: 'success' | 'error' | 'warning' | 'info';
    className?: string;
};
export const Alert = ({ children, className, type }: Props) => {
    return (
        <div
            role="alert"
            className={classnames('alert', className, {
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
