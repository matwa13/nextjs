import { useQuery } from '@tanstack/react-query';
import NextImage from 'next/image';
import { QUERIES } from '@/_entities/dogs/constants';
import { generateImage } from '@/_entities/dogs/model';

type Props = {
    breed: string;
};

export const Image = ({ breed }: Props) => {
    const { data: src, isPending } = useQuery({
        queryKey: [QUERIES.dogImage, breed],
        queryFn: async () => {
            // generated AI images are valid only for 2 hours so no need to save them in DB
            return await generateImage(breed, false);
        },
        enabled: Boolean(breed),
    });

    return (
        <div className="skeleton h-64 w-64 overflow-hidden shadow-2xl">
            {Boolean(src) ? (
                <div className="avatar">
                    <div>
                        <NextImage
                            src={src}
                            alt={breed}
                            width={256}
                            height={256}
                            priority
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
};
