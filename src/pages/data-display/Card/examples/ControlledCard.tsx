import { useState } from "react";
import { Button, Card } from "@gem-org/gem-system";
import type { CardCommon } from "./demo.ts";
import "./card-demo.css";

type ControlledCardProps = { common: CardCommon; open: string; closed: string; toggle: string };

export function ControlledCard({ common, open, closed, toggle }: ControlledCardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="card-stack">
      <div className="flex items-center gap-3">
        <Button variant="secondary" size="sm" onClick={() => setExpanded((value) => !value)}>
          {toggle}
        </Button>
        <p className="card-state" aria-live="polite">
          {expanded ? open : closed}
        </p>
      </div>
      <Card expandable expanded={expanded} onExpandedChange={setExpanded}>
        <Card.Header title={common.title} subtitle={common.subtitle} />
        <Card.Body inert={!expanded}>{common.body}</Card.Body>
        <Card.Footer inert={!expanded}>
          <Button variant="secondary" size="sm">
            {common.cancel}
          </Button>
          <Button size="sm">{common.save}</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
