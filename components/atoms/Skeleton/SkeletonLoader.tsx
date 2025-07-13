import React from 'react';
import SkeletonSection from './SkeletonSection';
import SkeletonTable from './SkeletonTable';
import SkeletonNavigation from './SkeletonNavigation';
import Skeleton from './Skeleton';
import styles from './SkeletonLoader.module.scss';

interface SkeletonLoaderProps {
  hasError?: boolean;
  variant?: 'full-page' | 'section' | 'table';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  hasError = false, 
  variant = 'full-page' 
}) => {
  if (hasError) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <h1>500</h1>
          <p>Something went wrong!</p>
        </div>
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className={styles.sectionLoader}>
        <SkeletonSection variant="about" />
        <SkeletonSection variant="experience" cardCount={2} />
        <SkeletonSection variant="project" cardCount={3} />
        <SkeletonSection variant="writing" cardCount={2} />
      </div>
    );
  }

  if (variant === 'table') {
    return <SkeletonTable rowCount={5} />;
  }

  return (
    <div className={styles.fullPageLoader}>
      <div className={styles.leftSection}>
        <SkeletonNavigation />
      </div>
      <div className={styles.rightSection}>
        <SkeletonSection variant="about" />
        <SkeletonSection variant="experience" cardCount={2} />
        <SkeletonSection variant="project" cardCount={3} />
        <SkeletonSection variant="writing" cardCount={2} />
        <div className={styles.footer}>
          <Skeleton lines={2} gap="8px" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader; 