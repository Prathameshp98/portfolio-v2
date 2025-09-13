import styles from './PersonalInfo.module.scss';
import { useDataContext } from '@/context/consumption/useContext';

const PersonalInfo = () => {

    const {
        data,
        setData
    } = useDataContext();
    const intro = data.intro.data;

    return (
        <div className={styles.personalInfo}>
            <h1>{intro.name}</h1>
            <h4>{intro.designation}</h4>
            <p>{intro.heading}</p>
        </div>
    )
}

export default PersonalInfo;