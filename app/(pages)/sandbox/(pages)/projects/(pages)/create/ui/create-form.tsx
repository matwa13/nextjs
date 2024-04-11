'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form, FormField, Button, Textarea } from '@/_shared/ui';
import { validationSchema } from '@/_entities/projects/model';
import { TFormValues } from '@/_entities/projects/types';

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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    label="Name"
                    description="Enter the project name (required)"
                />
                <FormField
                    control={form.control}
                    name="description"
                    label="Description"
                    tag={Textarea}
                    description="Provide a brief description of the project (required)"
                />
                <FormField
                    control={form.control}
                    name="teamInvolvement"
                    label="Team Involvement"
                    tag={Textarea}
                    description="Specify team level of involvement in the project (optional)"
                />
                <FormField
                    control={form.control}
                    name="techStack"
                    label="Tech Stack"
                    description="List the technologies or tools used in the project (required)"
                />
                <FormField
                    control={form.control}
                    name="domain"
                    label="Domain"
                    description="Indicate the domain or industry the project relates to (optional)"
                />
                <FormField
                    control={form.control}
                    name="role"
                    label="Role"
                    tag={Textarea}
                    description="Specify your role within the project (required)"
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};
