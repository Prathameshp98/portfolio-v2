"use client";
import { 
  useState, 
  useEffect,
  useRef
} from 'react';
import DataContext from '@/context/creation/createContext';
import fetchAll from '@/api/fetchAll';
import useCursorGradient from '@/utils/useCursorGradient';
import Loading from '@/components/atoms/Loading/Loading';

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

    console.log(error)
    
    return (
      <main>
          <DataContext.Provider value={{data, setData}}>
            <div 
              className={`${visible && 'cursor-gradient'}`}
               style={{top: position.y, left: position.x}}
            >
            </div>
            {(!data || error) && <Loading hasError={error}/>}
          </DataContext.Provider>
      </main>
      
    )
}
