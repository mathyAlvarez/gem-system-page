import { Skeleton } from "@gem-org/gem-system";
import "./skeleton-demo.css";

type TextLinesSkeletonProps = { ariaLabel: string };

export function TextLinesSkeleton({ ariaLabel }: TextLinesSkeletonProps) {
  return (
    <div className="skeleton-stack">
      <div className="skeleton-item">
        <p className="skeleton-caption">count={"{4}"}</p>
        <Skeleton count={4} aria-label={ariaLabel} />
      </div>
      <div className="skeleton-item">
        <p className="skeleton-caption">count={"{3}"} gap={"{12}"} lastLineWidth="40%"</p>
        <Skeleton count={3} gap={12} lastLineWidth="40%" aria-label={ariaLabel} />
      </div>
    </div>
  );
}
