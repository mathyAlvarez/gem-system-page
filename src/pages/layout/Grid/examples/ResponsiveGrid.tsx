import { useSyncExternalStore } from "react";
import { Col, Row } from "@gem-org/gem-system";
import { GridCell } from "./GridCell.tsx";
import "./grid-col-fix.css";

const steps = [
  { query: "(min-width: 1024px)", label: "lg → span 4" },
  { query: "(min-width: 768px)", label: "md → span 6" },
];

const getStep = () => steps.find((step) => window.matchMedia(step.query).matches)?.label ?? "base → span 12";

const subscribe = (onChange: () => void) => {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
};

const cells = [1, 2, 3, 4, 5, 6];

export function ResponsiveGrid() {
  const step = useSyncExternalStore(subscribe, getStep);

  return (
    <div>
      <div className="grid-caption">{step}</div>
      <Row gap={3}>
        {cells.map((cell) => (
          <Col key={cell} span={12} md={6} lg={4}>
            <GridCell>{cell}</GridCell>
          </Col>
        ))}
      </Row>
    </div>
  );
}
