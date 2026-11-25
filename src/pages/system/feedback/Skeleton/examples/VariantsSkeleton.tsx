import { Skeleton } from "@gem-org/gem-system";
import { SKELETON_VARIANTS } from "./demo.ts";
import "./skeleton-demo.css";

type VariantsSkeletonProps = { ariaLabel: string };

export function VariantsSkeleton({ ariaLabel }: VariantsSkeletonProps) {
  return (
    <div className="skeleton-row">
      {SKELETON_VARIANTS.map((variant) => (
        <div key={variant} className="skeleton-item">
          <p className="skeleton-caption">{variant}</p>
          <Skeleton
            variant={variant}
            width={variant === "text" ? "12rem" : undefined}
            height={variant === "rectangular" ? "4.5rem" : undefined}
            aria-label={ariaLabel}
          />
        </div>
      ))}
    </div>
  );
}
