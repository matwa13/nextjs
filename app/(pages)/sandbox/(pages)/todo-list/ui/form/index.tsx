import { createTask } from '@/_entities/tasks/model/api';
import { Input, SubmitButton } from '@/_shared/ui';

export const Form = () => {
    return (
        <form action={createTask}>
            <div className="join w-full">
                <Input
                    name="content"
                    placeholder="Add new task"
                    className="join-item"
                />
                <SubmitButton className="join-item min-w-40">
                    create task
                </SubmitButton>
            </div>
        </form>
    );
};
