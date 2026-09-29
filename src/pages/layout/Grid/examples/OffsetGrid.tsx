import { Col, Row } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";

export function OffsetGrid() {
  return (
    <Row gap={3}>
      <Col span={6} offset={3}>
        <GridCell accent>span 6 · offset 3</GridCell>
      </Col>
      <Col span={4} offset={2}>
        <GridCell accent>span 4 · offset 2</GridCell>
      </Col>
      <Col span={4}>
        <GridCell>span 4</GridCell>
      </Col>
      <Col span={3} offset={9}>
        <GridCell accent>span 3 · offset 9</GridCell>
      </Col>
    </Row>
  );
}
