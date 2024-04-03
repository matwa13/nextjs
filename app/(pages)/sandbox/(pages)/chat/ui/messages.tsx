import { TChatQuery } from '@/_entities/chat/types';
import classnames from 'classnames';
import { useUser } from '@clerk/nextjs';
import { BotAvatar } from '@/(pages)/sandbox/(pages)/chat/ui/bot-avatar';

type Props = {
    isLoading: boolean;
    messages: TChatQuery[];
};

export const Messages = ({ isLoading, messages }: Props) => {
    const { user } = useUser();

    const massagesArray = messages.concat(
        isLoading ? [{ role: 'assistant', content: '' }] : [],
    );

    const renderMessages = () => {
        return massagesArray.map(({ role, content }, index) => {
            const isUser = role == 'user';
            const userAvatar = user?.imageUrl;
            const fullName = isUser ? user?.fullName ?? '' : 'MaxGPT';
            const isBotTyping =
                !isUser && index === massagesArray.length - 1 && isLoading;
            const backgroundColor = isUser ? 'bg-accent' : 'bg-neutral';
            const textColor = isUser
                ? 'text-accent-content'
                : 'text-neutral-content';
            return (
                <div
                    key={index}
                    className={classnames('chat', {
                        'chat-start': !isUser,
                        'chat-end': isUser,
                    })}
                >
                    <div className="avatar chat-image">
                        <div className="w-10 rounded-full">
                            {isUser ? (
                                <img alt={fullName} src={userAvatar} />
                            ) : (
                                <BotAvatar />
                            )}
                        </div>
                    </div>
                    <div className="chat-header">{fullName}</div>
                    <div
                        className={classnames(
                            'chat-bubble',
                            backgroundColor,
                            textColor,
                        )}
                    >
                        {isBotTyping ? (
                            <span className="loading loading-dots loading-md" />
                        ) : (
                            content
                        )}
                    </div>
                </div>
            );
        });
    };
    return <div>{renderMessages()}</div>;
};
