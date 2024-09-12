'use client';
import { useEffect, useRef } from 'react';
import AnchorProps from './Anchor.d';
import styles from './Anchor.module.scss';

const Anchor = ({
    title,
    redirect,
    titleSize,
    iconSrc,
    hasTextHighlight = true,
    hasUnderline,
    iconPosition,
    hasBouncingIcon = false,
    bounceDirection,
    highlightOnContainerHover = false
}: AnchorProps) => {

    const iconRef = useRef<HTMLDivElement>(null);

    const sizeStyles = {
        large: styles.large,
        medium: styles.medium,
        small: styles.small
    };

    const iconPositionStyles = {
        left: styles.left,
        right: styles.right
    };

    useEffect(() => {
        const iconElement = iconRef.current;
        
        if(hasBouncingIcon && iconElement){
            const svgElement = iconElement.querySelector('svg');
            if(svgElement && bounceDirection){
                svgElement.classList.add(styles[bounceDirection]);
            }     
        }
    }, [hasBouncingIcon, bounceDirection]);

    return (
        <a 
            className={`
                ${styles.anchor}
                ${iconPositionStyles[iconPosition]}
            `}
            href={redirect}
            target='_blank'
        >
            <p
                className={`
                    ${sizeStyles[titleSize]}
                    ${highlightOnContainerHover && styles.wrapperHoverText}
                    ${hasTextHighlight && styles.highlight}
                    ${hasUnderline && styles.textUnderline}
                `}
            >
                {title}
                <div   
                    ref={iconRef}  
                    className={styles.inlineIcon}
                    dangerouslySetInnerHTML={{ __html: iconSrc }} 
                />
            </p>
            
        </a>
    )
}

export default Anchor;
