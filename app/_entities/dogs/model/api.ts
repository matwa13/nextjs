import { TDog, TNewDogPayload } from '@/_entities/dogs/types';
import { notification } from '@/_entities/notifications';
import { formatErrors } from '@/_shared/lib';
import { validationSchema } from './validation';

export const getExistingBreed = async ({ breed }: TNewDogPayload) => {
    return null;
};

export const generateBreedResponse = async (values: TNewDogPayload) => {
    try {
        validationSchema.dog.parse(values);
    } catch (error) {
        notification.error(formatErrors(error).messages);
    }
    return null;
};

export const createNewBreed = async (data: TDog) => {
    return null;
};
