import { Skeleton } from "@gem-org/gem-system";
import "./skeleton-demo.css";

type TailwindSkeletonProps = { ariaLabel: string };

export function TailwindSkeleton({ ariaLabel }: TailwindSkeletonProps) {
  return (
    <div className="skeleton-stack">
      <Skeleton
        count={3}
        gap={10}
        aria-label={ariaLabel}
        className="[--gem-skeleton-bg:color-mix(in_srgb,var(--gem-palette-tertiary-500)_18%,transparent)] [--gem-skeleton-h:0.625rem] [--gem-skeleton-radius:9999px]"
        classNames={{ bone: "first:w-2/5 first:h-4" }}
      />
    </div>
  );
}
