'use client';

import { useToaster } from 'react-hot-toast/headless';
import classnames from 'classnames';

export const Notifications = () => {
    const { toasts, handlers } = useToaster();
    const { startPause, endPause, calculateOffset, updateHeight } = handlers;

    return (
        <>
            {toasts.map((toast, index) => {
                const offset = calculateOffset(toast, {
                    reverseOrder: false,
                });

                const ref = (el: HTMLDivElement) => {
                    if (el && typeof toast.height !== 'number') {
                        const height = el.getBoundingClientRect().height;
                        updateHeight(toast.id, height);
                    }
                };
                return (
                    <div
                        onMouseEnter={startPause}
                        onMouseLeave={endPause}
                        key={toast.id}
                        ref={ref}
                        className={classnames(
                            'toast toast-center toast-top z-40 p-0',
                            {
                                'pt-2': index === 0,
                            },
                        )}
                        style={{
                            transition: 'all 0.5s ease-out',
                            opacity: toast.visible ? 1 : 0,
                            top: `${offset}px`,
                        }}
                        {...toast.ariaProps}
                    >
                        <div
                            className={classnames('alert', {
                                'alert-success': toast.type === 'success',
                                'alert-error': toast.type === 'error',
                                'alert-warning': toast.type === 'custom',
                                'alert-info': toast.type === 'blank',
                            })}
                            role="alert"
                        >
                            <span>{toast.message as string}</span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
