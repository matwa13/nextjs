import image from './owl-avatar.jpg';
import Image from 'next/image';
export const BotAvatar = () => {
    return <Image src={image.src} alt="bot avatar" width={40} height={40} />;
};
