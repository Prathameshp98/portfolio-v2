import Loading from '@/components/atoms/Loading/Loading';
import Anchor from "../Link/Anchor";
import { Pill } from '@/components/atoms';
import TableProps from './Table.d';
import styles from './Table.module.scss';

const Table = ({
    projectData,
    error,
    arrowIcon
}: TableProps) => {

    console.log(projectData)
    const sortedProject = projectData?.projects.sort((a: any, b: any) => {
        const yearA = parseInt(a.year_completed) || 0;
        const yearB = parseInt(b.year_completed) || 0;
        return yearB - yearA;
    });

    return (
        <div>
            {(!projectData || error) && <Loading hasError={error}/>}
            {projectData &&
                <div className={styles.table}>
                    <div className={styles.goHome}>
                        <Anchor 
                            title={'Prathamesh Patil'}
                            redirect={'/'}
                            titleSize={'large'}
                            iconSrc={arrowIcon.left}
                            hasTextHighlight={true}
                            hasUnderline={false}
                            iconPosition={'left'}
                            hasBouncingIcon={true}
                            bounceDirection={'moveTopRight'}     
                            rotateIcon={true} 
                        />
                    </div>
                    <h1>{projectData?.page_heading}</h1>
                    <table className={styles.tableContainer}>
                        <thead>
                            <th>{projectData?.table_heading.year}</th>
                            <th>{projectData?.table_heading.project}</th>
                            <th>{projectData?.table_heading.build_with}</th>
                            <th>{projectData?.table_heading.link}</th>
                            <th>{projectData?.table_heading.github}</th>
                            <th>{projectData?.table_heading.deployed_at}</th>
                        </thead>
                        <tbody>
                            {sortedProject.map((project: any, index: number) => (
                                <tr key={index}>
                                    <td>{project.year_completed.length ? project.year_completed : 'In Progress'}</td>
                                    <td>{project.name}</td>
                                    <td>
                                        {project.skills_used.map((_: any, index: number) => (
                                            <Pill 
                                                key={index}
                                                id={String(index)}
                                                skill={project.skills_used[index]}
                                            />
                                        ))}
                                    </td>
                                    <td>
                                        {project.url ? <Anchor 
                                            title={project.url.replace('https://','')}
                                            redirect={project.url}
                                            titleSize={'medium'}
                                            iconSrc={arrowIcon.rightUp}
                                            hasTextHighlight={true}
                                            hasUnderline={false}
                                            iconPosition={'right'}
                                            hasBouncingIcon={true}
                                            bounceDirection={'moveTopRight'}
                                        />: '-'}
                                    </td>  
                                    <td>
                                        {project.github_url ? <Anchor 
                                            title={project.github_url.replace('https://github.com/','')}
                                            redirect={project.github_url}
                                            titleSize={'medium'}
                                            iconSrc={arrowIcon.rightUp}
                                            hasTextHighlight={true}
                                            hasUnderline={false}
                                            iconPosition={'right'}
                                            hasBouncingIcon={true}
                                            bounceDirection={'moveTopRight'}
                                        />: '-'}
                                    </td>  
                                    <td>{project.deployed_at.length ? project.deployed_at : '-'}</td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
};

export default Table;