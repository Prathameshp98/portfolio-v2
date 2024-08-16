'use client';
import React, { useEffect, useRef } from 'react';
import IconProps from "./IconProps";
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';

const Icon = ({
    id,
    iconSrc,
    url,
    width,
    fillColor,
    hoverFillColor = ''
}: IconProps) => {

    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const iconElement = iconRef.current;

        if (iconElement && hoverFillColor) {
            const svgElement = iconElement.querySelector('svg');

            if (svgElement) {
                const handleMouseEnter = () => {
                    svgElement.setAttribute('fill', hoverFillColor);
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
            key={id}
            ref={iconRef}
            onClick={redirectHandler}
            style={{
                width: width,
                fill: fillColor,
                cursor: 'pointer'
            }}
            dangerouslySetInnerHTML={{ __html: iconSrc }} 
        />
    );
};

export default Icon;