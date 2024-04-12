import { CreateForm } from './ui';
import { BackButton } from '@/_shared/ui';
import { PATHS, Route } from '@/_entities/navigation';

export default function CreateNewProjectPage() {
    return (
        <>
            <BackButton path={PATHS[Route.Projects]} />
            <CreateForm />
        </>
    );
}
