import { Icons } from '@/_shared/ui';

type Props = {
    href: string;
    icon: (typeof Icons)[keyof typeof Icons];
};
export const SocialLink = ({ href, icon: Icon }: Props) => {
    return (
        <a href={href} className="link-hover link" target="_blank">
            <Icon round={true} size={50} />
        </a>
    );
};
