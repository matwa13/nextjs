import Link from 'next/link';
import { PATHS } from '@/_entities/navigation';
import { TProject } from '@/_entities/projects';
import { Card } from '@/_shared/ui';

type Props = {
    project: TProject;
};

export const ProjectCard = ({ project }: Props) => {
    return (
        <Card
            className="min-h-52 bg-primary text-primary-content"
            title={project.name}
        >
            <Link
                href={`${PATHS.Projects}/${project.id}`}
                className="absolute inset-0 z-30"
            />
            <div className="line-clamp-3">{project.description}</div>
        </Card>
    );
};
