import { useState } from 'react';
import { useDataContext } from '@/context/consumption/useContext';
import { 
    CardWrapper, 
    ImageContainer
} from '@/components/atoms';
import { Anchor } from '@/components/molecules';
import styles from './Writing.module.scss';

const Writing = () => {

    const[containerHoverId, setContainerHoverId] = useState<string | null>(null);
    const {
        data
    } = useDataContext();
    const writing = data.writing;
    const icons = data.icon[0].icons;

    console.log(writing);
    
    return (
        <div 
            id="WRITING"
            className={styles.writing}
        >
            <h2>{writing.heading}</h2>
            <div className={styles.cards}>
                {writing.writings.map((each: any, index: number) => (
                    <CardWrapper
                        key={index}
                        setHover={(arg) => setContainerHoverId(arg)}
                        redirect={each.url}
                        cardHoverId={each.name}
                    >
                        <div 
                            className={styles.projectCard}
                            onMouseOver={() => setContainerHoverId(each.name)}
                            onMouseLeave={() => setContainerHoverId(null)}
                        >
                            <div className={styles.cardLeft}>
                                <ImageContainer 
                                    imageUrl={each.image_url}
                                    altText={each.name}
                                />
                            </div>
                            <div className={styles.cardRight}>
                                <p className={styles.year}>{each.year_published}</p>
                                <Anchor 
                                    title={each.name}
                                    redirect={each.url}
                                    titleSize={'medium'}
                                    iconSrc={icons[0].svg}
                                    hasTextHighlight={true}
                                    hasUnderline={false}
                                    iconPosition={'right'}
                                    hasBouncingIcon={true}
                                    bounceDirection={'moveTopRight'}
                                    highlightOnContainerHover={each.name === containerHoverId}
                                />
                                <p className={styles.readTime}>{each.read}</p>
                            </div>
                        </div>
                    </CardWrapper>
                ))}
            </div>
            <div>
                <Anchor 
                    title={writing.blog_archieve.heading}
                    redirect={writing.blog_archieve.url}
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

export default Writing;