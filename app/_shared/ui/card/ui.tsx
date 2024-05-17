import Image from 'next/image';
import { ComponentProps, HTMLAttributes } from 'react';
import { cn } from '@/_shared/lib';
import { Heading } from '@/_shared/ui';

type Props = {
    image?: Omit<ComponentProps<typeof Image>, 'alt'> & { alt?: string };
    title?: string;
    description?: string;
    className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Card = ({
    className,
    image,
    title,
    description,
    children,
    ...divProps
}: Props) => {
    return (
        <div
            className={cn(
                'card relative w-full bg-base-100 shadow-xl',
                {
                    'image-full': Boolean(image),
                },
                className,
            )}
            {...divProps}
        >
            {image ? (
                <figure className="relative">
                    <Image {...image} alt={image.alt ?? title ?? ''} />
                </figure>
            ) : null}

            <div className="card-body justify-between">
                {title ? (
                    <Heading
                        tag="h2"
                        className="card-title hyphens-auto break-all capitalize"
                    >
                        {title}
                    </Heading>
                ) : null}
                {Boolean(description) && <p>{description}</p>}
                {children}
            </div>
        </div>
    );
};
