import Anchor from '@/components/molecules/Link/Anchor';
import styles from './Experience.module.scss';
import { useDataContext } from '@/context/consumption/useContext';
import { useState } from 'react';
import CardWrapper from '@/components/atoms/CardWrapper/CardWrapper';
import Pill from '@/components/atoms/Pill/Pill';

const Experience = () => {

    const[containerHover, setContainerHover] = useState<boolean>(false);
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
            <h2>{experience.heading}</h2>
            <div className={styles.cards}>
                {experience.experience.map((each: any) => (
                    <CardWrapper
                        setHover={(arg) => setContainerHover(arg)}
                        redirect={each.company_url}
                    >
                        <div 
                            className={styles.experienceCard}
                            onMouseOver={() => setContainerHover(true)}
                            onMouseLeave={() => setContainerHover(false)}
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
                                    highlightOnContainerHover={containerHover}
                                />
                                <h6>{each.description}</h6>
                                {each.company_products.length ?
                                    <div className={styles.companyBrands}>
                                        {each.company_products && each.company_products.map((product: any, index: number) => (
                                            <Anchor 
                                                title={product.name}
                                                redirect={product.url}
                                                titleSize={'small'}
                                                iconSrc={icons[2].svg}
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

            </div>
        </div>
    )
}

export default Experience;