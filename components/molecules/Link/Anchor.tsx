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
    highlightOnContainerHover = false,
    rotateIcon = false
}: AnchorProps) => {

    const iconRef = useRef<HTMLDivElement>(null);

    const sizeStyles = {
        large: styles.large,
        medium: styles.medium,
        small: styles.small
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
            className={`${styles.anchor}`}
            href={redirect}
            target='_blank'
        >
            <span
                className={`
                    ${sizeStyles[titleSize]}
                    ${highlightOnContainerHover && styles.wrapperHoverText}
                    ${hasTextHighlight && styles.highlight}
                    ${hasUnderline && styles.textUnderline}
                `}
            >
                {iconPosition === 'right' ?
                    <>
                        {title}
                        <div   
                            ref={iconRef}  
                            className={`
                                ${styles.inlineIcon}
                                ${rotateIcon && styles.rotate}
                                ${sizeStyles[titleSize]}
                            `}
                            dangerouslySetInnerHTML={{ __html: iconSrc }} 
                        />
                    </>
                     :
                    <>
                        <div   
                            ref={iconRef}  
                            className={`
                                ${styles.inlineIcon}
                                ${rotateIcon && styles.rotate}
                            `}
                            dangerouslySetInnerHTML={{ __html: iconSrc }} 
                        />
                        {title}
                    </>
                }
                
            </span>
            
        </a>
    )
}

export default Anchor;
