
import styles from './ImageContainer.module.scss';
import ImageContainerProps from "./ImageContainerProps.d";

const ImageContainer = ({
    imageUrl,
    altText,
    hightlightType = 'overImage',
    isHover = false
}: ImageContainerProps) => {

    const className = `
                ${styles.image}
                ${hightlightType === 'overContainer' && isHover && styles.imageHover}
            `;
    
    return (
        <img
            src={imageUrl}
            alt={altText}
            className={className}
        />
    )
}

export default ImageContainer;