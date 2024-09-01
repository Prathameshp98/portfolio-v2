import Icon from '@/components/atoms/Icon/Icon';
import styles from './Socials.module.scss';
import { useDataContext } from '@/context/consumption/useContext';

const Socials = () => {

    const {
        data,
        setData
    } = useDataContext();
    const socials = data.social[0].socials;

    return (
        <div className={styles.social}>
            {socials.map((icon: any) => (
                <div key={Math.random()}>
                    <Icon 
                        iconSrc={icon.url}
                        url={icon.redirect}
                        width={23}
                    />
                </div>
            ))}
        </div>
    )
}

export default Socials;