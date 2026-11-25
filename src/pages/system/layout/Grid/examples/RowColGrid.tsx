import { Col, Row, type GridSpan } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";

const spans: GridSpan[] = [12, 6, 6, 4, 4, 4, 3, 3, 3, 3, 8, 4];

export function RowColGrid() {
  return (
    <Row gap={3}>
      {spans.map((span, index) => (
        <Col key={index} span={span}>
          <GridCell accent={span === 8}>{span}</GridCell>
        </Col>
      ))}
    </Row>
  );
}
