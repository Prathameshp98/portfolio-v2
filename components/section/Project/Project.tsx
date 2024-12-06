import { useState } from 'react';
import { useDataContext } from '@/context/consumption/useContext';
import { 
    CardWrapper,
    ImageContainer,
    Pill
} from '@/components/atoms';
import { Anchor } from '@/components/molecules';
import styles from './Project.module.scss';

const Project = () => {

    const[containerHoverId, setContainerHoverId] = useState<string | null>(null);
    const {
        data
    } = useDataContext();
    const project = data.project;
    const icons = data.icon[0].icons;
    const featuredProjects = data.project.projects.filter((each: any) => each.is_featured == true);

    return (
        <div 
            id="PROJECTS"
            className={styles.project}
        >
            <h2>{project.heading}</h2>
            <div className={styles.cards}>
                {featuredProjects.map((each: any, index: number) => (
                    <CardWrapper
                        key={index}
                        setHover={(arg) => setContainerHoverId(arg)}
                        redirect={each.url}
                        cardHoverId={each.name}
                    >
                        <div 
                            className={styles.projectCard}
                            onMouseOver={() => setContainerHoverId(each.name)}
                            onMouseLeave={() => setContainerHoverId(null)}
                        >
                            <div className={styles.cardLeft}>
                                <ImageContainer 
                                    imageUrl={each.image_url}
                                    altText={each.name}
                                />
                            </div>
                            <div className={styles.cardRight}>
                                <Anchor 
                                    title={each.name}
                                    redirect={each.url}
                                    titleSize={'medium'}
                                    iconSrc={icons[0].svg}
                                    hasTextHighlight={true}
                                    hasUnderline={false}
                                    iconPosition={'right'}
                                    hasBouncingIcon={true}
                                    bounceDirection={'moveTopRight'}
                                    highlightOnContainerHover={each.name === containerHoverId}
                                />
                                <h6>{each.description}</h6>
                                {each.skills_used.length ?
                                    <div className={styles.skills}>
                                        {each.skills_used.map((_: any, index: number) => (
                                            <Pill 
                                                key={index}
                                                id={String(index)}
                                                skill={each.skills_used[index]}
                                            />
                                        ))}
                                    </div>
                                : null}   
                            </div>
                        </div>
                    </CardWrapper>
                ))}
            </div>
            <div>
                <Anchor 
                    title={project.project_archive.heading}
                    redirect={project.project_archive.url}
                    titleSize={'medium'}
                    iconSrc={icons[0].svg}
                    hasTextHighlight={true}
                    hasUnderline={false}
                    iconPosition={'right'}
                    hasBouncingIcon={true}
                    bounceDirection={'moveTopRight'}      
                />
            </div>
        </div>
    )
}

export default Project;