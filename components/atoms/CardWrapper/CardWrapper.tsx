import CardWrapperProps from './CardWrapper.d';
import styles from './CardWrapper.module.scss';
import useViewportWidth from '@/utils/useViewportWidth';

const CardWrapper = ({
    children,
    setHover,
    redirect
}: CardWrapperProps) => {
    const width = useViewportWidth();
    console.log(width)

    return (
        <>
            {width < 768 ?
                (<div className={styles.baseWrapper}>
                    {children}
                </div>) :
                <a
                    className={`${styles.wrapper} ${styles.groupHoverElement}`}
                    onMouseOver={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    href={redirect}
                    target='_blank'
                >
                    {children}
                </a>
            }
        </>
    )
}

export default CardWrapper;