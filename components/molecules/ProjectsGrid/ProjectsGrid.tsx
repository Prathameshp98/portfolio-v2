import { useState } from 'react';
import { ProjectCard, ProjectFilters } from '@/components/molecules';
import { Anchor } from '@/components/molecules';
import type { FilterState } from '@/components/molecules/ProjectFilters';
import styles from './ProjectsGrid.module.scss';

interface ProjectsGridProps {
    projectData: {
        page_heading?: string;
        projects?: Array<{
            name: string;
            description?: string;
            year_completed: string;
            skills_used: string[];
            url: string | null;
            github_url: string | null;
            deployed_at: string | null;
            image_url?: string;
        }>;
        data?: {
            page_heading: string;
            projects: Array<{
                name: string;
                description?: string;
                year_completed: string;
                skills_used: string[];
                url: string | null;
                github_url: string | null;
                deployed_at: string | null;
                image_url?: string;
            }>;
        };
    };
    error: any;
    arrowIcon: {
        left: string;
        rightUp: string;
    };
}

const ProjectsGrid = ({ projectData, error, arrowIcon }: ProjectsGridProps) => {
    const [filters, setFilters] = useState<FilterState>({ year: 'all', status: 'all' });

    // Only show error state if there's an actual error, not during initial loading
    if (error) {
        return (
            <div className={styles.container}>
                <div className={styles.goHome}>
                    <Anchor 
                        title="Prathamesh Patil"
                        redirect="/"
                        titleSize="large"
                        iconSrc={arrowIcon.left}
                        hasTextHighlight 
                        hasUnderline={false}
                        iconPosition="left"
                        hasBouncingIcon
                        bounceDirection="moveTopRight"
                        rotateIcon 
                    />
                </div>
                <div className={styles.errorState}>
                    <h1>Unable to load projects</h1>
                    <p>Please try again later.</p>
                </div>
            </div>
        );
    }

    // Show loading state or return null while data is loading
    if (!projectData) {
        return null;
    }

    const sortedProjects = (projectData.data?.projects || projectData.projects || []).sort((a: any, b: any) => 
        (parseInt(b.year_completed) || 0) - (parseInt(a.year_completed) || 0)
    );

    // Filter projects based on selected filters
    const filteredProjects = sortedProjects.filter((project: any) => {
        const yearMatch = filters.year === 'all' || project.year_completed === filters.year;
        
        let statusMatch = true;
        if (filters.status === 'completed') {
            statusMatch = project.year_completed && project.year_completed !== 'In Progress';
        } else if (filters.status === 'in-progress') {
            statusMatch = !project.year_completed || project.year_completed === 'In Progress';
        }
        
        return yearMatch && statusMatch;
    });

    const handleFilterChange = (newFilters: FilterState) => {
        setFilters(newFilters);
    };

    return (
        <div className={styles.container}>
            <div className={styles.goHome}>
                <Anchor 
                    title="Prathamesh Patil"
                    redirect="/"
                    titleSize="large"
                    iconSrc={arrowIcon.left}
                    hasTextHighlight 
                    hasUnderline={false}
                    iconPosition="left"
                    hasBouncingIcon
                    bounceDirection="moveTopRight"
                    rotateIcon 
                />
            </div>
            
            <div className={styles.header}>
                <h1>{projectData.data?.page_heading || projectData.page_heading}</h1>
                <p className={styles.subtitle}>
                    A collection of projects I've built over the years, showcasing different technologies and approaches.
                </p>
            </div>

            <ProjectFilters 
                projects={projectData.data?.projects || projectData.projects}
                onFilterChange={handleFilterChange}
            />

            <div className={styles.resultsInfo}>
                <p>Showing {filteredProjects.length} of {(projectData.data?.projects || projectData.projects || []).length} projects</p>
            </div>

            <div className={styles.grid}>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project: any, index: number) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            arrowIcon={arrowIcon}
                        />
                    ))
                ) : (
                    <div className={styles.noResults}>
                        <h3>No projects found</h3>
                        <p>Try adjusting your filters to see more projects.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsGrid;
