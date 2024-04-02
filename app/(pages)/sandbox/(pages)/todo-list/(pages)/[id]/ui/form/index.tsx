import { getTask, updateTask } from '@/_entities/tasks/model/api';
import { Alert, Checkbox, Input, SubmitButton } from '@/_shared/ui';

type Props = {
    id: string;
};

export const Form = async ({ id }: Props) => {
    const task = await getTask(id);

    if (!task) {
        return <Alert type="info">Task not found</Alert>;
    }

    return (
        <div className="mt-4">
            <form action={updateTask}>
                <Input
                    defaultValue={task.content}
                    name="content"
                    placeholder="Task content"
                />
                <Checkbox
                    defaultChecked={task.completed}
                    name="completed"
                    label="Completed"
                />
                <input type="hidden" value={task.id} name="id" />
                <SubmitButton className="mt-4 w-full">Save</SubmitButton>
            </form>
        </div>
    );
};
