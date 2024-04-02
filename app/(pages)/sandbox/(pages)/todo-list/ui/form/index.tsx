import { createTask } from '@/_entities/tasks/model/api';
import { SubmitButton } from '@/_shared/ui';

export const Form = () => {
    return (
        <form action={createTask}>
            <div className="join w-full">
                <input
                    className="input join-item input-bordered w-full"
                    placeholder="Add new task"
                    type="text"
                    name="content"
                    required
                    autoComplete={'off'}
                />
                <SubmitButton className="join-item min-w-40">
                    create task
                </SubmitButton>
            </div>
        </form>
    );
};
