import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERIES } from '@/_entities/dogs/constants';
import { getAllBreeds } from '@/_entities/dogs/model';
import { TDog } from '@/_entities/dogs/types';
import { Alert, Heading, Loader } from '@/_shared/ui';
import classnames from 'classnames';

type Props = {
    onSelect: (data: TDog) => void;
    isLoading?: boolean;
    searchValue: string;
};

export const List = ({ onSelect, isLoading, searchValue }: Props) => {
    const queryClient = useQueryClient();
    const { data, isPending, dataUpdatedAt } = useQuery({
        queryKey: [QUERIES.dogs, searchValue],
        queryFn: async () => {
            const breeds = await getAllBreeds({
                query: searchValue,
            });
            breeds.forEach((breed) => {
                queryClient.setQueryData([QUERIES.dog, breed.breedEng], breed);
            });
            return breeds;
        },
        placeholderData: (previousData, _) => previousData,
    });

    const handleSelect = (data: TDog) => () => {
        if (isLoading) {
            return;
        }
        onSelect(data);
    };

    const isPreviousData = !dataUpdatedAt;

    const renderContent = () => {
        if (isPending || !data) {
            return <Loader size="lg" className="m-4 mx-auto" />;
        }

        if (!data.length) {
            return (
                <Alert type="info">
                    Nothing found. Ask AI to generate information about this
                    breed
                </Alert>
            );
        }

        return (
            <div
                className={classnames(
                    'grid auto-rows-fr gap-4 md:grid-cols-2',
                    {
                        'opacity-50': isPreviousData,
                    },
                )}
            >
                {data.map((dog) => (
                    <div
                        key={dog.breed}
                        className={classnames('card bg-base-100 shadow-xl', {
                            'cursor-pointer': !isPreviousData && !isLoading,
                        })}
                        onClick={handleSelect(dog as unknown as TDog)}
                    >
                        <div className="card-body">
                            <Heading tag="h2" className="card-title capitalize">
                                {dog.breed}
                            </Heading>
                            <p>{dog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    return <div className="py-8">{renderContent()}</div>;
};
