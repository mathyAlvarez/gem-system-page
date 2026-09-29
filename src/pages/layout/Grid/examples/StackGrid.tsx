import { Grid, type GridStack } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";

const variants: { label: string; stack?: GridStack }[] = [
  { label: "columns={3}" },
  { label: 'columns={3} stack="md"', stack: "md" },
  { label: "columns={3} stack={false}", stack: false },
];

export function StackGrid() {
  return (
    <div className="grid-compare">
      {variants.map((variant) => (
        <div key={variant.label}>
          <div className="grid-caption">{variant.label}</div>
          <Grid columns={3} gap={3} stack={variant.stack}>
            <GridCell>1</GridCell>
            <GridCell>2</GridCell>
            <GridCell>3</GridCell>
          </Grid>
        </div>
      ))}
    </div>
  );
}
