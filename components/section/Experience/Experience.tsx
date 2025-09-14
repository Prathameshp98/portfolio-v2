
import { useState } from 'react';
import { 
    CardWrapper,
    Pill
} from '@/components/atoms';
import { Anchor } from '@/components/molecules';
import { useDataContext } from '@/context/consumption/useContext';
import styles from './Experience.module.scss';

const Experience = () => {

    const[containerHoverId, setContainerHoverId] = useState<string | null>(null);
    const {
        data
    } = useDataContext();
    const experience = data.experience;
    const icons = data.icon[0].icons
    
    return (
        <div 
            id="EXPERIENCE"
            className={styles.experience}
        >
            <h2>{experience.data.heading}</h2>
            <div className={styles.cards}>
                {experience.data.experience.map((each: any, index: number) => (
                    <CardWrapper
                        key={index}
                        setHover={(arg) => setContainerHoverId(arg)}
                        redirect={each.company_url}
                        cardHoverId={each.designation}
                    >
                        <div 
                            className={styles.experienceCard}
                            onMouseOver={() => setContainerHoverId(each.designation)}
                            onMouseLeave={() => setContainerHoverId(null)}
                        >
                            <div className={styles.cardLeft}>
                                <p>{each.duration}</p>
                            </div>
                            <div className={styles.cardRight}>
                                <Anchor 
                                    title={each.designation}
                                    redirect={each.company_url}
                                    titleSize={'medium'}
                                    iconSrc={icons[0].svg}
                                    hasTextHighlight={true}
                                    hasUnderline={false}
                                    iconPosition={'right'}
                                    hasBouncingIcon={true}
                                    bounceDirection={'moveTopRight'}
                                    highlightOnContainerHover={each.designation === containerHoverId}
                                />
                                <h6>{each.description}</h6>
                                {each.company_products.length ?
                                    <div 
                                        suppressHydrationWarning
                                        className={styles.companyBrands}
                                    >
                                        {each.company_products && each.company_products.map((product: any, index: number) => (
                                            <Anchor 
                                                key={index}
                                                title={product.name}
                                                redirect={product.url}
                                                titleSize={'small'}
                                                iconSrc={icons[3].svg}
                                                hasTextHighlight={true}
                                                hasUnderline={false}
                                                iconPosition={'left'}
                                                hasBouncingIcon={false}
                                                highlightOnContainerHover={false}
                                            />
                                        ))}
                                    </div>
                                : null}
                                {each.skills.length ?
                                    <div className={styles.skills}>
                                        {each.skills.map((_: any, index: number) => (
                                            <Pill 
                                                key={index}
                                                id={String(index)}
                                                skill={each.skills[index]}
                                            />
                                        ))}
                                    </div>
                                : null}   
                            </div>
                        </div>
                    </CardWrapper>
                ))}
            </div>
            <div>
                <Anchor 
                    title={experience.data.resume.heading}
                    redirect={experience.data.resume.url}
                    titleSize={'medium'}
                    iconSrc={icons[0].svg}
                    hasTextHighlight={true}
                    hasUnderline={false}
                    iconPosition={'right'}
                    hasBouncingIcon={true}
                    bounceDirection={'moveTopRight'}      
                />
            </div>
        </div>
    )
}

export default Experience;