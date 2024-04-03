import { Heading } from '@/_shared/ui';
import { TRoute } from '@/_entities/navigation';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    src: string;
    description?: string;
    route: TRoute;
};

export const Card = ({ src, description, route }: Props) => {
    const { label: title, path } = route;
    return (
        <div className="card image-full w-full bg-base-100 shadow-xl">
            <figure className="relative">
                <Image
                    src={src}
                    alt={title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 50vw, 25vw"
                />
            </figure>
            <div className="card-body">
                <Heading tag="h2" className="card-title">
                    {title}
                </Heading>
                {Boolean(description) && <p>{description}</p>}
                <div className="card-actions justify-end">
                    <Link href={path} className="btn btn-primary">
                        {title}
                    </Link>
                </div>
            </div>
        </div>
    );
};
