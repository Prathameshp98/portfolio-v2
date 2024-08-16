import PillProps from "./PillProps";
import Styles from './Pill.module.scss';

const Pill = ({
    id,
    skill
}: PillProps) => {

    return (
        <div 
            key={id}
            className={`${Styles.pillContainer}`}
        >
            <p className={`${Styles.pillPara}`}>{skill}</p>
        </div>
    )
};

export default Pill;