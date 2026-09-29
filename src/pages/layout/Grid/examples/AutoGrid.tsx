import { Grid, type GridAutoMode } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";

const variants: { label: string; auto: GridAutoMode; count: number }[] = [
  { label: 'auto="fit" minItemWidth="10rem"', auto: "fit", count: 6 },
  { label: 'auto="fit" minItemWidth="10rem"', auto: "fit", count: 2 },
  { label: 'auto="fill" minItemWidth="10rem"', auto: "fill", count: 2 },
];

export function AutoGrid() {
  return (
    <div className="grid-compare">
      {variants.map((variant, index) => (
        <div key={index}>
          <div className="grid-caption">{variant.label}</div>
          <Grid auto={variant.auto} minItemWidth="10rem" gap={3}>
            {Array.from({ length: variant.count }, (_, cell) => (
              <GridCell key={cell} accent={variant.auto === "fill"}>
                {cell + 1}
              </GridCell>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}
