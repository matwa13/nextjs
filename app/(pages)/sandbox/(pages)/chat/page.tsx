import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import { Chat } from './ui';

export default function ChatPage() {
    const queryClient = new QueryClient();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <div className="mx-auto grid h-full max-w-3xl grid-rows-[1fr,auto] p-4">
                <Chat />
            </div>
        </HydrationBoundary>
    );
}
