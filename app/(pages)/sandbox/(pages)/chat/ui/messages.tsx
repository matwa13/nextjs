import Image from 'next/image';
import { useUser } from '@clerk/nextjs';
import { TChatQuery } from '@/_entities/chat/types';
import { cn } from '@/_shared/lib';
import { Loader } from '@/_shared/ui';
import { BotAvatar } from './bot-avatar';

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
                    className={cn('chat', {
                        'chat-start': !isUser,
                        'chat-end': isUser,
                    })}
                >
                    <div className="avatar chat-image">
                        <div className="w-10 rounded-full">
                            {isUser && userAvatar ? (
                                <Image
                                    src={userAvatar}
                                    alt={fullName}
                                    width={40}
                                    height={40}
                                />
                            ) : (
                                <BotAvatar />
                            )}
                        </div>
                    </div>
                    <div className="chat-header">{fullName}</div>
                    <div
                        className={cn(
                            'chat-bubble',
                            backgroundColor,
                            textColor,
                        )}
                    >
                        {isBotTyping ? <Loader type="dots" /> : content}
                    </div>
                </div>
            );
        });
    };
    return <div className="overflow-y-auto">{renderMessages()}</div>;
};
