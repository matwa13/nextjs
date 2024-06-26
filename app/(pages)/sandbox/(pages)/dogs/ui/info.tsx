import { TDog } from '@/_entities/dogs/types';
import { Button, Heading, Loader } from '@/_shared/ui';
import { Avatar } from './avatar';

type Props = {
    isLoading?: boolean;
    data?: TDog | null;
    onReset: () => void;
};

export const Info = ({ data, onReset, isLoading }: Props) => {
    if (isLoading) {
        return <Loader size="lg" className="mx-auto my-4" />;
    }

    if (!data) {
        return null;
    }

    return (
        <div className="flex flex-col gap-4 py-8">
            <Button className="self-start" onClick={onReset}>
                Back to the List
            </Button>
            <div className="flex flex-col gap-4 sm:flex-row">
                <Heading tag="h2" className="grow capitalize">
                    {data.breed}
                </Heading>
                <Avatar breed={data.breedEng} />
            </div>
            <div className="stats stats-vertical mr-auto w-full overflow-visible bg-base-300 text-base-content shadow sm:stats-horizontal sm:w-auto">
                <div className="stat">
                    <div className="stat-title font-bold">Country</div>
                    <div className="stat-title">{data.origin}</div>
                </div>

                <div className="stat">
                    <div className="stat-title font-bold">Weight</div>
                    <div className="stat-desc text-wrap">
                        <span className="font-bold">Males: </span>
                        {data.weight.males}
                    </div>
                    <div className="stat-desc text-wrap">
                        <span className="font-bold">Females: </span>
                        {data.weight.females}
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-title font-bold">Height</div>
                    <div className="stat-desc text-wrap">
                        <span className="font-bold">Males: </span>
                        {data.height.males}
                    </div>
                    <div className="stat-desc text-wrap">
                        <span className="font-bold">Females: </span>
                        {data.height.females}
                    </div>
                </div>
            </div>
            <div>
                <Heading tag="h3">Description</Heading>
                <p>{data.description}</p>
            </div>
            <div>
                <Heading tag="h3">History</Heading>
                <p>{data.history}</p>
            </div>
            <div>
                <Heading tag="h3">Traits</Heading>
                <ul className="list-inside list-disc">
                    {data.traits.map((trait) => (
                        <li key={trait}>{trait}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
