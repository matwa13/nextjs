import classnames from 'classnames';
import Link from 'next/link';
import { Route, ROUTES } from '@/_entities/navigation';
import { getTasks } from '@/_entities/tasks/model/api';

export const List = async () => {
    const tasks = await getTasks();
    const renderContent = () => {
        if (!tasks.length) {
            return (
                <div className="text-center text-lg font-medium">
                    No tasks to show
                </div>
            );
        }

        return (
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="mb-4 flex items-center justify-between rounded-lg border border-base-300 bg-base-200 px-6 py-4 shadow-lg"
                    >
                        <span
                            className={classnames('text-lg capitalize', {
                                'line-through': task.completed,
                            })}
                        >
                            {task.content}
                        </span>
                        <div className="flex items-center gap-6">
                            <Link
                                href={`${ROUTES[Route.TodoList].path}/${task.id}`}
                                className="btn btn-primary btn-md"
                            >
                                edit
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return <div className="mx-auto max-w-md">{renderContent()}</div>;
};
