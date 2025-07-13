import React from 'react';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
  variant?: 'text' | 'title' | 'image' | 'card' | 'pill';
  lines?: number;
  gap?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  className = '',
  variant = 'text',
  lines = 1,
  gap = '8px'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'title':
        return { height: '24px', width: '60%' };
      case 'image':
        return { height: '140px', width: '140px', borderRadius: '8px' };
      case 'card':
        return { height: '200px', width: '100%', borderRadius: '12px' };
      case 'pill':
        return { height: '32px', width: '80px', borderRadius: '16px' };
      default:
        return { height, width };
    }
  };

  const variantStyles = getVariantStyles();

  if (lines > 1) {
    return (
      <div className={`${styles.skeletonContainer} ${className}`} style={{ gap }}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${styles.skeleton} ${styles.shimmer}`}
            style={{
              width: index === lines - 1 ? '80%' : '100%',
              height: variantStyles.height,
              borderRadius: variantStyles.borderRadius || borderRadius
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${styles.skeleton} ${styles.shimmer} ${variant === 'title' ? styles.titleSkeleton : ''} ${className}`}
      style={{
        width: variantStyles.width || width,
        height: variantStyles.height || height,
        borderRadius: variantStyles.borderRadius || borderRadius
      }}
    />
  );
};

export default Skeleton; 