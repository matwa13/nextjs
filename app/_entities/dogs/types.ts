export type TDog = {
    breed: string;
    breedEng: string;
    description: string;
    height: {
        males: string;
        females: string;
    };
    image?: string | null;
    history: string;
    language: string;
    origin: string;
    traits: string[];
    weight: {
        males: string;
        females: string;
    };
    createdAt: Date;
    updatedAt: Date;
    creatorId: string;
    id: string;
};

export type TGetBreedPayload = Pick<TDog, 'breedEng'>;

export type TGenerateBreedPayload = Pick<TDog, 'breed'>;

export type TGenerateBreedResponse = {
    dog: Omit<
        TDog,
        'id' | 'createdAt' | 'updatedAt' | 'creatorId' | 'image'
    > | null;
};

export type TCreateBreedPayload = Omit<
    TDog,
    'id' | 'createdAt' | 'updatedAt' | 'creatorId' | 'image'
>;
