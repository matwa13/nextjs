import { Button, Card, Icons } from '@/_shared/ui';
import Link from 'next/link';
import { PATHS } from '@/_entities/navigation';

export const Projects = () => {
    return (
        <div className="grid auto-rows-fr gap-2 sm:grid-cols-2 xl:grid-cols-3 xl:gap-4">
            <Card
                className="min-h-52"
                image={{
                    src: 'https://images.pexels.com/photos/6991323/pexels-photo-6991323.jpeg',
                    fill: true,
                    priority: true,
                    sizes: '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw',
                }}
            >
                <Button asChild size="lg" variant="glass" className="m-auto">
                    <Link href={PATHS.CreateProject}>
                        <Icons.Plus className="h-14 w-14" />
                        <span className="text-3xl">Add new</span>
                    </Link>
                </Button>
            </Card>
        </div>
    );
};
