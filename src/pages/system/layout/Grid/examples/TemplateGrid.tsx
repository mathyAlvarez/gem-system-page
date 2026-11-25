import { Grid } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";

type TemplateGridProps = { sidebar: string; content: string };

export function TemplateGrid({ sidebar, content }: TemplateGridProps) {
  return (
    <div className="grid-compare">
      <div>
        <div className="grid-caption">template="minmax(0, 16rem) minmax(0, 1fr)" stack="md"</div>
        <Grid template="minmax(0, 16rem) minmax(0, 1fr)" stack="md" gap={4}>
          <GridCell accent tall>
            {sidebar}
          </GridCell>
          <GridCell tall>{content}</GridCell>
        </Grid>
      </div>
      <div>
        <div className="grid-caption">template="1fr 2fr 1fr"</div>
        <Grid template="1fr 2fr 1fr" gap={4}>
          <GridCell>1fr</GridCell>
          <GridCell accent>2fr</GridCell>
          <GridCell>1fr</GridCell>
        </Grid>
      </div>
    </div>
  );
}
