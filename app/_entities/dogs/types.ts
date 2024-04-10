import { Dog } from '@prisma/client';

export type TDog = {
    breed: string;
    breedEng: string;
    description: string;
    height: {
        males: string;
        females: string;
    };
    history: string;
    language: string;
    origin: string;
    traits: string[];
    weight: {
        males: string;
        females: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
    creatorId?: string;
    id?: string;
};

export type TGetBreedPayload = Pick<TDog, 'breedEng'> & {
    creatorId: Dog['creatorId'];
};

export type TGenerateBreedPayload = Pick<TDog, 'breed'>;

export type TGenerateBreedResponse = {
    dog: TDog | null;
};

export type TCreateBreedPayload = TDog & {
    creatorId: Dog['creatorId'];
};
