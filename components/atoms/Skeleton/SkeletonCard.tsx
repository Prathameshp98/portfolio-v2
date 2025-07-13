import React from 'react';
import Skeleton from './Skeleton';
import styles from './SkeletonCard.module.scss';

interface SkeletonCardProps {
  variant?: 'project' | 'writing' | 'experience';
  className?: string;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ 
  variant = 'project', 
  className = '' 
}) => {
  const getCardLayout = () => {
    switch (variant) {
      case 'project':
        return (
          <div className={`${styles.card} ${className}`}>
            <div className={styles.cardLeft}>
              <Skeleton variant="image" />
            </div>
            <div className={styles.cardRight}>
              <Skeleton variant="title" />
              <Skeleton lines={3} gap="12px" />
              <div className={styles.skills}>
                <Skeleton variant="pill" />
                <Skeleton variant="pill" />
                <Skeleton variant="pill" />
              </div>
            </div>
          </div>
        );
      
      case 'writing':
        return (
          <div className={`${styles.card} ${className}`}>
            <div className={styles.cardLeft}>
              <Skeleton variant="image" />
            </div>
            <div className={styles.cardRight}>
              <Skeleton height="16px" width="60px" />
              <Skeleton variant="title" />
              <Skeleton height="16px" width="100px" />
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className={`${styles.card} ${className}`}>
            <div className={styles.cardContent}>
              <Skeleton variant="title" />
              <Skeleton lines={2} gap="8px" />
              <div className={styles.skills}>
                <Skeleton variant="pill" />
                <Skeleton variant="pill" />
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return getCardLayout();
};

export default SkeletonCard; 