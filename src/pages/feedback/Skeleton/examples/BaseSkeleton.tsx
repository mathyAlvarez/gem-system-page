import { Skeleton } from "@gem-org/gem-system";
import "./skeleton-demo.css";

type BaseSkeletonProps = { ariaLabel: string };

export function BaseSkeleton({ ariaLabel }: BaseSkeletonProps) {
  return (
    <div className="skeleton-stack">
      <Skeleton aria-label={ariaLabel} />
    </div>
  );
}
