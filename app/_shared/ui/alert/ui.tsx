import { ReactNode } from 'react';
import { cn } from '@/_shared/lib';

type Props = {
    children: ReactNode;
    type?: 'success' | 'error' | 'warning' | 'info';
    className?: string;
};
export const Alert = ({ children, className, type }: Props) => {
    return (
        <div
            role="alert"
            className={cn('alert', className, {
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
