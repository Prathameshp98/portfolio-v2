import CardWrapperProps from './CardWrapper.d';
import styles from './CardWrapper.module.scss';
import useViewportWidth from '@/hooks/useViewportWidth';

const CardWrapper = ({
    children,
    setHover,
    redirect,
    cardHoverId
}: CardWrapperProps) => {
    const width = useViewportWidth();

    return (
        <div
            className={width < 768 ? styles.baseWrapper : `${styles.wrapper} ${styles.groupHoverElement}`}
            onMouseOver={() => setHover(cardHoverId)}
            onMouseLeave={() => setHover(null)}
            onClick={() => {
                if (redirect) window.open(redirect, '_blank');
            }}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </div>
    )
}

export default CardWrapper;