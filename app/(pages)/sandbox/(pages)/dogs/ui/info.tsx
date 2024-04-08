import { TDog } from '@/_entities/dogs/types';

type Props = {
    isLoading?: boolean;
    data?: TDog | null;
};

export const Info = ({ data, isLoading }: Props) => {
    console.log(data, isLoading);
    if (!data) {
        return null;
    }

    return (
        <>
            <h1>Info</h1>
        </>
    );
};
