import CardWrapperProps from './CardWrapper.d';
import styles from './CardWrapper.module.scss';
import useViewportWidth from '@/utils/useViewportWidth';

const CardWrapper = ({
    children,
    setHover,
    redirect,
    cardHoverId
}: CardWrapperProps) => {
    const width = useViewportWidth();

    return (
        <div suppressHydrationWarning>
            {width < 768 ?
                (<div className={styles.baseWrapper}>
                    {children}
                </div>) :
                <a
                    className={`${styles.wrapper} ${styles.groupHoverElement}`}
                    onMouseOver={() => setHover(cardHoverId)}
                    onMouseLeave={() => setHover(null)}
                    href={redirect}
                    target='_blank'
                >
                    {children}
                </a>
            }
        </div>
    )
}

export default CardWrapper;