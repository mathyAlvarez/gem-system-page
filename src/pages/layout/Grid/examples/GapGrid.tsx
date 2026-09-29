import { Grid, type GridProps } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";

const variants: { label: string; props: GridProps }[] = [
  { label: "gap={2}  →  var(--gem-space-2)", props: { gap: 2 } },
  { label: "gap={20}  →  20px", props: { gap: 20 } },
  { label: 'gap="2.5rem"', props: { gap: "2.5rem" } },
  { label: "rowGap={2} columnGap={8}", props: { rowGap: 2, columnGap: 8 } },
];

const cells = [1, 2, 3, 4, 5, 6, 7, 8];

export function GapGrid() {
  return (
    <div className="grid-compare">
      {variants.map((variant) => (
        <div key={variant.label}>
          <div className="grid-caption">{variant.label}</div>
          <Grid columns={4} {...variant.props}>
            {cells.map((cell) => (
              <GridCell key={cell}>{cell}</GridCell>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}
