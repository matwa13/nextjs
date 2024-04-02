'use client';

import { useEffect, useRef } from 'react';
import { notification } from '@/_entities/notifications';
import { TResponse } from '@/_shared/types';

export const useFormNotifications = (
    state: TResponse,
    callbacks: {
        onSuccess?: () => void;
        onError?: () => void;
    } = {},
) => {
    const cache = useRef({
        onSuccess: callbacks.onSuccess,
        onError: callbacks.onError,
    });

    useEffect(() => {
        cache.current = {
            onSuccess: callbacks.onSuccess,
            onError: callbacks.onError,
        };
    }, [callbacks]);

    useEffect(() => {
        if (!state.messages.length) {
            return;
        }
        if (!state.ok) {
            notification.error(state.messages);
            cache.current.onError?.();
            return;
        }
        notification.success(state.messages);
        cache.current.onSuccess?.();
    }, [state]);
};
