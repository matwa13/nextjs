export type TDog = {
    breed: string;
};

export type TNewDogPayload = Pick<TDog, 'breed'>;
