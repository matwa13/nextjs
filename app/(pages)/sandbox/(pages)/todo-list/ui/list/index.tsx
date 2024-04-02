import classnames from 'classnames';
import Link from 'next/link';
import { PATHS, Route } from '@/_entities/navigation';
import { getTasks } from '@/_entities/tasks/model';
import { Alert } from '@/_shared/ui';
import { DeleteButton } from '../delete-button';

export const List = async () => {
    const tasks = await getTasks();
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
                            className={classnames(
                                'join-item w-full p-4 text-lg capitalize',
                                {
                                    'line-through': task.completed,
                                },
                            )}
                        >
                            {task.content}
                        </span>
                        <Link
                            href={`${PATHS[Route.TodoList]}/${task.id}`}
                            className="btn btn-primary join-item h-auto w-16"
                        >
                            edit
                        </Link>
                        <DeleteButton id={task.id} />
                    </li>
                ))}
            </ul>
        );
    };

    return <div className="mt-4">{renderContent()}</div>;
};
