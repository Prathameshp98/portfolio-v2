import { SkeletonLoader } from '@/components/atoms';
import Anchor from "../Link/Anchor";
import { Pill } from '@/components/atoms';
import useViewportWidth from '@/hooks/useViewportWidth';
import TableProps from './Table.d';
import styles from './Table.module.scss';

const Table = ({ projectData, error, arrowIcon }: TableProps) => {
    if (!projectData || error) return <SkeletonLoader hasError={error} variant="table" />;

    const width = useViewportWidth();
    const sortedProjects = projectData.projects.sort((a: any, b: any) => 
        (parseInt(b.year_completed) || 0) - (parseInt(a.year_completed) || 0)
    );

    const renderAnchor = (title: string, url: string | null, replaceStr?: string) => (
        url ? (
            <Anchor 
                title={title.replace(replaceStr ? replaceStr : '', '')} 
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
                    <tr>
                        <th className={styles.mobileRow}>{projectData?.table_heading.year}</th>
                        <th>{projectData?.table_heading.project}</th>
                        <th className={styles.smallTablet}>{projectData?.table_heading.build_with}</th>
                        <th className={styles.mobile}>{projectData?.table_heading.link}</th>
                        <th className={styles.tablet}>{projectData?.table_heading.github}</th>
                        <th className={styles.tablet}>{projectData?.table_heading.deployed_at}</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProjects.map((project: any, index: number) => (
                        <tr 
                            key={index}
                            className={styles.row}
                        >
                            <td className={styles.link}>{project.year_completed || 'In Progress'}</td>
                            <td className={styles.mobileRow}>
                                {width < 450 ?
                                    <>{renderAnchor(project.name || '', project.url || '#')}</>
                                    : <>{project.name}</>
                                }
                            </td>
                            <td className={`${styles.skills} ${styles.smallTablet}`}>
                                {project.skills_used.map((skill: string, i: number) => (
                                    <Pill key={i} id={String(i)} skill={skill} />
                                ))}
                            </td>
                            <td className={`${styles.link} ${styles.mobile}`}>{renderAnchor(project.url || '', project.url, 'https://')}</td>
                            <td className={`${styles.link} ${styles.tablet}`}>{renderAnchor(project.github_url || '', project.github_url, 'https://github.com/')}</td>
                            <td className={`${styles.link} ${styles.tablet}`}>{project.deployed_at || '-'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
