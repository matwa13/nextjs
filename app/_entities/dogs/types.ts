export type TDog = {
    breed: string;
    traits: string[];
    description: string;
    history: string;
    origin: string;
    height: {
        males: string;
        females: string;
    };
    weight: {
        males: string;
        females: string;
    };
};

export type TNewDogPayload = Pick<TDog, 'breed'>;

export type TNewDogResponse = {
    dog: TDog | null;
};
