'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form, FormField, Button, Textarea } from '@/_shared/ui';
import { validationSchema } from '@/_entities/projects/model';
import { TFormValues } from '@/_entities/projects/types';
import { TechStackInput } from './tech-stack-input';

export const CreateForm = () => {
    const form = useForm<TFormValues>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
            name: '',
            description: '',
            teamInvolvement: '',
            techStack: [],
            domain: '',
            role: '',
        },
    });

    function onSubmit(values: TFormValues) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4 pb-8 lg:grid-cols-3 lg:gap-8"
            >
                <FormField
                    control={form.control}
                    name="name"
                    label="Name"
                    description="Enter the project name (required)"
                    className="lg:order-1"
                />
                <FormField
                    control={form.control}
                    name="domain"
                    label="Domain"
                    description="Indicate the domain or industry the project relates to (optional)"
                    className="lg:order-2"
                />
                <FormField
                    control={form.control}
                    name="description"
                    label="Description"
                    tag={Textarea}
                    description="Provide a brief description of the project (required)"
                    className="lg:order-4"
                />
                <FormField
                    control={form.control}
                    name="teamInvolvement"
                    label="Team Involvement"
                    tag={Textarea}
                    description="Specify team level of involvement in the project (optional)"
                    className="lg:order-5"
                />
                <FormField
                    control={form.control}
                    name="techStack"
                    label="Tech Stack"
                    tag={TechStackInput}
                    description="List the technologies or tools used in the project (required)"
                    className="lg:order-3"
                />
                <FormField
                    control={form.control}
                    name="role"
                    label="Role"
                    tag={Textarea}
                    description="Specify your role within the project (required)"
                    className="lg:order-6"
                />
                <Button
                    type="submit"
                    className="col-span-1 lg:order-7 lg:col-span-3"
                >
                    Submit
                </Button>
            </form>
        </Form>
    );
};
