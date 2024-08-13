
export default interface ImageContainerProps {
    imageUrl: string;
    altText: string;
    width?: number;
    height?: number;
    hightlightType?: 'overImage' | 'overContainer';
    isHover?: boolean;
}