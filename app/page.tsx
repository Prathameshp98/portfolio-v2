"use client";
import styles from './page.module.scss';
import DataContext from '@/context/creation/createContext';
import useCursorGradient from '@/hooks/useCursorGradient';
import Loading from '@/components/atoms/Loading/Loading';
import Left from '@/components/Partial/Left/Left';
import Right from '@/components/Partial/Right/Right';
import FetchHandler from '@/hooks/FetchHandler';

export default function Home() {
    const { position, visible } = useCursorGradient();
    const {
      data,
      setData,
      error
    } = FetchHandler();
    
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
