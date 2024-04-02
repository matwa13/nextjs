import Link from 'next/link';
import { PATHS, Route } from '@/_entities/navigation';
import { Icons } from '@/_shared/ui';
import { Form } from './ui';

export default async function EditPage({ params }: { params: { id: string } }) {
    return (
        <>
            <Link
                href={PATHS[Route.TodoList]}
                className="btn btn-link gap-1 px-0"
            >
                <Icons.ChevronLeft className="h-4 w-4" />
                Back
            </Link>
            <Form id={params.id}></Form>
        </>
    );
}
