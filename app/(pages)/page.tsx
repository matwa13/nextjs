import Image from 'next/image';
import Link from 'next/link';
import { PATHS, Route } from '@/_entities/navigation';
import { Heading, Button } from '@/_shared/ui';
import image from './ui/image.jpeg';

export default function Home() {
    return (
        <div className="hero min-h-full">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src={image.src}
                    alt="Marley"
                    className="max-w-full rounded-lg shadow-2xl"
                    width={320}
                    height={427}
                />
                <div>
                    <Heading>Hello there!</Heading>
                    <p className="py-6">
                        Welcome to Max&apos;s personal website, where creativity
                        meets technology in front-end development! As an
                        experienced front-end developer, Max brings a unique
                        blend of skills to the table, delivering stunning and
                        functional web solutions. Max&apos;s portfolio showcases
                        a range of projects highlighting expertise in UI/UX
                        design, responsive layouts, and seamless user
                        experiences. With a passion for innovation, Max
                        integrates AI technologies like GPT to enhance content
                        creation and user engagement. Explore Max&apos;s work
                        and discover how AI is shaping the future of web
                        development.
                    </p>
                    <Button size="lg" asChild>
                        <Link href={PATHS[Route.Sandbox]}>
                            Click to Explore
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
