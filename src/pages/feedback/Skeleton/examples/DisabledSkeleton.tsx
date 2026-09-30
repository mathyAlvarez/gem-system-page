import { Skeleton } from "@gem-org/gem-system";
import "./skeleton-demo.css";

type DisabledSkeletonProps = { ariaLabel: string };

export function DisabledSkeleton({ ariaLabel }: DisabledSkeletonProps) {
  return (
    <div className="skeleton-stack">
      <Skeleton count={3} disabled aria-label={ariaLabel} />
    </div>
  );
}
