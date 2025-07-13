import React from 'react';
import Skeleton from './Skeleton';
import styles from './SkeletonTable.module.scss';

interface SkeletonTableProps {
  rowCount?: number;
  className?: string;
}

const SkeletonTable: React.FC<SkeletonTableProps> = ({ 
  rowCount = 5,
  className = '' 
}) => {
  return (
    <div className={`${styles.table} ${className}`}>
      <div className={styles.goHome}>
        <Skeleton height="24px" width="200px" />
      </div>
      <Skeleton variant="title" />
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <Skeleton height="20px" width="60px" />
          <Skeleton height="20px" width="120px" />
          <Skeleton height="20px" width="100px" />
          <Skeleton height="20px" width="80px" />
          <Skeleton height="20px" width="100px" />
          <Skeleton height="20px" width="120px" />
        </div>
        <div className={styles.tableBody}>
          {Array.from({ length: rowCount }).map((_, index) => (
            <div key={index} className={styles.tableRow}>
              <Skeleton height="16px" width="40px" />
              <Skeleton height="16px" width="150px" />
              <Skeleton height="16px" width="100px" />
              <Skeleton height="16px" width="80px" />
              <Skeleton height="16px" width="100px" />
              <Skeleton height="16px" width="120px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonTable; 