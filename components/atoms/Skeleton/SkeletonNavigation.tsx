import React from 'react';
import Skeleton from './Skeleton';
import styles from './SkeletonNavigation.module.scss';

interface SkeletonNavigationProps {
  className?: string;
}

const SkeletonNavigation: React.FC<SkeletonNavigationProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`${styles.navigation} ${className}`}>
      <div className={styles.personalInfo}>
        <Skeleton height="48px" width="80%" />
        <Skeleton height="24px" width="60%" />
        <Skeleton lines={2} gap="12px" />
      </div>
      
      <div className={styles.jumpLinks}>
        <Skeleton height="20px" width="100px" />
        <Skeleton height="20px" width="120px" />
        <Skeleton height="20px" width="90px" />
        <Skeleton height="20px" width="110px" />
      </div>
      
      <div className={styles.socials}>
        <Skeleton height="24px" width="24px" />
        <Skeleton height="24px" width="24px" />
        <Skeleton height="24px" width="24px" />
      </div>
    </div>
  );
};

export default SkeletonNavigation; 