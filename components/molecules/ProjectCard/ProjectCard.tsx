import { useState } from 'react';
import { 
    CardWrapper,
    ImageContainer,
    Pill
} from '@/components/atoms';
import { Anchor } from '@/components/molecules';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
    project: {
        name: string;
        description?: string;
        year_completed: string;
        skills_used: string[];
        url: string | null;
        github_url: string | null;
        deployed_at: string | null;
        image_url?: string;
    };
    arrowIcon: {
        rightUp: string;
    };
}

const ProjectCard = ({ project, arrowIcon }: ProjectCardProps) => {
    const [containerHoverId, setContainerHoverId] = useState<string | null>(null);
    
    // Default placeholder image for projects without images
    const defaultImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='18' font-weight='500' fill='%236b7280'%3EComing Soon%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='14' fill='%239ca3af'%3EProject Preview%3C/text%3E%3C/svg%3E";

    return (
        <CardWrapper
            setHover={(arg) => setContainerHoverId(arg)}
            redirect={project.url || project.github_url || '#'}
            cardHoverId={project.name}
        >
            <div 
                className={styles.projectCard}
                onMouseOver={() => setContainerHoverId(project.name)}
                onMouseLeave={() => setContainerHoverId(null)}
            >
                <div className={styles.cardTop}>
                    <ImageContainer 
                        imageUrl={project.image_url || defaultImage}
                        altText={project.name}
                    />
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                        <Anchor 
                            title={project.name}
                            redirect={project.url || project.github_url || '#'}
                            titleSize={'medium'}
                            iconSrc={arrowIcon.rightUp}
                            hasTextHighlight={true}
                            hasUnderline={false}
                            iconPosition={'right'}
                            hasBouncingIcon={true}
                            bounceDirection={'moveTopRight'}
                            highlightOnContainerHover={project.name === containerHoverId}
                        />
                        <div className={styles.year}>
                            {project.year_completed || 'In Progress'}
                        </div>
                    </div>
                    
                    {project.description && (
                        <p className={styles.description}>{project.description}</p>
                    )}
                    
                    {project.skills_used.length > 0 && (
                        <div className={styles.skills}>
                            {project.skills_used.map((skill: string, index: number) => (
                                <Pill 
                                    key={index}
                                    id={String(index)}
                                    skill={skill}
                                />
                            ))}
                        </div>
                    )}
                    
                    <div className={styles.links}>
                        {project.url && (
                            <Anchor 
                                title="Live Demo"
                                redirect={project.url}
                                titleSize={'small'}
                                iconSrc={arrowIcon.rightUp}
                                hasTextHighlight={true}
                                hasUnderline={false}
                                iconPosition={'right'}
                                hasBouncingIcon={false}
                            />
                        )}
                        {project.github_url && (
                            <Anchor 
                                title="GitHub"
                                redirect={project.github_url}
                                titleSize={'small'}
                                iconSrc={arrowIcon.rightUp}
                                hasTextHighlight={true}
                                hasUnderline={false}
                                iconPosition={'right'}
                                hasBouncingIcon={false}
                            />
                        )}
                        {project.deployed_at && project.deployed_at !== '-' && (
                            <span className={styles.deployedAt}>
                                Deployed on {project.deployed_at}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </CardWrapper>
    );
};

export default ProjectCard;
