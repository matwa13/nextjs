import { Loader } from '@/_shared/ui';

export default function Loading() {
    return (
        <div className="flex w-full items-center justify-center p-8">
            <Loader size="lg" />
        </div>
    );
}
