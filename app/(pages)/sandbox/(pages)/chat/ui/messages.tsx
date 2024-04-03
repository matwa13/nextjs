import { TChatQuery } from '@/_entities/chat/types';

type Props = {
    messages: TChatQuery[];
};

export const Messages = ({ messages }: Props) => {
    console.log(messages);
    return <div>Messages</div>;
};
