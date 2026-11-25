import { Skeleton } from "@gem-org/gem-system";
import { SKELETON_ANIMATIONS } from "./demo.ts";
import "./skeleton-demo.css";

type AnimationsSkeletonProps = { ariaLabel: string };

export function AnimationsSkeleton({ ariaLabel }: AnimationsSkeletonProps) {
  return (
    <div className="skeleton-stack">
      {SKELETON_ANIMATIONS.map((animation) => (
        <div key={animation} className="skeleton-item">
          <p className="skeleton-caption">{animation}</p>
          <Skeleton animation={animation} count={2} aria-label={ariaLabel} />
        </div>
      ))}
      <div className="skeleton-item">
        <p className="skeleton-caption">duration={"{700}"}</p>
        <Skeleton duration={700} count={2} aria-label={ariaLabel} />
      </div>
    </div>
  );
}
