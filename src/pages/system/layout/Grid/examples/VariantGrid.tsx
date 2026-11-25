import { Grid, type GridProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { GridCell } from "./GridCell.tsx";

const gridVariants = cva("", {
  variants: {
    density: {
      compact: "[--gem-grid-gap:var(--gem-space-1)]",
      default: "",
      spacious: "[--gem-grid-gap:var(--gem-space-8)]",
    },
    surface: {
      none: "",
      panel: "rounded-lg bg-(--gem-color-bg-subtle) p-4",
    },
  },
  defaultVariants: { density: "default", surface: "none" },
});

type VariantGridProps = GridProps & VariantProps<typeof gridVariants>;

export function VariantGrid({ density, surface, className, ...props }: VariantGridProps) {
  return <Grid className={cn(gridVariants({ density, surface }), className)} {...props} />;
}

const variants: VariantProps<typeof gridVariants>[] = [
  { density: "compact" },
  { density: "spacious" },
  { density: "compact", surface: "panel" },
];

const cells = [1, 2, 3, 4];

export function VariantGrids() {
  return (
    <div className="grid-compare">
      {variants.map((variant) => {
        const label = Object.entries(variant)
          .map(([key, value]) => `${key}="${value}"`)
          .join(" ");
        return (
          <div key={label}>
            <div className="grid-caption">{label}</div>
            <VariantGrid columns={4} {...variant}>
              {cells.map((cell) => (
                <GridCell key={cell}>{cell}</GridCell>
              ))}
            </VariantGrid>
          </div>
        );
      })}
    </div>
  );
}
