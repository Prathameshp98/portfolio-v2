
export default interface AnchorProps {
    title: string;
    titleSize: 'large' | 'medium' | 'small';
    iconSrc: string;
    hasTextHighlight: boolean;
    hasUnderline: boolean;
    iconPosition: 'left' | 'right';
    hasBouncingIcon: boolean;
    bounceDirection: 'moveTopRight' | 'moveRight';
}