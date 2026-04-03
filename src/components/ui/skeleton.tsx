import { FC } from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div 
      className={`bg-gradient-to-r from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.08)] animate-pulse rounded-lg ${className}`}
    />
  );
};
