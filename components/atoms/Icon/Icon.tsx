'use client';
import React, { useEffect, useRef } from 'react';
import IconProps from "./IconProps";
import styles from './Icon.module.scss';

const Icon = ({
    iconSrc,
    url,
    width
}: IconProps) => {

    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const iconElement = iconRef.current;

        if (iconElement) {
            const svgElement = iconElement.querySelector('svg');

            if (svgElement) {
                const handleMouseEnter = () => {
                    svgElement.setAttribute('fill', '#94A3B8');
                };

                const handleMouseLeave = () => {
                    svgElement.removeAttribute('fill'); // or reset to original fill if needed
                };

                iconElement.addEventListener('mouseenter', handleMouseEnter);
                iconElement.addEventListener('mouseleave', handleMouseLeave);

                return () => {
                    iconElement.removeEventListener('mouseenter', handleMouseEnter);
                    iconElement.removeEventListener('mouseleave', handleMouseLeave);
                };
            }
        }
    }, []);

    const redirectHandler = () => {
        window.location.href = url
    }

    return (
        <div
            className={styles.icon}
            ref={iconRef}
            onClick={redirectHandler}
            style={{
                width: width
            }}
            dangerouslySetInnerHTML={{ __html: iconSrc }} 
        />
    );
};

export default Icon;