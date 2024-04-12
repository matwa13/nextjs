import Link from 'next/link';
import { PATHS } from '@/_entities/navigation';
import { Button, Icons } from '@/_shared/ui';
import { cn } from '@/_shared/lib';

type Props = {
    path: (typeof PATHS)[keyof typeof PATHS];
    className?: string;
};

export const BackButton = ({ path, className }: Props) => {
    return (
        <Button asChild variant="link" className={cn('gap-1 px-0', className)}>
            <Link href={path}>
                <Icons.ChevronLeft className="h-4 w-4" />
                Back
            </Link>
        </Button>
    );
};
