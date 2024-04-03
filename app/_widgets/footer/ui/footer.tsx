import { SocialLink } from './social-link';
import { socialLinks } from '../constants';

export const Footer = () => {
    return (
        <footer className="footer items-center bg-neutral p-4 text-neutral-content">
            <aside className="grid-flow-col items-center">
                <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                {socialLinks.map(({ href, icon }) => (
                    <SocialLink key={href} href={href} icon={icon} />
                ))}
            </nav>
        </footer>
    );
};
