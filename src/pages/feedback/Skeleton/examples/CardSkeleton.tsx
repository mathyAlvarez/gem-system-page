import { Skeleton } from "@gem-org/gem-system";
import "./skeleton-demo.css";

type CardSkeletonProps = { ariaLabel: string };

export function CardSkeleton({ ariaLabel }: CardSkeletonProps) {
  return (
    <div className="skeleton-card" role="status" aria-busy="true" aria-label={ariaLabel}>
      <div className="skeleton-profile">
        <Skeleton variant="circular" width={40} aria-hidden />
        <div className="skeleton-lines">
          <Skeleton width="55%" aria-hidden />
          <Skeleton width="38%" aria-hidden />
        </div>
      </div>
      <Skeleton variant="rectangular" height="7.5rem" aria-hidden />
      <Skeleton count={3} aria-hidden />
    </div>
  );
}
