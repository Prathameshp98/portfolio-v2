import Image from "next/image";
import styles from './ImageContainer.module.scss';
import ImageContainerProps from "./ImageContainerProps.d";

const ImageContainer = ({
    imageUrl,
    altText,
    width = 180,
    height = 110,
    hightlightType = 'overImage',
    isHover = false
}: ImageContainerProps) => {

    const className = `
                ${styles.image}
                ${hightlightType === 'overContainer' && isHover && styles.imageHover}
            `;
    
    return (
        <Image 
            src={imageUrl}
            alt={altText}
            width={width}
            height={height}
            className={className}
        />
    )
}

export default ImageContainer;