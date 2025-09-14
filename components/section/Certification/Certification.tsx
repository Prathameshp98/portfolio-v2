import { useState } from 'react';
import { useDataContext } from '@/context/consumption/useContext';
import { 
    CardWrapper,
    Pill,
    ImageContainer
} from '@/components/atoms';
import { Anchor } from '@/components/molecules';
import styles from './Certification.module.scss';

const Certification = () => {
    const [containerHoverId, setContainerHoverId] = useState<string | null>(null);
    const {
        data
    } = useDataContext();
    
    const certification = data.certification;
    const icons = data.icon[0].icons;
    
    // Default fallback image for certifications
    const defaultCertImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='90' viewBox='0 0 140 90'%3E%3Ctext x='70' y='50' text-anchor='middle' dominant-baseline='middle' font-family='system-ui' font-size='12' fill='%236b7280'%3ECertificate%3C/text%3E%3C/svg%3E";

    return (
        <div 
            id="CERTIFICATIONS"
            className={styles.certification}
        >
            <h2>{certification.data.name}</h2>
            <div className={styles.cards}>
                {certification.data.certifications.map((cert: any, index: number) => (
                    <CardWrapper
                        key={index}
                        setHover={(arg) => setContainerHoverId(arg)}
                        redirect={cert.url || "#"}
                        cardHoverId={cert.title}
                    >
                        <div 
                            className={styles.certificationCard}
                        >
                            <div className={styles.cardLeft}>
                                <div className={styles.imageContainer}>
                                    <ImageContainer 
                                        imageUrl={cert.image || defaultCertImage}
                                        altText={cert.title}
                                    />
                                </div>
                                <div className={styles.dateContainer}>
                                    <span className={styles.date}>{cert.date}</span>
                                </div>
                            </div>
                            <div className={styles.cardRight}>
                                <div className={styles.certHeader}>
                                    <Anchor 
                                        title={cert.title}
                                        redirect={cert.url || "#"}
                                        titleSize={'medium'}
                                        iconSrc={icons[0].svg}
                                        hasTextHighlight={true}
                                        hasUnderline={false}
                                        iconPosition={'right'}
                                        hasBouncingIcon={true}
                                        bounceDirection={'moveTopRight'}
                                        highlightOnContainerHover={cert.title === containerHoverId}
                                    />
                                    <div className={styles.issuer}>
                                        <Pill 
                                            id={`issuer-${index}`}
                                            skill={cert.issuer}
                                        />
                                    </div>
                                </div>
                                <p className={styles.description}>{cert.description}</p>
                            </div>
                        </div>
                    </CardWrapper>
                ))}
            </div>
        </div>
    )
}

export default Certification;
