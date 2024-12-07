import Loading from '@/components/atoms/Loading/Loading';
import Anchor from "../Link/Anchor";
import { Pill } from '@/components/atoms';
import TableProps from './Table.d';
import styles from './Table.module.scss';

const Table = ({ projectData, error, arrowIcon }: TableProps) => {
    if (!projectData || error) return <Loading hasError={error} />;

    const sortedProjects = projectData.projects.sort((a: any, b: any) => 
        (parseInt(b.year_completed) || 0) - (parseInt(a.year_completed) || 0)
    );

    const renderAnchor = (title: string, url: string | null) => (
        url ? (
            <Anchor 
                title={title.replace('https://', '')} 
                redirect={url} 
                titleSize="medium"
                iconSrc={arrowIcon.rightUp}
                hasTextHighlight 
                hasUnderline={false} 
                iconPosition="right" 
                hasBouncingIcon 
                bounceDirection="moveTopRight" 
            />
        ) : '-'
    );

    return (
        <div className={styles.table}>
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
            <h1>{projectData.page_heading}</h1>
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
                    {sortedProjects.map((project: any, index: number) => (
                        <tr key={index}>
                            <td>{project.year_completed || 'In Progress'}</td>
                            <td>{project.name}</td>
                            <td>
                                {project.skills_used.map((skill: string, i: number) => (
                                    <Pill key={i} id={String(i)} skill={skill} />
                                ))}
                            </td>
                            <td>{renderAnchor(project.url || '', project.url)}</td>
                            <td>{renderAnchor(project.github_url || '', project.github_url)}</td>
                            <td>{project.deployed_at || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
