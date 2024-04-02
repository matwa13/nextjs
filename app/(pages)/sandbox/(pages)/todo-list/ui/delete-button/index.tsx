import { deleteTask } from '@/_entities/tasks/model/api';

type Props = {
    id: string;
};

export const DeleteButton = ({ id }: Props) => {
    return (
        <form action={deleteTask}>
            <input type="hidden" name="id" value={id} />
            <button className="btn btn-secondary join-item h-full w-16">
                delete
            </button>
        </form>
    );
};
