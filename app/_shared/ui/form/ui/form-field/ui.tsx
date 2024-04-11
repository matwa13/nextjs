import { JSXElementConstructor, ReactNode } from 'react';
import {
    Controller,
    ControllerProps,
    FieldPath,
    FieldValues,
} from 'react-hook-form';
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
} from '@/_shared/ui';
import { FormFieldContext } from '../../lib';

export const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    name,
    render,
    control,
    label,
    description,
    tag: Tag = Input,
    ...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
    render?: ControllerProps<TFieldValues, TName>['render'];
    label?: ReactNode;
    tag?: JSXElementConstructor<any>;
    description?: ReactNode;
}) => {
    return (
        <FormFieldContext.Provider value={{ name }}>
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState, formState }) => (
                    <FormItem>
                        {label ? <FormLabel>{label}</FormLabel> : null}
                        <FormControl>
                            {render ? (
                                render({ field, fieldState, formState })
                            ) : (
                                <Tag {...field} />
                            )}
                        </FormControl>
                        <FormMessage>{description}</FormMessage>
                    </FormItem>
                )}
                {...props}
            />
        </FormFieldContext.Provider>
    );
};
