import { Skeleton } from "@gem-org/gem-system";
import { SKELETON_RADII } from "./demo.ts";
import "./skeleton-demo.css";

type RadiusSkeletonProps = { ariaLabel: string };

export function RadiusSkeleton({ ariaLabel }: RadiusSkeletonProps) {
  return (
    <div className="skeleton-row">
      {SKELETON_RADII.map((radius) => (
        <div key={radius} className="skeleton-item">
          <p className="skeleton-caption">{radius}</p>
          <Skeleton
            variant="rectangular"
            radius={radius}
            width="5.5rem"
            height="3.25rem"
            aria-label={ariaLabel}
          />
        </div>
      ))}
    </div>
  );
}
