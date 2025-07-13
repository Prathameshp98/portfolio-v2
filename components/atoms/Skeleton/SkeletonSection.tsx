import React from 'react';
import Skeleton from './Skeleton';
import SkeletonCard from './SkeletonCard';
import styles from './SkeletonSection.module.scss';

interface SkeletonSectionProps {
  variant?: 'about' | 'experience' | 'project' | 'writing' | 'personal-info';
  cardCount?: number;
  className?: string;
}

const SkeletonSection: React.FC<SkeletonSectionProps> = ({ 
  variant = 'about', 
  cardCount = 3,
  className = '' 
}) => {
  const getSectionLayout = () => {
    switch (variant) {
      case 'about':
        return (
          <div className={`${styles.section} ${className}`}>
            <Skeleton variant="title" />
            <Skeleton lines={4} gap="12px" />
          </div>
        );
      
      case 'experience':
        return (
          <div className={`${styles.section} ${className}`}>
            <Skeleton variant="title" />
            <div className={styles.cards}>
              {Array.from({ length: cardCount }).map((_, index) => (
                <SkeletonCard key={index} variant="experience" />
              ))}
            </div>
          </div>
        );
      
      case 'project':
        return (
          <div className={`${styles.section} ${className}`}>
            <Skeleton variant="title" />
            <div className={styles.cards}>
              {Array.from({ length: cardCount }).map((_, index) => (
                <SkeletonCard key={index} variant="project" />
              ))}
            </div>
          </div>
        );
      
      case 'writing':
        return (
          <div className={`${styles.section} ${className}`}>
            <Skeleton variant="title" />
            <div className={styles.cards}>
              {Array.from({ length: cardCount }).map((_, index) => (
                <SkeletonCard key={index} variant="writing" />
              ))}
            </div>
          </div>
        );
      
      case 'personal-info':
        return (
          <div className={`${styles.section} ${className}`}>
            <Skeleton height="48px" width="80%" />
            <Skeleton height="24px" width="60%" />
            <Skeleton lines={2} gap="12px" />
          </div>
        );
      
      default:
        return null;
    }
  };

  return getSectionLayout();
};

export default SkeletonSection; 