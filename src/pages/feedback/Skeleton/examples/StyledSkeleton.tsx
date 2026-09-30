import { Skeleton } from "@gem-org/gem-system";
import "./skeleton-demo.css";
import "./skeleton-overrides.css";

type StyledSkeletonProps = { ariaLabel: string };

export function StyledSkeleton({ ariaLabel }: StyledSkeletonProps) {
  return (
    <div className="skeleton-stack">
      <Skeleton className="skeleton-branded" count={3} duration={2200} aria-label={ariaLabel} />
    </div>
  );
}
