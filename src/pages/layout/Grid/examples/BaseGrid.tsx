import { Grid } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";

const cells = [1, 2, 3, 4, 5, 6];

export function BaseGrid() {
  return (
    <Grid columns={3} gap={4}>
      {cells.map((cell) => (
        <GridCell key={cell}>{cell}</GridCell>
      ))}
    </Grid>
  );
}
