import { Col, Grid, Row } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";
import "./grid-col-fix.css";

export function NestedGrid() {
  return (
    <Row gap={4}>
      <Col span={12} md={8}>
        <Grid columns={2} gap={2}>
          <GridCell accent>A</GridCell>
          <GridCell accent>B</GridCell>
          <GridCell accent>C</GridCell>
          <GridCell accent>D</GridCell>
        </Grid>
      </Col>
      <Col span={12} md={4}>
        <GridCell tall>md 4</GridCell>
      </Col>
    </Row>
  );
}
