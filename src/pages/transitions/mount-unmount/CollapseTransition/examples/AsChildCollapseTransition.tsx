import { useState } from "react";
import { Button, Card } from "@gem-org/gem-system";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";
import "./collapse-transition-demo.css";

type AsChildCollapseTransitionProps = {
  expand: string;
  collapse: string;
  title: string;
  panel: string;
};

export function AsChildCollapseTransition({
  expand,
  collapse,
  title,
  panel,
}: AsChildCollapseTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="collapse-demo">
      <div className="collapse-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? collapse : expand}
        </Button>
      </div>
      <CollapseTransition isIn={isIn} asChild>
        <Card title={title} bordered shadow="sm">
          <p style={{ margin: 0 }}>{panel}</p>
        </Card>
      </CollapseTransition>
    </div>
  );
}
