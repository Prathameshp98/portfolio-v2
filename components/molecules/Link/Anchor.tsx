'use client';
import { useEffect, useRef } from 'react';
import AnchorProps from './Anchor.d';
import styles from './Anchor.module.scss';

const Anchor = ({
    title,
    titleSize,
    iconSrc,
    hasTextHighlight = true,
    hasUnderline,
    iconPosition,
    hasBouncingIcon = false,
    bounceDirection
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
            if(svgElement){
                svgElement.classList.add(styles[bounceDirection]);
            }     
        }
    }, [hasBouncingIcon, bounceDirection]);

    return (
        <div 
            className={`
                ${styles.anchor}
                ${iconPositionStyles[iconPosition]}
            `}
        >
            <p
                className={`
                    ${sizeStyles[titleSize]}
                    ${hasTextHighlight && styles.highlight}
                    ${hasUnderline && styles.textUnderline}
                `}
            >
                {title}
            </p>
            <div   
                ref={iconRef}  
                dangerouslySetInnerHTML={{ __html: iconSrc }} 
            />
        </div>
    )
}

export default Anchor;
