import { Skeleton } from "@gem-org/gem-system";
import "./skeleton-demo.css";

type CustomSizeSkeletonProps = { ariaLabel: string };

export function CustomSizeSkeleton({ ariaLabel }: CustomSizeSkeletonProps) {
  return (
    <div className="skeleton-row">
      <div className="skeleton-item">
        <p className="skeleton-caption">width={"{48}"}</p>
        <Skeleton variant="circular" width={48} aria-label={ariaLabel} />
      </div>
      <div className="skeleton-item">
        <p className="skeleton-caption">8rem × 3.25rem</p>
        <Skeleton variant="rectangular" width="8rem" height="3.25rem" aria-label={ariaLabel} />
      </div>
      <div className="skeleton-item" style={{ width: "12rem" }}>
        <p className="skeleton-caption">width="72%" height={"{20}"}</p>
        <Skeleton width="72%" height={20} aria-label={ariaLabel} />
      </div>
    </div>
  );
}
