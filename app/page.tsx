"use client";
import { 
  useState, 
  useEffect,
  useRef
} from 'react';
import styles from './page.module.scss';
import DataContext from '@/context/creation/createContext';
import fetchAll from '@/api/fetchAll';
import useCursorGradient from '@/utils/useCursorGradient';
import Loading from '@/components/atoms/Loading/Loading';
import Left from '@/components/Partial/Left/Left';
import Right from '@/components/Partial/Right/Right';

export default function Home() {
    const { position, visible } = useCursorGradient();
    const[data, setData] = useState<any>(null);
    const[error, setError] = useState<boolean>(false);
    const dataFetchedRef = useRef(false);

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
      <main>
          <DataContext.Provider value={{data, setData}}>
            <div 
              className={`${visible && 'cursor-gradient'}`}
               style={{top: position.y, left: position.x}}
            >
            </div>
            {(!data || error) && <Loading hasError={error}/>}
            {data && 
              <div className={styles.appWrapper}>
                <div className={styles.app}>
                  <div className={styles.leftSection}>
                    <Left />
                  </div>
                  <div className={styles.rightSection}>
                    <Right />
                  </div>
                </div>
              </div>
            }
          </DataContext.Provider>
      </main>
      
    )
}
