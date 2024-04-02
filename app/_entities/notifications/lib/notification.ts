import toast from 'react-hot-toast/headless';

export const notification = {
    success: (messages: string[]) => {
        messages.forEach((message) => {
            toast.success(message);
        });
    },
    error: (messages: string[]) => {
        messages.forEach((message) => {
            toast.error(message);
        });
    },
    info: (messages: string[]) => {
        messages.forEach((message) => {
            toast(message);
        });
    },
    warning: (messages: string[]) => {
        messages.forEach((message) => {
            toast.custom(message);
        });
    },
};
