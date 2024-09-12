import styles from './Footer.module.scss';
import { useDataContext } from '@/context/consumption/useContext';

const Footer = () => {

    const {
        data,
        setData
    } = useDataContext();
    const footer = data.footer;
    
    return (
        <div className={styles.footer}>
           <div dangerouslySetInnerHTML={{ __html: footer.text }} />
        </div>
    )
}

export default Footer;