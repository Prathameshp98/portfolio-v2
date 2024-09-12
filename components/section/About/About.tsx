import styles from './About.module.scss';
import { useDataContext } from '@/context/consumption/useContext';

const About = () => {

    const {
        data,
        setData
    } = useDataContext();
    const about = data.about;
    
    return (
        <div 
            id="ABOUT"
            className={styles.about}
        >
            <h2>{about.name}</h2>
            <div>
                <p dangerouslySetInnerHTML={{ __html: about.description }} />
            </div>
        </div>
    )
}

export default About;