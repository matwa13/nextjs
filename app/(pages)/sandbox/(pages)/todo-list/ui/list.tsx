import { auth } from '@clerk/nextjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { PATHS, Route } from '@/_entities/navigation';
import { getTasks } from '@/_entities/tasks/model';
import { cn } from '@/_shared/lib';
import { Alert, Button } from '@/_shared/ui';
import { DeleteButton } from './delete-button';

export const List = async () => {
    const { userId } = auth();
    if (!userId) {
        redirect(PATHS[Route.SignIn]);
    }
    const tasks = await getTasks(userId);
    const renderContent = () => {
        if (!tasks.length) {
            return <Alert type="info">No tasks found</Alert>;
        }

        return (
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="join w-full rounded-lg border border-base-300 bg-base-200 shadow-lg"
                    >
                        <span
                            className={cn(
                                'join-item w-full p-4 text-lg capitalize',
                                {
                                    'line-through': task.completed,
                                },
                            )}
                        >
                            {task.content}
                        </span>
                        <Button asChild className="join-item h-auto w-16">
                            <Link href={`${PATHS[Route.TodoList]}/${task.id}`}>
                                edit
                            </Link>
                        </Button>
                        <DeleteButton id={task.id} />
                    </li>
                ))}
            </ul>
        );
    };

    return <div className="mt-4">{renderContent()}</div>;
};
