import { Skeleton, type SkeletonProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./skeleton-demo.css";

const skeletonVariants = cva("", {
  variants: {
    tone: {
      neutral: "",
      brand:
        "[--gem-skeleton-bg:color-mix(in_srgb,var(--gem-palette-secondary-500)_16%,transparent)] [--gem-skeleton-shine:color-mix(in_srgb,var(--gem-palette-secondary-200)_70%,transparent)]",
    },
    density: {
      default: "",
      compact: "[--gem-skeleton-h:0.5rem] [--gem-skeleton-gap:0.375rem]",
    },
  },
  defaultVariants: { tone: "neutral", density: "default" },
});

type ToneSkeletonProps = SkeletonProps & VariantProps<typeof skeletonVariants>;

export function ToneSkeleton({ tone, density, className, ...props }: ToneSkeletonProps) {
  return <Skeleton className={cn(skeletonVariants({ tone, density }), className)} {...props} />;
}

type VariantSkeletonProps = { ariaLabel: string };

export function VariantSkeleton({ ariaLabel }: VariantSkeletonProps) {
  return (
    <div className="skeleton-stack">
      <div className="skeleton-item">
        <p className="skeleton-caption">tone="brand"</p>
        <ToneSkeleton tone="brand" count={3} aria-label={ariaLabel} />
      </div>
      <div className="skeleton-item">
        <p className="skeleton-caption">tone="brand" density="compact"</p>
        <ToneSkeleton tone="brand" density="compact" count={4} aria-label={ariaLabel} />
      </div>
    </div>
  );
}
