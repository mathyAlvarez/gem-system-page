import { Grid } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";
import "./grid-overrides.css";

type StyledGridsProps = {
  texts: { sidebar: string; content: string };
};

const cells = [1, 2, 3, 4];

export function StyledGrids({ texts }: StyledGridsProps) {
  return (
    <div className="grid-compare">
      <Grid columns={4} className="grid-panel">
        {cells.map((cell) => (
          <GridCell key={cell}>{cell}</GridCell>
        ))}
      </Grid>
      <Grid className="grid-sidebar">
        <GridCell accent tall>
          {texts.sidebar}
        </GridCell>
        <GridCell tall>{texts.content}</GridCell>
      </Grid>
    </div>
  );
}
