'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect } from 'react';
import { PATHS } from '@/_entities/navigation';
import { notification } from '@/_entities/notifications';
import { getProjects, QUERIES } from '@/_entities/projects';
import { Button, Card, Icons } from '@/_shared/ui';
import { ProjectCard } from './project-card';

export const Projects = () => {
    const { data, isPending, isError } = useQuery({
        queryKey: [QUERIES.projects],
        queryFn: () => getProjects(),
    });

    useEffect(() => {
        if (!isError) {
            return;
        }

        notification.error('Failed to load projects');
    }, [isError]);

    const renderContent = () => {
        if (isPending) {
            return <div className="skeleton"></div>;
        }

        if (data?.length) {
            return data.map((project) => (
                <ProjectCard project={project} key={project.id} />
            ));
        }
    };

    return (
        <div className="grid auto-rows-fr gap-2 sm:grid-cols-2 xl:grid-cols-3 xl:gap-4">
            {renderContent()}
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
