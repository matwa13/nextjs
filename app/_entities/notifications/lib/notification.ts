import toast from 'react-hot-toast/headless';

export const notification = {
    success: (messages: string[] | string) => {
        if (typeof messages === 'string') {
            toast.success(messages);
            return;
        }
        messages.forEach((message) => {
            toast.success(message);
        });
    },
    error: (messages: string[] | string) => {
        if (typeof messages === 'string') {
            toast.error(messages);
            return;
        }
        messages.forEach((message) => {
            toast.error(message);
        });
    },
    info: (messages: string[] | string) => {
        if (typeof messages === 'string') {
            toast(messages);
            return;
        }
        messages.forEach((message) => {
            toast(message);
        });
    },
    warning: (messages: string[] | string) => {
        if (typeof messages === 'string') {
            toast.custom(messages);
            return;
        }
        messages.forEach((message) => {
            toast.custom(message);
        });
    },
};
