import { Card as UICard } from '@/_shared/ui';
import { PATHS } from '@/_entities/navigation';
import Link from 'next/link';

type Props = {
    src: string;
    title: string;
    description?: string;
    route: (typeof PATHS)[keyof typeof PATHS];
};

export const Card = ({ src, title, description, route }: Props) => {
    return (
        <UICard
            image={{
                src,
                fill: true,
                priority: true,
                sizes: '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw',
            }}
            title={title}
            description={description}
        >
            <Link href={route} className="absolute inset-0 z-30">
                <span className="sr-only">{title}</span>
            </Link>
        </UICard>
    );
};
