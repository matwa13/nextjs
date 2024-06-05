'use client'; // Error components must be Client Components

import { Button, Heading } from '@/_shared/ui';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex flex-col items-center gap-3">
            <Heading>Something went wrong...</Heading>
            <p>{error.message}</p>
            <Button onClick={reset}>Try again</Button>
        </div>
    );
}
