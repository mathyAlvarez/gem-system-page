import { Grid, type GridProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { GridCell } from "./GridCell.tsx";

function CardGrid({ className, ...props }: GridProps) {
  return (
    <Grid
      auto="fit"
      className={cn(
        "[--gem-grid-min:8rem] [--gem-grid-gap:var(--gem-space-2)] rounded-lg border border-dashed border-(--gem-color-border) p-3",
        className,
      )}
      {...props}
    />
  );
}

const cells = [1, 2, 3, 4, 5, 6];

export function TailwindGrid() {
  return (
    <div className="grid-compare">
      <CardGrid>
        {cells.map((cell) => (
          <GridCell key={cell}>{cell}</GridCell>
        ))}
      </CardGrid>
      <CardGrid className="[--gem-grid-min:12rem] [--gem-grid-gap:var(--gem-space-6)] p-6">
        {cells.map((cell) => (
          <GridCell key={cell} accent>
            {cell}
          </GridCell>
        ))}
      </CardGrid>
    </div>
  );
}
