import { useEffect, useState } from 'react';
import styles from './JumpLink.module.scss';
import { useDataContext } from '@/context/consumption/useContext';

const JumpLink = () => {

    const {
        data,
        setData
    } = useDataContext();
    const section = data.section.data.sections;
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = section.indexOf(entry.target.id);
                    setActiveIndex(index);
                }
            });
        }, options);

        section.forEach((sectionId: string) => {
            const target = document.getElementById(sectionId);
            if (target) observer.observe(target);
        });

        return () => {
            section.forEach((sectionId: string) => {
                const target = document.getElementById(sectionId);
                if (target) observer.unobserve(target);
            });
        };
    }, [section]);

    const handleClick = (index: number) => {
        const sectionId = section[index];
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveIndex(index);
    };


    return (
        <div className={styles.jumpLink}>
            {section.map((text: string, index: number) => (
                <div 
                    key={index}
                    className={`${styles.link} ${activeIndex === index ? styles.active : ''}`}
                    onClick={() => handleClick(index)}
                >
                    <div className={styles.line}></div>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    );
}

export default JumpLink;
