import Loading from '@/components/atoms/Loading/Loading';
import Anchor from "../Link/Anchor";
import { 
    useEffect, 
    useState,
    useRef
} from "react";
import fetchAll from '@/api/fetchAll';
import styles from './Table.module.scss';

const Table = () => {

    const dataFetchedRef = useRef(false);
    const[data, setData] = useState<any>(null);
    const[error, setError] = useState<boolean>(false);
    const sortedProject = data?.project.projects.sort((a: any, b: any) => {
        const yearA = parseInt(a.year_completed) || 0;
        const yearB = parseInt(b.year_completed) || 0;
        return yearB - yearA;
    });
    const project = data?.project;
    const arrowIcon = data?.icon[0].icons[2].svg;

    useEffect(() => {
        const fetchData = async () => {
            if (dataFetchedRef.current) return;
            dataFetchedRef.current = true;
  
            try {
                const res = await fetchAll();
                setData(res);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(true);
            }
        };
  
        fetchData();
    }, []);

    return (
        <div>
            {(!data || error) && <Loading hasError={error}/>}
            {data &&
                <div className={styles.table}>
                    <div className={styles.goHome}>
                        <Anchor 
                            title={'Prathamesh Patil'}
                            redirect={''}
                            titleSize={'large'}
                            iconSrc={arrowIcon}
                            hasTextHighlight={true}
                            hasUnderline={false}
                            iconPosition={'left'}
                            hasBouncingIcon={true}
                            bounceDirection={'moveTopRight'}     
                            rotateIcon={true} 
                        />
                    </div>
                    <h1>{project.page_heading}</h1>
                    <table>
                        <thead>
                            
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
};

export default Table;