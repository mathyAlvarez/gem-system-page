import { Col, Grid, Row } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";

export function AlignGrid() {
  return (
    <div className="grid-compare">
      <div>
        <div className="grid-caption">{'<Row align="center">  +  <Col align="end">'}</div>
        <Row align="center" gap={3}>
          <Col span={4}>
            <GridCell tall>8rem</GridCell>
          </Col>
          <Col span={4}>
            <GridCell>center</GridCell>
          </Col>
          <Col span={4} align="end">
            <GridCell accent>end</GridCell>
          </Col>
        </Row>
      </div>
      <div>
        <div className="grid-caption">{'<Grid template="6rem 6rem 6rem" justify="between">'}</div>
        <Grid template="6rem 6rem 6rem" justify="between" gap={3}>
          <GridCell>1</GridCell>
          <GridCell>2</GridCell>
          <GridCell>3</GridCell>
        </Grid>
      </div>
    </div>
  );
}
