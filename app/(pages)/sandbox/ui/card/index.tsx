import { Heading } from '@/_shared/ui';
import { PATHS } from '@/_entities/navigation';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    src: string;
    title: string;
    description?: string;
    route: (typeof PATHS)[keyof typeof PATHS];
};

export const Card = ({ src, title, description, route }: Props) => {
    return (
        <div className="card image-full relative w-full bg-base-100 shadow-xl">
            <figure className="relative">
                <Image
                    src={src}
                    alt={title}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
            </figure>
            <div className="card-body justify-between">
                <Heading tag="h2" className="card-title">
                    {title}
                </Heading>
                {Boolean(description) && <p>{description}</p>}
            </div>
            <Link href={route} className="absolute inset-0 z-30 opacity-0">
                {title}
            </Link>
        </div>
    );
};
