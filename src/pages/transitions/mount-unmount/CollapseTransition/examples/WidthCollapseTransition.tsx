import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";
import "./collapse-transition-demo.css";

type WidthCollapseTransitionProps = {
  expand: string;
  collapse: string;
  panel: string;
  sibling: string;
};

export function WidthCollapseTransition({
  expand,
  collapse,
  panel,
  sibling,
}: WidthCollapseTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="collapse-demo collapse-demo--row">
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
      <div className="collapse-demo__rail">
        <CollapseTransition isIn={isIn} dimension="width" duration={{ enter: 360, exit: 260 }}>
          <div className="collapse-demo__panel collapse-demo__panel--rail">{panel}</div>
        </CollapseTransition>
        <p className="collapse-demo__sibling">{sibling}</p>
      </div>
    </div>
  );
}
